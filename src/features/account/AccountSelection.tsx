"use client";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import { Condition } from "~/components";
import { Config } from "~/config";
import { useDayJS } from "~/utils/dayjs";
import { useListQuery } from "./account.api";
import { AccountListItem, isAccountListResponse } from "./account.types";

// avatar files like avatar_1.png, avatar_2.png, avatar_3.png
// const avatarFiles = Array.from({ length: 24 }, (_, i) => `avatar_${i + 1}.png`);

type AccountSelectionProps = {
  onSelect: (name: string, code: string) => void;
} & AccountListItem;

const CompletedRangeLine = ({ completedRate }: { completedRate: number }) => {
  return (
    <div className="absolute bottom-0 left-0 w-full h-1 bg-green-50 dark:bg-green-950 bg-opacity-50 rounded-b-md">
      <div
        className={`h-full bg-green-400 dark:bg-green-500 rounded-b-md`}
        style={{ width: `${completedRate}%` }}
      ></div>
    </div>
  );
};

const VerifiedBadge = () => {
  const t = useTranslations("general");
  return (
    <div
      className="absolute top-0 right-0 flex items-center justify-center w-6 h-6 rounded-full"
      role="alert"
      aria-label={t("verified")}
      title={t("verified_alt")}
    >
      <i className="bx bx-md bxs-badge-check text-primary-500"></i>
    </div>
  );
};

const AccountSelectionCard: React.FC<AccountSelectionProps> = ({
  avatarUrl,
  userName,
  userCode,
  completedRate,
  createdAt,
  description,
  fullName,
  isActive,
  isVerified,
  onSelect,
}) => {
  const t = useTranslations("general");
  const locale = useLocale();
  const [avatar, setAvatar] = useState<string>(avatarUrl);
  const dayjs = useDayJS(locale);
  return (
    <div
      className="grid grid-cols-3 relative cursor-pointer"
      onClick={() => onSelect(userName, userCode)}
    >
      <div className="col-span-1 bg-default flex items-center justify-center p-4 rounded-tl-md rounded-bl-md">
        <Image
          src={avatar}
          alt={userName}
          width={100}
          height={100}
          onError={() => setAvatar(Config.cdn.notFound)}
        />
      </div>
      <div className="col-span-2 bg-header flex flex-col p-4 rounded-tr-md rounded-br-md">
        <div className="text-xl font-semibold text-gray-900 dark:text-white">
          {userName}
          <span className="text-sm text-gray-500"> #{userCode}</span>
        </div>
        <div className="text-sm text-gray-500 line-clamp-1">{fullName}</div>
        <div className="text-sm text-gray-500 line-clamp-1">
          {description} {description} {description} {description}
          {description}
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="text-sm text-gray-500">
            {dayjs(createdAt).format("DD MMMM YYYY, HH:mm")}
          </div>
          <div
            className={`text-sm ${
              isActive ? "text-green-500" : "text-red-500"
            }`}
            role="alert"
            aria-label={t(isActive ? "active" : "inactive")}
            title={t(isActive ? "active" : "inactive")}
          >
            {t(isActive ? "active" : "inactive")}
          </div>
        </div>
      </div>
      <CompletedRangeLine completedRate={completedRate} />
      <Condition value={isVerified}>
        <VerifiedBadge />
      </Condition>
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
