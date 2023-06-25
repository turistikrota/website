"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useSelector } from "react-redux";
import Button from "~/components/button/Button";
import Condition from "~/components/condition/Condition";
import Image from "~/components/image/image";
import UserName from "~/features/account/UserName";
import { RootState } from "~/store/store";

type Props = {
  open: boolean;
};

export default function AccountMenuProfileCard({ open }: Props) {
  const t = useTranslations("account.detail.buttons");
  const account = useSelector(
    (state: RootState) => state.account.currentAccount
  );
  if (account === null) return null;
  return (
    <div
      className={`flex items-center justify-center gap-2 ${
        open ? "flex-col" : ""
      }`}
    >
      <div
        className={`flex ${
          open ? "items-center justify-center w-23 h-23" : "h-12 w-12"
        }`}
      >
        <Image
          src={account.avatarUrl}
          width={open ? 110 : 48}
          height={open ? 110 : 48}
          alt={account.fullName}
          title={account.fullName}
          className="rounded-md bg-second border p-2 lg:p-0"
        />
      </div>
      <Condition value={open}>
        <div className="flex flex-col items-center justify-center w-full h-full">
          <p className="text-md text-gray-500 dark:text-gray-300 font-medium">
            {account.fullName}
          </p>
          <UserName>{account.userName}</UserName>
        </div>
        <Link
          href="/account/select"
          className="my-2"
          title={t("change")}
          aria-label={t("change")}
        >
          <Button size="sm">{t("change")}</Button>
        </Link>
      </Condition>
    </div>
  );
}
