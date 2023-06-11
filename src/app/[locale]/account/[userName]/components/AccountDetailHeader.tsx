"use client";

import { useTranslations } from "next-intl";
import Link from "next-intl/link";
import { useParams } from "next/navigation";
import { useContext } from "react";
import { AccountDetailContext } from "../layouts/AccountDetailLayout";

export type Pages =
  | "edit"
  | "notifications"
  | "settings"
  | "security"
  | "privacy";

type Props = {
  page: Pages;
};

const BackButton = () => {
  const t = useTranslations("account.detail.buttons");
  const params = useParams();
  return (
    <Link
      href={`/account/${params.userName}`}
      className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
      title={t("back")}
      aria-label={t("back")}
    >
      <i className="bx bx-left-arrow-alt text-3xl"></i>
    </Link>
  );
};

const ToggleButton = () => {
  const menuContext = useContext(AccountDetailContext);
  const t = useTranslations("account.detail.buttons");
  return (
    <button
      className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
      title={t("toggle")}
      aria-label={t("toggle")}
      onClick={() => menuContext.setOpenMenu(!menuContext.openMenu)}
    >
      <i className="bx bx-menu text-3xl"></i>
    </button>
  );
};

export default function AccountDetailHeader({ page }: Props) {
  const t = useTranslations("account.detail.links");
  const params = useParams();
  return (
    <div className="flex justify-start items-center w-full bg-second px-3 py-3 gap-3">
      <div className="items-center justify-center gap-2 hidden md:flex">
        <ToggleButton />
      </div>
      <div className="flex items-center justify-center gap-2 md:hidden">
        <BackButton />
      </div>
      <div className="flex flex-col items-start justify-center">
        <h1 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
          {t(page)}
        </h1>
      </div>
    </div>
  );
}
