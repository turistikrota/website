"use client";

import { useTranslations } from "next-intl";
import { useDispatch } from "react-redux";
import { useToast } from "~/components/toast/Toast";
import {
  disableAccount,
  enableAccount,
} from "~/features/account/account.store";
import AccountActivationDisableForm from "./AccountActivationDisableForm";
import AccountActivationEnableForm from "./AccountActivationEnableForm";

type Props = {
  isActive: boolean;
  userName: string;
};

export default function AccountActivationForm({ isActive, userName }: Props) {
  const t = useTranslations("account.details.edit.activation");
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

  return isActive ? (
    <AccountActivationDisableForm onOk={onDisableOk} userName={userName} />
  ) : (
    <AccountActivationEnableForm onOk={onEnableOk} userName={userName} />
  );
}
