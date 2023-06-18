import { useTranslations } from "next-intl";
import { useContext } from "react";
import { AccountDetailContext } from "../layouts/AccountDetailLayout";

export default function ToggleButton() {
  const menuContext = useContext(AccountDetailContext);
  const t = useTranslations("account.detail.buttons");
  return (
    <button
      className="flex items-center justify-center text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
      title={t("toggle")}
      aria-label={t("toggle")}
      onClick={() => menuContext.setOpenMenu(!menuContext.openMenu)}
    >
      <i className="bx bx-menu text-3xl"></i>
    </button>
  );
}
