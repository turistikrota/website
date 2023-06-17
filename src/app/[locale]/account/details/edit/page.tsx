"use client";
import { useSelector } from "react-redux";
import { useGetMyAccountQuery } from "~/features/account/account.api";
import { RootState } from "~/store/store";
import AccountEditForm from "./components/AccountEditForm";

export default function EditAccount() {
  const account = useSelector(
    (state: RootState) => state.account.currentAccount
  );
  const { isLoading, data, error } = useGetMyAccountQuery(
    `${account!.userName}-${account!.userCode}`
  );
  if (isLoading) return <div>loading...</div>;
  if (error) return <div>error</div>;
  if (!data) return <div>not found</div>;
  console.log("data:", data);
  return <AccountEditForm />;
}
