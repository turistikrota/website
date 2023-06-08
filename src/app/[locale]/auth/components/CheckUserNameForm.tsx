"use client";

import { useLocale, useTranslations } from "next-intl";
import { useContext } from "react";
import { SpinContext } from "sspin";
import Turnstile from "turnstile-next";
import { Button, Input } from "~/components";
import { Config } from "~/config";
import { useHttp } from "~/hooks/http/http";

type Props = {
  onNext: (val: boolean) => void;
};

export default function CheckUserNameForm({ onNext }: Props) {
  const t = useTranslations("auth.check");
  const locale = useLocale();
  const http = useHttp();
  const { setSpin } = useContext(SpinContext);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const turnstileToken = formData.get("cf-turnstile-response") as string;
    if (!turnstileToken) {
      console.log("Robot doğrulaması yapınız");
      return;
    }
    setSpin(true);
    const res = await http
      .post(
        "/auth/checkEmail",
        {
          email: email,
        },
        {
          headers: {
            "X-Turnstile-Token": turnstileToken ?? "x",
          },
        }
      )
      .catch(http.onError);
    setSpin(false);
    if (res && res.status < 300 && res.data && res.data.exists) {
      onNext(true);
    } else {
      // show error message
    }
  };

  return (
    <div>
      <form className="space-y-4 md:space-y-6 ease-in" onSubmit={onSubmit}>
        <Input
          label={t("email")}
          name="email"
          autoComplete="on"
          required
          autoFocus
        />
        <Turnstile siteKey={Config.turnstile.siteKey} locale={locale} />
        <Button htmlType="submit">{t("button")}</Button>
      </form>
    </div>
  );
}
