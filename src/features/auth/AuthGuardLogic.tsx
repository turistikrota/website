import { redirect } from "next-intl/server";
import { ReadonlyURLSearchParams, notFound } from "next/navigation";
import { Spinner } from "sspin";
import { isUser } from "~/types/user";
import { isExpiredError } from "./auth.types";

export type ChainContext = {
  currentPath: string;
  blockPageOnLoading: boolean;
  query: ReadonlyURLSearchParams;
  loading: boolean;
  error: any;
  data: any;
  claimGuard: boolean;
  redirectIfFound: boolean;
  redirectIfNotFound: boolean;
  redirectIfFoundPath: string;
  redirectIfNotFoundPath: string;
  claims: string[];
  redirectIfClaimNotFoundPath: string;
  skipContent?: boolean;
};

export type ChainResult = React.ReactNode | null | undefined;

const replaceLocales = (path: string) => {
  const regex = new RegExp(`^/(tr|en)`);
  return path.replace(regex, "");
};

const Loading = () => (
  <div className="flex items-center justify-center h-full">
    <Spinner />
  </div>
);

export const CheckLoading = (ctx: ChainContext): ChainResult => {
  if (ctx.blockPageOnLoading && ctx.loading) {
    return <Loading />;
  }
  return null;
};

export const RedirectIfFound = (ctx: ChainContext): ChainResult => {
  if (
    ctx.redirectIfFound &&
    isUser(ctx.data) &&
    !ctx.loading &&
    replaceLocales(ctx.currentPath) === ctx.redirectIfFoundPath
  ) {
    return redirect(ctx.redirectIfFoundPath);
  }
  return null;
};

export const RedirectIfNotFound = (ctx: ChainContext): ChainResult => {
  if (
    ctx.redirectIfNotFound &&
    !ctx.data &&
    !ctx.loading &&
    replaceLocales(ctx.currentPath) !== ctx.redirectIfNotFoundPath
  ) {
    return redirect(ctx.redirectIfNotFoundPath);
  }
  return null;
};

export const CheckRefreshAvailable = (ctx: ChainContext): ChainResult => {
  if (ctx.error && !ctx.loading && isExpiredError(ctx.error)) {
    const query = ctx.query.get("refresh");
    if (query === "true") {
      ctx.skipContent = true;
      return null;
    }
    return redirect(ctx.redirectIfNotFoundPath + "?refresh=true");
  }
  return null;
};

export const CheckAllExpired = (ctx: ChainContext): ChainResult => {
  if (
    ctx.error &&
    !ctx.loading &&
    !(ctx.redirectIfNotFound && !isExpiredError(ctx.error)) &&
    !ctx.skipContent
  ) {
    return notFound();
  }
  return null;
};

export const ClaimGuard = (ctx: ChainContext): ChainResult => {
  if (
    ctx.claimGuard &&
    isUser(ctx.data) &&
    !isExpiredError(ctx.error) &&
    !ctx.loading &&
    !ctx.claims.every((claim) => ctx.data?.claims?.includes(claim))
  ) {
    return redirect(ctx.redirectIfClaimNotFoundPath);
  }
  return null;
};
