import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import AvatarUpload from "~/components/form/AvatarUpload";
import { useToast } from "~/components/toast/Toast";
import { useUploadAvatarMutation } from "~/features/upload/upload.api";
import { toFormData } from "~/utils/content-type";
import { parseApiError } from "~/utils/response";

type Props = {
  avatar: string;
  userName: string;
  onUpdate: () => void;
};

export default function AccountEditAvatarForm({
  avatar,
  userName,
  onUpdate,
}: Props) {
  const t = useTranslations("account.details.edit.avatar");
  const [inputError, setInputError] = useState<string | null>(null);
  const toast = useToast();
  const [handleUpload, { isLoading, data, status, error }] =
    useUploadAvatarMutation({});

  useEffect(() => {
    if (status === "fulfilled") {
      toast.success(t("success"));
      onUpdate();
    } else if (status === "rejected") {
      parseApiError({ error, toast });
    }
  }, [status]);

  const handleUploadAvatar = (file: File) => {
    if (!file) return setInputError(t("required").toString());
    handleUpload(toFormData({ avatar: file, username: userName }));
  };

  return (
    <div>
      <div className="space-y-4 md:space-y-6">
        <AvatarUpload
          avatar={avatar}
          onChange={handleUploadAvatar}
          loading={isLoading}
          error={inputError}
        />
      </div>
    </div>
  );
}
