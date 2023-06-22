import { useFormik } from "formik";
import { useLocale, useTranslations } from "next-intl";
import { useLocalizedRouter } from "next-intl/client";
import { useSearchParams } from "next/navigation";
import { useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { SpinContext } from "sspin";
import TurnstileInput from "turnstile-next";
import Button from "~/components/button/Button";
import Input from "~/components/form/Input";
import { useToast } from "~/components/toast/Toast";
import { Config } from "~/config";
import { useIsSmallMobile } from "~/hooks/dom/useWindowSize";
import { getStaticRoute } from "~/static/page";
import { parseApiError } from "~/utils/response";
import { useSchema } from "~/utils/schema";
import { refreshTurnstile } from "~/utils/turnstile";
import { useLoginMutation } from "./auth.api";
import { setTurnstileToken } from "./auth.store";
import { isVerifyRequiredForLoginResponse } from "./auth.types";
import { checkRedirectable } from "./auth.utils";

type Props = {
  email: string;
};

export default function LoginForm({ email }: Props) {
  const t = useTranslations("auth.login");
  const locale = useLocale();
  const schema = useSchema();
  const isMobile = useIsSmallMobile();
  const dispatch = useDispatch();
  const router = useLocalizedRouter();
  const searchParams = useSearchParams();
  const toast = useToast();
  const { setSpin } = useContext(SpinContext);
  const [handleLogin, { isLoading, data, status, error, originalArgs }] =
    useLoginMutation({});
  const form = useFormik({
    initialValues: {
      email: email,
      password: "",
    },
    validateOnBlur: false,
    validateOnChange: false,
    validateOnMount: false,
    validationSchema: schema.auth.login,
    onSubmit: (values) => {
      handleLogin({
        email: values.email,
        password: values.password,
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
      checkRedirectable(
        router,
        searchParams,
        getStaticRoute(locale).account.select
      );
      toast.success(t("success"));
    } else if (status === "rejected") {
      if (isVerifyRequiredForLoginResponse(error)) {
        return router.push(
          `${getStaticRoute(locale).auth.reSend}?email=${form.values.email}`
        );
      }
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
          value={form.values.password}
          onChange={form.handleChange}
          onBlur={form.handleBlur}
          error={form.errors.password}
          ariaLabel={t("password")}
        />
        <TurnstileInput
          siteKey={Config.turnstile.siteKey}
          locale={locale}
          onError={onError}
          onVerify={onVerify}
          size={isMobile ? "compact" : "normal"}
        />
        <Button htmlType="submit">{t("button")}</Button>
      </form>
    </div>
  );
}
