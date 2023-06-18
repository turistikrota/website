import { useFormik } from "formik";
import { useLocale, useTranslations } from "next-intl";
import { useLocalizedRouter } from "next-intl/client";
import Link from "next-intl/link";
import { useSearchParams } from "next/navigation";
import { useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { SpinContext } from "sspin";
import TurnstileInput from "turnstile-next";
import Button from "~/components/button/Button";
import Checkbox from "~/components/form/Checkbox";
import Input from "~/components/form/Input";
import { useToast } from "~/components/toast/Toast";
import { Config } from "~/config";
import { getStaticRoute } from "~/static/page";
import { parseApiError } from "~/utils/response";
import { useSchema } from "~/utils/schema";
import { refreshTurnstile } from "~/utils/turnstile";
import { useRegisterMutation } from "./auth.api";
import { setTurnstileToken } from "./auth.store";
import { checkRedirectable } from "./auth.utils";

type Props = {
  email: string;
};

export default function RegisterForm({ email }: Props) {
  const t = useTranslations("auth.register");
  const locale = useLocale();
  const schema = useSchema();
  const dispatch = useDispatch();
  const router = useLocalizedRouter();
  const searchParams = useSearchParams();
  const toast = useToast();
  const { setSpin } = useContext(SpinContext);
  const [handleRegister, { isLoading, data, status, error, originalArgs }] =
    useRegisterMutation({});
  const form = useFormik({
    initialValues: {
      email: email,
      password: "",
      privacy: false,
    },
    validationSchema: schema.auth.register,
    onSubmit: (values) => {
      handleRegister({
        email: values.email,
        password: values.password,
        privacy: values.privacy,
      });
    },
  });

  useEffect(() => {
    refreshTurnstile();
  }, []);

  useEffect(() => {
    setSpin(isLoading);
  }, [isLoading]);

  useEffect(() => {
    if (status === "fulfilled") {
      toast.success(t("success"));
      checkRedirectable(
        router,
        searchParams,
        getStaticRoute(locale).account.select
      );
    } else if (status === "rejected") {
      parseApiError({ error, form, toast });
      refreshTurnstile();
    }
  }, [status]);

  const onError = (err: string) => {
    dispatch(setTurnstileToken(""));
  };

  const onVerify = (token: string) => {
    dispatch(setTurnstileToken(token));
  };

  const onCheckboxChange = (val: boolean) => {
    form.setFieldValue("privacy", val);
  };

  return (
    <div>
      <form
        className="space-y-4 md:space-y-6 ease-in"
        onSubmit={form.handleSubmit}
      >
        <Input
          label={t("email")}
          name="email"
          id="email"
          type="email"
          autoComplete="on"
          required
          autoFocus
          value={form.values.email}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          error={form.errors.email}
          ariaLabel={t("email")}
        />
        <Input
          label={t("password")}
          name="password"
          type="password"
          id="password"
          autoComplete="on"
          required
          autoFocus
          value={form.values.password}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          error={form.errors.password}
          ariaLabel={t("password")}
        />
        <Checkbox
          name="privacy"
          id="privacy"
          onChange={onCheckboxChange}
          onBlur={onCheckboxChange}
          error={form.errors.privacy}
          value={form.values.privacy}
          required
        >
          {t.rich("privacy.text", {
            termsOfUse: () => (
              <Link
                href={getStaticRoute(locale).contracts.terms}
                className="text-secondary-500"
                target="_blank"
              >
                {t("privacy.termsOfUse")}
              </Link>
            ),
            privacyPolicy: () => (
              <Link
                href={getStaticRoute(locale).contracts.privacy}
                className="text-secondary-500"
                target="_blank"
              >
                {t("privacy.privacyPolicy")}
              </Link>
            ),
            privacyNotify: () => (
              <Link
                href={getStaticRoute(locale).contracts.privacyNotify}
                className="text-secondary-500 hover:text-secondary-600 dark:hover:text-secondary-400"
                target="_blank"
              >
                {t("privacy.privacyNotify")}
              </Link>
            ),
          })}
        </Checkbox>
        <TurnstileInput
          siteKey={Config.turnstile.siteKey}
          locale={locale}
          onError={onError}
          onVerify={onVerify}
        />
        <Button htmlType="submit">{t("button")}</Button>
      </form>
    </div>
  );
}
