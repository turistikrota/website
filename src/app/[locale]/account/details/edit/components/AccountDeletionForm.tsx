"use client";

import { useTranslations } from "next-intl";
import LineForm from "~/components/form/LineForm";
import ToggleButton from "~/components/form/Toggle";

export default function AccountDeletionForm() {
  const t = useTranslations("account.details.edit.deletion");

  const handleCheckboxChange = () => {};

  return (
    <LineForm className="bg-second p-4 rounded-md">
      <LineForm.Left>
        <LineForm.Left.Title>{t("title")}</LineForm.Left.Title>
        <LineForm.Left.Description>
          {t("description")}
        </LineForm.Left.Description>
      </LineForm.Left>
      <LineForm.Right>
        <ToggleButton
          defaultChecked={false}
          variant="error"
          title={t("alt")}
        ></ToggleButton>
      </LineForm.Right>
    </LineForm>
  );
}
