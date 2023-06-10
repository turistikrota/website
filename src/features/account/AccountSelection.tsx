"use client";
import { useTranslations } from "next-intl";
import { Condition } from "~/components";
import AccountSelectionCard from "./AccountSelectionCard";
import { useListQuery } from "./account.api";
import { isAccountListResponse } from "./account.types";

// avatar files like avatar_1.png, avatar_2.png, avatar_3.png
// const avatarFiles = Array.from({ length: 24 }, (_, i) => `avatar_${i + 1}.png`);
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
              <AccountSelectionCard key={index} {...item} onSelect={() => {}}>
                <AccountSelectionCard.Image>
                  <AccountSelectionCard.Avatar
                    src={item.avatarUrl}
                    alt={item.fullName}
                  ></AccountSelectionCard.Avatar>
                </AccountSelectionCard.Image>
                <AccountSelectionCard.Content>
                  <AccountSelectionCard.UserName>
                    {item.userName}
                    <AccountSelectionCard.UserCode>
                      {item.userCode}
                    </AccountSelectionCard.UserCode>
                  </AccountSelectionCard.UserName>
                  <AccountSelectionCard.FullName>
                    {item.fullName}
                  </AccountSelectionCard.FullName>
                </AccountSelectionCard.Content>
                <AccountSelectionCard.CompletedRangeLine
                  completedRate={item.completedRate}
                />
                <Condition value={item.isVerified}>
                  <AccountSelectionCard.VerifiedBadge />
                </Condition>
              </AccountSelectionCard>
            ))}
          <AccountSelectionCard onSelect={() => {}}>
            <AccountSelectionCard.Image>
              <i className="bx bx-md bx-plus text-gray-400"></i>
            </AccountSelectionCard.Image>
            <AccountSelectionCard.Content>
              <AccountSelectionCard.Text>{t("new")}</AccountSelectionCard.Text>
            </AccountSelectionCard.Content>
          </AccountSelectionCard>
        </div>
      </div>
    </div>
  );
}
