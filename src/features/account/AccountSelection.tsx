"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import { Config } from "~/config";
import { useListQuery } from "./account.api";
import { AccountListItem, isAccountListResponse } from "./account.types";

// avatar files like avatar_1.png, avatar_2.png, avatar_3.png
// const avatarFiles = Array.from({ length: 24 }, (_, i) => `avatar_${i + 1}.png`);

type AccountSelectionProps = {
  onSelect: (name: string, code: string) => void;
} & AccountListItem;

const AccountSelectionCard: React.FC<AccountSelectionProps> = ({
  avatarUrl,
  userName,
  userCode,
  completedRate,
  onSelect,
}) => {
  const [avatar, setAvatar] = useState<string>(avatarUrl);

  return (
    <div className="grid grid-cols-3 relative">
      <div className="col-span-1 bg-default flex items-center justify-center p-4 rounded-tl-md rounded-bl-md">
        <Image
          src={avatar}
          alt={userName}
          width={100}
          height={100}
          onError={() => setAvatar(Config.cdn.notFound)}
        />
      </div>
      <div className="col-span-2 bg-header flex items-center px-4 rounded-tr-md rounded-br-md">
        <div className="text-sm font-semibold text-gray-900 dark:text-white">
          {userName}
          <span className="text-xs text-gray-500"> #{userCode}</span>
        </div>
      </div>
      {/* render completed range line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-green-50 dark:bg-green-950 bg-opacity-50 rounded-b-md">
        <div
          className={`h-full bg-green-400 dark:bg-green-500 rounded-b-md`}
          style={{ width: `${completedRate}%` }}
        ></div>
      </div>
    </div>
  );
};

export default function AccountSelection() {
  const t = useTranslations("account.select");
  const { isLoading, data, error } = useListQuery({});
  return (
    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
        {t("title")}
      </h1>
      <div>
        <div className="flex flex-col space-y-4">
          {isAccountListResponse(data) &&
            data.map((item, index) => (
              <AccountSelectionCard key={index} {...item} onSelect={() => {}} />
            ))}
        </div>
      </div>
    </div>
  );
}
