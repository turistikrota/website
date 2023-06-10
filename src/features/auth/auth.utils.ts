import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";
import { ReadonlyURLSearchParams } from "next/navigation";

export const checkRedirectable = (
  router: AppRouterInstance,
  searchParams: ReadonlyURLSearchParams,
  fallback: string = "/"
) => {
  const redirect = searchParams.get("redirect");
  if (redirect) {
    const redirectUrl = new URL(redirect);
    const currentUrl = new URL(window.location.href);
    if (redirectUrl.hostname === currentUrl.hostname) {
      return router.push(redirect);
    }
  }
  router.push(fallback);
};
