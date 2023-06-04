"use client";

import { useLocale } from "next-intl";
import Turnstile from "~/components/turnstile/Turnstile";

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
        onAny={(...params) => callback("onAny::", ...params)}
        onError={(...params) => callback("onError::", ...params)}
        onExpire={(...params) => callback("onExpire::", ...params)}
        onBeforeInteractive={(...params) =>
          callback("onBeforeInteractive::", ...params)
        }
        onAfterInteractive={(...params) =>
          callback("onAfterInteractive::", ...params)
        }
        onUnsupported={(...params) => callback("onUnsupported::", ...params)}
      />
    </>
  );
}
