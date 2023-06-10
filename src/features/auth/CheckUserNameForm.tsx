"use client";

import { useFormik } from "formik";
import { useLocale, useTranslations } from "next-intl";
import { useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { SpinContext } from "sspin";
import Turnstile from "turnstile-next";
import { Button, Input } from "~/components";
import { useToast } from "~/components/toast/Toast";
import { Config } from "~/config";
import { parseApiError } from "~/utils/response";
import { useSchema } from "~/utils/schema";
import { refreshTurnstile } from "~/utils/turnstile";
import { useCheckEmailMutation } from "./auth.api";
import { setTurnstileToken } from "./auth.store";
import { isCheckEmailResponse } from "./auth.types";

type Props = {
  onNext: (val: boolean, mail?: string) => void;
};

export default function CheckUserNameForm({ onNext }: Props) {
  const t = useTranslations("auth.check");
  const schema = useSchema();
  const locale = useLocale();
  const dispatch = useDispatch();
  const toast = useToast();
  const { setSpin } = useContext(SpinContext);
  const [handleCheckEmail, { isLoading, data, status, error, originalArgs }] =
    useCheckEmailMutation({});
  const form = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: schema.auth.checkEmail,
    onSubmit: (values) => {
      handleCheckEmail({
        email: values.email,
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
      onNext(isCheckEmailResponse(data) && data.exists, form.values.email);
    } else if (status === "rejected") {
      parseApiError({ error, form, toast });
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
        autoComplete="on"
        onSubmit={form.handleSubmit}
      >
        <Input
          label={t("email")}
          name="email"
          id="email"
          type="email"
          required
          autoFocus
          autoComplete="on"
          onChange={form.handleChange}
          value={form.values.email}
          onBlur={form.handleBlur}
          error={form.errors.email}
          ariaLabel={t("email")}
        />
        <Turnstile
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
