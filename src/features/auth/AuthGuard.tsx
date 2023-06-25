"use client";
import { useLocale } from "next-intl";
import {
  notFound,
  redirect,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import Loading from "~/components/loading/Loading";
import { getStaticRoute } from "~/static/page";
import { isUser } from "~/types/user";
import AuthClientProvider from "./AuthClientProvider";
import { useGetCurrentQuery } from "./auth.api";
import { isExpiredError } from "./auth.types";

type Props = {
  skip?: boolean;
  blockPageOnLoading?: boolean;
  claimGuard?: boolean;
  redirectIfFound?: boolean;
  redirectIfNotFound?: boolean;
  redirectIfFoundPath?: string;
  redirectIfNotFoundPath?: string;
  claims?: string[];
  redirectIfClaimNotFoundPath?: string;
};

const replaceLocales = (path: string) => {
  const regex = new RegExp(`^/(tr|en)`);
  return path.replace(regex, "");
};

export default function AuthGuard({
  children,
  skip = false,
  blockPageOnLoading = false,
  redirectIfFound = false,
  redirectIfNotFound = false,
  claimGuard = false,
  claims = [],
}: React.PropsWithChildren<Props>): JSX.Element {
  const path = usePathname();
  const router = useRouter();
  const query = useSearchParams();
  const locale = useLocale();
  const { isLoading, data, error } = useGetCurrentQuery({}, { skip });

  const redirectIfFoundPath = getStaticRoute(locale).account.select;
  const redirectIfNotFoundPath = getStaticRoute(locale).auth.default;
  const refreshQuery = query.get("refresh");

  // check loading
  if (blockPageOnLoading && isLoading) return <Loading />;

  // redirect if found
  if (
    redirectIfFound &&
    !isLoading &&
    isUser(data) &&
    replaceLocales(path) !== redirectIfFoundPath &&
    refreshQuery !== "true"
  )
    return redirect(redirectIfFoundPath);

  // redirect if not found
  if (
    redirectIfNotFound &&
    !isLoading &&
    !data &&
    replaceLocales(path) !== redirectIfNotFoundPath &&
    refreshQuery !== "true"
  )
    return redirect(redirectIfNotFoundPath);

  // check refresh
  if (!isLoading && error && isExpiredError(error) && refreshQuery !== "true") {
    if (replaceLocales(path) === redirectIfNotFoundPath) {
      router.replace(path, { query: { refresh: "true" } });
    } else {
      return redirect(getStaticRoute(locale).auth.refresh);
    }
  }

  // check all expired
  if (
    !isLoading &&
    error &&
    !(redirectIfNotFound && !isExpiredError(error) && refreshQuery !== "true")
  ) {
    return redirect(getStaticRoute(locale).auth.default);
  }

  // claim guard
  if (
    claimGuard &&
    !isLoading &&
    isUser(data) &&
    !isExpiredError(error) &&
    !claims.every((claim) => data.roles.includes(claim))
  )
    return notFound();

  return (
    <AuthClientProvider user={isUser(data) ? data : null}>
      {children}
    </AuthClientProvider>
  );
}
