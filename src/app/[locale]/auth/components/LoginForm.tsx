"use client";

import { useLocale } from "next-intl";
import Turnstile from "turnstile-next";

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

export default function LoginForm() {
  const locale = useLocale();

  const callback = (...params: any[]) => {
    console.log("cf:calback::", params);
  };

  return (
    <>
      <Turnstile
        siteKey={SITE_KEY!}
        locale={locale}
        onVerify={(...params) => callback("onAny::", ...params)}
      />
    </>
  );
}
