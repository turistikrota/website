"use client";

import { useSelector } from "react-redux";
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
      <input
        type="file"
        onChange={(e) => {
          if (!e.target.files) return;
          const file = e.target.files[0];
          handleUpload({ file, username: account!.userName });
        }}
      />
    </div>
  );
}
