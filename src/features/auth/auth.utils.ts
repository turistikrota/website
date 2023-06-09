import { NextRouter } from "next/router";

export const checkRedirectable = (router: NextRouter) => {
  if (router.query.redirect) {
    const redirect = router.query.redirect as string;
    const redirectUrl = new URL(redirect);
    const currentUrl = new URL(window.location.href);
    if (redirectUrl.hostname === currentUrl.hostname) {
      return router.push(redirect);
    }
  }
  router.push("/");
};
