"use client";

import { useFormik } from "formik";
import { useLocale, useTranslations } from "next-intl";
import { useContext, useEffect } from "react";
import { SpinContext } from "sspin";
import Turnstile from "turnstile-next";
import { Button, Input } from "~/components";
import { useToast } from "~/components/toast/Toast";
import { Config } from "~/config";
import { parseApiError } from "~/utils/response";
import { useSchema } from "~/utils/schema";
import { useCheckEmailMutation } from "./auth.api";

type Props = {
  onNext: (val: boolean, mail?: string) => void;
};

export default function CheckUserNameForm({ onNext }: Props) {
  const t = useTranslations("auth.check");
  const schema = useSchema();
  const locale = useLocale();
  const toast = useToast();
  const { setSpin } = useContext(SpinContext);
  const [handleCheckEmail, { isLoading, data, status, error, originalArgs }] =
    useCheckEmailMutation({});
  const form = useFormik({
    initialValues: {
      email: "",
      "cf-turnstile-response": "",
    },
    validationSchema: schema.auth.checkEmail,
    onSubmit: (values) => {
      handleCheckEmail({
        email: values.email,
        turnstileToken: values["cf-turnstile-response"],
      });
    },
  });

  useEffect(() => {
    setSpin(isLoading);
  }, [isLoading]);

  useEffect(() => {
    if (status === "fulfilled") {
      onNext(data, form.values.email);
    } else if (status === "rejected") {
      parseApiError(error, toast);
    }
  }, [status]);

  const onError = (err: string) => {
    console.log("err::", err);
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
          autoComplete="on"
          required
          autoFocus
          onChange={form.handleChange}
          value={form.values.email}
          onBlur={form.handleBlur}
        />
        <Turnstile
          siteKey={Config.turnstile.siteKey}
          locale={locale}
          onError={onError}
          refreshOnExpired="auto"
          onVerify={(token) => {
            form.setFieldValue("cf-turnstile-response", token);
          }}
        />
        <Button htmlType="submit">{t("button")}</Button>
      </form>
    </div>
  );
}
