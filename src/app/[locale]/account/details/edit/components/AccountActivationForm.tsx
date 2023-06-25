"use client";

import { useTranslations } from "next-intl";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "~/components/toast/Toast";
import {
  disableAccount,
  enableAccount,
} from "~/features/account/account.store";
import { RootState } from "~/store/store";
import AccountActivationDisableForm from "./AccountActivationDisableForm";
import AccountActivationEnableForm from "./AccountActivationEnableForm";

export default function AccountActivationForm() {
  const t = useTranslations("account.details.edit.activation");
  const account = useSelector(
    (state: RootState) => state.account.currentAccount
  );
  const toast = useToast();
  const dispatch = useDispatch();

  const onEnableOk = async () => {
    dispatch(enableAccount(true));
    toast.success(t("enable.success"));
  };
  const onDisableOk = async () => {
    dispatch(disableAccount(true));
    toast.success(t("disable.success"));
  };

  return account?.isActive ? (
    <AccountActivationDisableForm onOk={onDisableOk} />
  ) : (
    <AccountActivationEnableForm onOk={onEnableOk} />
  );
}
