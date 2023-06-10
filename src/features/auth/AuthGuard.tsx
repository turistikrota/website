"use client";
import { notFound, redirect } from "next/navigation";
import { Spinner } from "sspin";
import { isUser } from "~/types/user";
import AuthClientProvider from "./AuthClientProvider";
import { useGetCurrentQuery } from "./auth.api";

type Props = {
  blockPageOnLoading?: boolean;
  requiredAuth?: boolean;
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
  redirectIfFoundPath = "/account-select",
  redirectIfNotFoundPath = "/auth",
  redirectIfClaimNotFoundPath = "/errors/403",
  claims = [],
}: React.PropsWithChildren<Props>) {
  const { isLoading, data, error } = useGetCurrentQuery({});

  if (blockPageOnLoading && (isLoading || data === null)) return <Loading />;
  if (redirectIfFound && data !== null) {
    return redirect(redirectIfFoundPath);
  }
  if (redirectIfNotFound && data === null) {
    return redirect(redirectIfNotFoundPath);
  }
  if (error) {
    if (redirectIfNotFound) {
      return redirect(redirectIfNotFoundPath);
    }
    return notFound();
  }
  if (claimGuard && isUser(data) && claims.length > 0) {
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
