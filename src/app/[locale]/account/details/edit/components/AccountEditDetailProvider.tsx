"use client";

import { notFound } from "next/navigation";
import { useSelector } from "react-redux";
import Loading from "~/components/loading/Loading";
import { useGetMyAccountQuery } from "~/features/account/account.api";
import { isAccount } from "~/features/account/account.types";
import { RootState } from "~/store/store";
import AccountActivationForm from "./AccountActivationForm";
import AccountDeletionForm from "./AccountDeletionForm";
import AccountEditAvatarForm from "./AccountEditAvatarForm";
import AccountEditGeneralForm from "./AccountEditGeneralForm";

export default function AccountEditDetailProvider() {
  const account = useSelector(
    (state: RootState) => state.account.currentAccount
  );
  const { data, error, isLoading } = useGetMyAccountQuery(account!.userName);

  if (isLoading) return <Loading />;

  if (error) return <div>error</div>;

  if (!data || !isAccount(data)) return notFound();

  return (
    <div className="p-4 space-y-10">
      <AccountEditAvatarForm avatar={data.avatarUrl} userName={data.userName} />
      <AccountEditGeneralForm account={data} className="max-w-4xl mx-auto" />
      <div className="space-y-4 max-w-4xl mx-auto">
        <AccountActivationForm
          isActive={data.isActive}
          userName={data.userName}
        />
        <AccountDeletionForm />
      </div>
    </div>
  );
}