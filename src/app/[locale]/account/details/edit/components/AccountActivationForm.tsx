"use client";

import { useTranslations } from "next-intl";
import { useSelector } from "react-redux";
import LineForm from "~/components/form/LineForm";
import ToggleButton from "~/components/form/Toggle";
import { useToast } from "~/components/toast/Toast";
import { RootState } from "~/store/store";

export default function AccountActivationForm() {
  const account = useSelector(
    (state: RootState) => state.account.currentAccount
  );
  const t = useTranslations("account.details.edit.activation");
  const toast = useToast();

  const handleCheckboxChange = (val: boolean) => {
    if (val) return handleEnableAccount();
    return handleDisableAccount();
  };

  const handleDisableAccount = () => {
    toast.askError({
      cancelText: t("disable.cancel"),
      confirmText: t("disable.confirm"),
      description: t("disable.description"),
      title: t("disable.title"),
      onConfirm: () => {},
    });
  };

  const handleEnableAccount = () => {
    toast.askSuccess({
      cancelText: t("enable.cancel"),
      confirmText: t("enable.confirm"),
      description: t("enable.description"),
      title: t("enable.title"),
      onConfirm: () => {},
    });
  };

  return (
    <LineForm className="bg-second p-4 rounded-md">
      <LineForm.Left>
        <LineForm.Left.Title>{t("title")}</LineForm.Left.Title>
        <LineForm.Left.Description>
          {t(account && account.isActive ? "active" : "passive")}
        </LineForm.Left.Description>
      </LineForm.Left>
      <LineForm.Right>
        <ToggleButton
          defaultChecked={account && account.isActive ? true : false}
          onChange={handleCheckboxChange}
          variant="success"
        ></ToggleButton>
      </LineForm.Right>
    </LineForm>
  );
}
