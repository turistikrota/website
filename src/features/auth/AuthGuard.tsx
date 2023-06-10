"use client";
import { notFound, redirect, usePathname } from "next/navigation";
import { Spinner } from "sspin";
import { isUser } from "~/types/user";
import AuthClientProvider from "./AuthClientProvider";
import { useGetCurrentQuery } from "./auth.api";
import { isExpiredError } from "./auth.types";

type Props = {
  blockPageOnLoading?: boolean;
  claimGuard?: boolean;
  redirectIfFound?: boolean;
  redirectIfNotFound?: boolean;
  redirectIfFoundPath?: string;
  redirectIfNotFoundPath?: string;
  claims?: string[];
  redirectIfClaimNotFoundPath?: string;
};

const Loading = () => (
  <div className="flex items-center justify-center h-full">
    <Spinner />
  </div>
);

export default function AuthGuard({
  children,
  blockPageOnLoading = false,
  redirectIfFound = false,
  redirectIfNotFound = false,
  claimGuard = false,
  redirectIfFoundPath = "/account/select",
  redirectIfNotFoundPath = "/auth",
  redirectIfClaimNotFoundPath = "/errors/403",
  claims = [],
}: React.PropsWithChildren<Props>) {
  const path = usePathname();
  const { isLoading, data, error } = useGetCurrentQuery({});

  const replaceLocales = (path: string) => {
    const regex = new RegExp(`^/(tr|en)`);
    return path.replace(regex, "");
  };

  if (blockPageOnLoading && isLoading) return <Loading />;
  if (
    redirectIfFound &&
    isUser(data) &&
    !isLoading &&
    replaceLocales(path) !== redirectIfFoundPath
  ) {
    return redirect(redirectIfFoundPath);
  }
  if (
    redirectIfNotFound &&
    !data &&
    !isLoading &&
    replaceLocales(path) !== redirectIfNotFoundPath
  ) {
    return redirect(redirectIfNotFoundPath);
  }
  if (error && !isLoading) {
    if (redirectIfNotFound && !isExpiredError(error)) {
      return redirect(redirectIfNotFoundPath);
    }
    if (!isExpiredError(error)) return notFound();
  }
  if (
    claimGuard &&
    !isExpiredError(error) &&
    !isLoading &&
    isUser(data) &&
    claims.length > 0
  ) {
    const hasClaim = claims.some((claim) => data.roles.includes(claim));
    if (!hasClaim) {
      return redirect(redirectIfClaimNotFoundPath);
    }
  }
  return (
    <AuthClientProvider user={isUser(data) ? data : null}>
      {children}
    </AuthClientProvider>
  );
}
