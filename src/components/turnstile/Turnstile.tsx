"use client";
import Script from "next/script";
import { useEffect } from "react";

type Props = {
  siteKey: string;
  theme?: "light" | "dark";
  locale?: string;
  prefix?: string;
  onAny: (...params: any[]) => void;
  onError: (...params: any[]) => void;
  onExpire: (...params: any[]) => void;
  onBeforeInteractive: (...params: any[]) => void;
  onAfterInteractive: (...params: any[]) => void;
  onUnsupported: (...params: any[]) => void;
};

export default function Turnstile({
  siteKey,
  theme,
  locale,
  prefix,
  onAny,
  onError,
  onExpire,
  onBeforeInteractive,
  onAfterInteractive,
  onUnsupported,
}: Props) {
  const names = {
    callback: prefix ? `${prefix}_callback` : "cf_turnstile_callback",
    error: prefix ? `${prefix}_error` : "cf_turnstile_error",
    expire: prefix ? `${prefix}_expire` : "cf_turnstile_expire",
    beforeInteractive: prefix
      ? `${prefix}_beforeInteractive`
      : "cf_turnstile_beforeInteractive",
    afterInteractive: prefix
      ? `${prefix}_afterInteractive`
      : "cf_turnstile_afterInteractive",
    unsupported: prefix ? `${prefix}_unsupported` : "cf_turnstile_unsupported",
  };
  useEffect(() => {
    if (typeof window === "undefined") return;
    // @ts-ignore
    window[names.callback] = onAny;
    // @ts-ignore
    window[names.error] = onError;
    // @ts-ignore
    window[names.expire] = onExpire;
    // @ts-ignore
    window[names.beforeInteractive] = onBeforeInteractive;
    // @ts-ignore
    window[names.afterInteractive] = onAfterInteractive;
    // @ts-ignore
    window[names.unsupported] = onUnsupported;
  }, [
    names.callback,
    names.error,
    names.expire,
    names.beforeInteractive,
    names.afterInteractive,
    names.unsupported,
    onAny,
    onError,
    onExpire,
    onBeforeInteractive,
    onAfterInteractive,
    onUnsupported,
  ]);
  return (
    <div
      className="cf-turnstile"
      data-sitekey={siteKey}
      data-theme={theme}
      data-language={locale}
      data-callback={names.callback}
      data-error-callback={names.error}
      data-expired-callback={names.expire}
      data-beforeinteractive-callback={names.beforeInteractive}
      data-afterinteractive-callback={names.afterInteractive}
      data-unsupported-callback={names.unsupported}
    ></div>
  );
}

export const TurnstileContext = () => {
  return (
    <Script
      src="https://challenges.cloudflare.com/turnstile/v0/api.js"
      async
      defer
    ></Script>
  );
};
