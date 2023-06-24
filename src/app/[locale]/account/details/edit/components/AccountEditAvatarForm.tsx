"use client";

import { useSelector } from "react-redux";
import AvatarUpload from "~/components/form/AvatarUpload";
import { useUploadAvatarMutation } from "~/features/upload/upload.api";
import { RootState } from "~/store/store";

export default function AccountEditAvatarForm() {
  const account = useSelector(
    (state: RootState) => state.account.currentAccount
  );
  const [handleUpload, { isLoading, data, status, error }] =
    useUploadAvatarMutation({});
  return (
    <div>
      <div className="space-y-4 md:space-y-6">
        <AvatarUpload
          avatar="https://avatar.turistikrota.com/@test.png"
          onChange={(file) => {
            console.log("file:", file);
          }}
        />
      </div>
    </div>
  );
}
