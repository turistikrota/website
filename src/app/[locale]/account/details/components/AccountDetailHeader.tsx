"use client";

import { useLocale, useTranslations } from "next-intl";
import Link from "next-intl/link";
import { useContext } from "react";
import MobileHeader from "~/components/headers/MobileHeader";
import { getStaticRoute } from "~/static/page";
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

type HeaderProps = {
  page: string;
};

const BackButton = () => {
  const t = useTranslations("account.detail.buttons");
  const locale = useLocale();
  return (
    <Link
      href={getStaticRoute(locale).account.details.default}
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
      className="flex items-center justify-center text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
      title={t("toggle")}
      aria-label={t("toggle")}
      onClick={() => menuContext.setOpenMenu(!menuContext.openMenu)}
    >
      <i className="bx bx-menu text-3xl"></i>
    </button>
  );
};

function FixedHeader({ page }: HeaderProps) {
  return (
    <MobileHeader className="justify-start gap-3">
      <div className="items-center justify-center gap-2 hidden lg:flex">
        <ToggleButton />
      </div>
      <div className="flex items-center justify-center gap-2 lg:hidden">
        <BackButton />
      </div>
      <div className="flex flex-col items-start justify-center">
        <h1 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
          {page}
        </h1>
      </div>
    </MobileHeader>
  );
}

export function AccountDetailTitle({ page }: Props) {
  const t = useTranslations("account.detail.links");
  return (
    <div className="gap-2 mx-auto max-w-4xl">
      <h1 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
        {t(page)}
      </h1>
      <p className="text-gray-500 dark:text-gray-400">
        {t(`subtitles.${page}`)}
      </p>
    </div>
  );
}

export default function AccountDetailHeader({ page }: Props) {
  const t = useTranslations("account.detail.links");
  return <FixedHeader page={t(page)} />;
}
