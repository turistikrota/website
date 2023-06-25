"use client";

import { useFormik } from "formik";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import AvatarUpload from "~/components/form/AvatarUpload";
import { useToast } from "~/components/toast/Toast";
import { useUploadAvatarMutation } from "~/features/upload/upload.api";
import { RootState } from "~/store/store";
import { parseApiError } from "~/utils/response";
import { useSchema } from "~/utils/schema";

export default function AccountEditAvatarForm() {
  const t = useTranslations("account.details.edit.avatar");
  const schema = useSchema();
  const toast = useToast();
  const account = useSelector(
    (state: RootState) => state.account.currentAccount
  );
  const [handleUpload, { isLoading, data, status, error }] =
    useUploadAvatarMutation({});
  const form = useFormik({
    initialValues: {
      avatar: null,
    },
    validateOnBlur: false,
    validateOnChange: false,
    validateOnMount: false,
    validationSchema: schema.upload.avatar,
    onSubmit: (values) => {
      if (!values.avatar) return;
      handleUpload(values.avatar);
    },
  });

  useEffect(() => {
    if (status === "fulfilled") {
      toast.success(t("success"));
    } else if (status === "rejected") {
      parseApiError({ error, form, toast });
    }
  }, [status]);

  const handleUploadAvatar = (file: File) => {
    form.setFieldValue("avatar", file);
    form.submitForm();
  };

  return (
    <div>
      <div className="space-y-4 md:space-y-6">
        <AvatarUpload
          avatar={account?.avatarUrl ?? ""}
          onChange={handleUploadAvatar}
          loading={isLoading}
          error={form.errors.avatar ?? null}
        />
      </div>
    </div>
  );
}
