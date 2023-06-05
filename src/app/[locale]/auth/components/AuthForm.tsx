"use client";

import { useLocale } from "next-intl";
import { useState } from "react";
import Turnstile from "turnstile-next";
import Button from "~/components/button/Button";
import Condition from "~/components/condition/Condition";
import Input from "~/components/form/Input";

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

export default function LoginForm() {
  const locale = useLocale();
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [emailExist, setEmailExist] = useState(false);

  const onTurnstileVerify = (token: string) => {
    setTurnstileToken(token);
  };

  const onTurnstileError = (error: string) => {
    console.error(error);
    setTurnstileToken(null);
  };

  const checkEmail = async () => {};

  const login = async () => {};

  const register = async () => {};

  const onClick = () => {};

  return (
    <>
      <form className="space-y-4 md:space-y-6" action="#">
        <Input
          label="Your email"
          name="email"
          autoComplete="on"
          required
          autoFocus
        />
        <Condition value={emailExist}>
          <Input
            label="Your password"
            name="password"
            autoComplete="on"
            required
            autoFocus
          />
        </Condition>

        <Turnstile
          siteKey={SITE_KEY!}
          locale={locale}
          onVerify={onTurnstileVerify}
          onError={onTurnstileError}
        />

        <Button onClick={onClick}>Sign In</Button>
      </form>
    </>
  );
}
