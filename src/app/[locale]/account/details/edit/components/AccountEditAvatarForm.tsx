"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AvatarUpload from "~/components/form/AvatarUpload";
import { useToast } from "~/components/toast/Toast";
import { useUploadAvatarMutation } from "~/features/upload/upload.api";
import { RootState } from "~/store/store";
import { toFormData } from "~/utils/content-type";
import { parseApiError } from "~/utils/response";
import { useSchema } from "~/utils/schema";

export default function AccountEditAvatarForm() {
  const t = useTranslations("account.details.edit.avatar");
  const [inputError, setInputError] = useState<string | null>(null);
  const schema = useSchema();
  const toast = useToast();
  const account = useSelector(
    (state: RootState) => state.account.currentAccount
  );
  const [handleUpload, { isLoading, data, status, error }] =
    useUploadAvatarMutation({});

  useEffect(() => {
    if (status === "fulfilled") {
      toast.success(t("success"));
    } else if (status === "rejected") {
      parseApiError({ error, toast });
    }
  }, [status]);

  const handleUploadAvatar = (file: File) => {
    if (!file) return setInputError(t("required").toString());
    handleUpload(
      toFormData({ avatar: file, username: account?.userName ?? "" })
    );
  };

  return (
    <div>
      <div className="space-y-4 md:space-y-6">
        <AvatarUpload
          avatar={account?.avatarUrl ?? ""}
          onChange={handleUploadAvatar}
          loading={isLoading}
          error={inputError}
        />
      </div>
    </div>
  );
}
