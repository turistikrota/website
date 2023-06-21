"use client";
import { useFormik } from "formik";
import { useLocale, useTranslations } from "next-intl";
import { useLocalizedRouter } from "next-intl/client";
import { useEffect } from "react";
import Spin from "sspin";
import Button from "~/components/button/Button";
import Input from "~/components/form/Input";
import { useToast } from "~/components/toast/Toast";
import { getStaticRoute } from "~/static/page";
import { parseApiError } from "~/utils/response";
import { useSchema } from "~/utils/schema";
import { useCreateMutation } from "./account.api";

export default function AccountCreateForm() {
  const t = useTranslations("account.create");
  const schema = useSchema();
  const router = useLocalizedRouter();
  const locale = useLocale();
  const toast = useToast();
  const [handleCreate, { isLoading, data, status, error }] = useCreateMutation(
    {}
  );
  const form = useFormik({
    initialValues: {
      userName: "",
    },
    validationSchema: schema.account.create,
    validateOnBlur: true,
    validateOnChange: false,
    validateOnMount: false,
    onSubmit: (values) => {
      handleCreate({
        userName: values.userName,
      });
    },
  });

  useEffect(() => {
    if (status === "fulfilled") {
      toast.success(t("success"));
      router.push(getStaticRoute(locale).account.details.default);
    } else if (status === "rejected") {
      parseApiError({ error, form, toast });
    }
  }, [status]);

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
              label={t("userName")}
              id="userName"
              name="userName"
              type="text"
              autoComplete="user-name"
              required
              autoFocus
              value={form.values.userName}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
              error={form.errors.userName}
              ariaLabel={t("userName")}
            />
            <Button htmlType="submit">{t("button")}</Button>
          </form>
        </div>
      </div>
    </Spin>
  );
}
