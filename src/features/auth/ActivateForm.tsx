"use client";

import { useLocale, useLocalizedRouter, useTranslations } from "next-intl";
import Link from "next-intl/link";
import { useSearchParams } from "next/navigation";
import { FormEvent, useEffect } from "react";
import { useDispatch } from "react-redux";
import Spin from "sspin";
import TurnstileInput from "turnstile-next";
import Button from "~/components/button/Button";
import { useToast } from "~/components/toast/Toast";
import { Config } from "~/config";
import { getStaticRoute } from "~/static/page";
import { parseApiError } from "~/utils/response";
import { refreshTurnstile } from "~/utils/turnstile";
import { useVerifyMutation } from "./auth.api";
import { setTurnstileToken } from "./auth.store";
import { isVerifyFailResponse } from "./auth.types";

export default function ActivateForm() {
  const t = useTranslations("auth.activate");
  const dispatch = useDispatch();
  const toast = useToast();
  const locale = useLocale();
  const router = useLocalizedRouter();
  const searchParams = useSearchParams();
  const [handleVerify, { isLoading, data, status, error }] = useVerifyMutation(
    {}
  );
  useEffect(() => {
    refreshTurnstile();
  }, []);

  useEffect(() => {
    if (status === "fulfilled") {
      toast.success(t("success"));
      router.push(getStaticRoute(locale).auth.default);
    } else if (status === "rejected") {
      if (isVerifyFailResponse(error) && error.reSendable) {
        return router.push(
          `${getStaticRoute(locale).auth.reSend}?email=${error.email}`
        );
      }
      parseApiError({
        error,
        toast,
      });
      refreshTurnstile();
    }
  }, [status]);

  const onError = (err: string) => {
    dispatch(setTurnstileToken(""));
  };

  const onVerify = (token: string) => {
    dispatch(setTurnstileToken(token));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const verificationCode = searchParams.get("code");
    if (!verificationCode) return toast.error(t("codeNotExist"));
    handleVerify({
      token: verificationCode,
    });
  };

  return (
    <Spin loading={isLoading}>
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          {t("title")}
        </h1>
        <div>
          <form className="space-y-4 md:space-y-6 ease-in" onSubmit={onSubmit}>
            <TurnstileInput
              siteKey={Config.turnstile.siteKey}
              locale={locale}
              onError={onError}
              onVerify={onVerify}
            />
            <Button htmlType="submit">{t("button")}</Button>
          </form>
          <p className="mt-7 text-sm text-center text-gray-600">
            {t("reSend.notHave")} <br />{" "}
            <Link
              href={getStaticRoute(locale).auth.reSend}
              className="text-secondary-600 hover:text-secondary-700 dark:text-secondary-400 dark:hover:text-secondary-500"
            >
              {t("reSend.send")}
            </Link>
          </p>
        </div>
      </div>
    </Spin>
  );
}
