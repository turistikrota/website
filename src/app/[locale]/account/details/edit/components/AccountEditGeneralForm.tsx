"use client";

import { useFormik } from "formik";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Spin from "sspin";
import Button from "~/components/button/Button";
import FormSection from "~/components/form/FormSection";
import Input from "~/components/form/Input";
import Textarea from "~/components/form/Textarea";
import { useToast } from "~/components/toast/Toast";
import { useUpdateAccountMutation } from "~/features/account/account.api";
import { updateAccount } from "~/features/account/account.store";
import { Account } from "~/features/account/account.types";
import { parseApiError } from "~/utils/response";
import { useSchema } from "~/utils/schema";

type Props = {
  className?: string;
  account: Account;
};

export default function AccountEditGeneralForm({ className, account }: Props) {
  const t = useTranslations("account.details.edit.general");
  const toast = useToast();
  const schema = useSchema();
  const dispatch = useDispatch();
  const [handleUpdate, { isLoading, error, status }] = useUpdateAccountMutation(
    {}
  );
  const form = useFormik({
    initialValues: {
      fullName: account.fullName,
      description: account.description,
      birthDate: account.birthDate,
    },
    validateOnBlur: false,
    validateOnChange: false,
    validateOnMount: false,
    validationSchema: schema.account.update,
    onSubmit: (values) => {
      handleUpdate({
        userName: account.userName,
        fullName: values.fullName,
        description: values.description,
        birthDate: values.birthDate ?? null,
      });
    },
  });

  useEffect(() => {
    if (status === "fulfilled") {
      dispatch(updateAccount(form.values));
      toast.success(t("success"));
      form.initialValues = form.values;
      form.resetForm();
    } else if (status === "rejected") {
      parseApiError({ error, form, toast });
    }
  }, [status]);

  return (
    <FormSection className={className}>
      <Spin loading={isLoading}>
        <form onSubmit={form.handleSubmit}>
          <FormSection.Head>
            <FormSection.Head.Title>{t("title")}</FormSection.Head.Title>
            <FormSection.Head.Subtitle>
              {t("subtitle")}
            </FormSection.Head.Subtitle>
          </FormSection.Head>
          <FormSection.Body>
            <div className="space-y-4 md:space-y-6">
              <Input
                id="fullName"
                type="text"
                name="fullName"
                autoComplete="fullName"
                label={t("fullName")}
                ariaLabel={t("fullName")}
                value={form.values.fullName}
                error={form.errors.fullName}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <Textarea
                id="description"
                name="description"
                autoComplete="description"
                label={t("description")}
                ariaLabel={t("description")}
                value={form.values.description}
                error={form.errors.description}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                rows={5}
              />
              <Input
                id="birthDate"
                name="birthDate"
                type="date"
                autoComplete="birthDate"
                label={t("birthDate")}
                ariaLabel={t("birthDate")}
                value={form.values.birthDate || ""}
                error={form.errors.birthDate}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </div>
          </FormSection.Body>
          <FormSection.Footer>
            <Button block={false} htmlType="submit">
              {t("save")}
            </Button>
          </FormSection.Footer>
        </form>
      </Spin>
    </FormSection>
  );
}
