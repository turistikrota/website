"use client";

import { useTranslations } from "next-intl";
import { useSelector } from "react-redux";
import LineForm from "~/components/form/LineForm";
import ToggleButton from "~/components/form/Toggle";
import { RootState } from "~/store/store";

export default function AccountActivationForm() {
  const account = useSelector(
    (state: RootState) => state.account.currentAccount
  );
  const t = useTranslations("account.details.edit.activation");

  const handleCheckboxChange = () => {};

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
          variant="success"
        ></ToggleButton>
      </LineForm.Right>
    </LineForm>
  );
}
