import { useLocale, useTranslations } from "next-intl";
import { useContext } from "react";
import { SpinContext } from "sspin";
import TurnstileInput from "turnstile-next";
import { Button, Input } from "~/components";
import { Config } from "~/config";
import { useHttp } from "~/hooks/http/http";

export default function RegisterForm() {
  const t = useTranslations("auth.register");
  const locale = useLocale();
  const http = useHttp();
  const { setSpin } = useContext(SpinContext);

  const onSubmit = async () => {};

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
        <Input
          label={t("password")}
          name="password"
          type="password"
          autoComplete="on"
          required
          autoFocus
        />
        <TurnstileInput siteKey={Config.turnstile.siteKey} locale={locale} />
        <Button htmlType="submit">{t("button")}</Button>
      </form>
    </div>
  );
}
