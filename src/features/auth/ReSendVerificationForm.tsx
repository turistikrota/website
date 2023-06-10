"use client";

import { useFormik } from "formik";
import { useLocale, useTranslations } from "next-intl";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Spin from "sspin";
import TurnstileInput from "turnstile-next";
import { Button, Input } from "~/components";
import { useToast } from "~/components/toast/Toast";
import { Config } from "~/config";
import { parseApiError } from "~/utils/response";
import { useSchema } from "~/utils/schema";
import { refreshTurnstile } from "~/utils/turnstile";
import { useReSendVerifyMutation } from "./auth.api";
import { setTurnstileToken } from "./auth.store";

export default function ReSendVerificationForm() {
  const t = useTranslations("auth.reSend");
  const dispatch = useDispatch();
  const toast = useToast();
  const locale = useLocale();
  const router = useRouter();
  const schema = useSchema();
  const searchParams = useSearchParams();
  const [handleReSend, { isLoading, data, status, error, originalArgs }] =
    useReSendVerifyMutation({});
  const form = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: schema.auth.reSendVerify,
    onSubmit: (values) => {
      handleReSend({
        email: values.email,
      });
    },
  });

  useEffect(() => {
    refreshTurnstile();
    form.setFieldValue("email", searchParams.get("email") || "");
  }, []);

  useEffect(() => {
    if (status === "fulfilled") {
      toast.success(t("success"));
      router.push("/auth");
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
    <Spin loading={isLoading}>
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          {t("title")}
        </h1>
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
              required
              autoFocus
              autoComplete="on"
              onChange={form.handleChange}
              value={form.values.email}
              onBlur={form.handleBlur}
              error={form.errors.email}
              ariaLabel={t("email")}
            />
            <TurnstileInput
              siteKey={Config.turnstile.siteKey}
              locale={locale}
              onError={onError}
              onVerify={onVerify}
            />
            <Button htmlType="submit">{t("button")}</Button>
          </form>
        </div>
      </div>
    </Spin>
  );
}
