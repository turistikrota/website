"use client";
import { useTranslations } from "next-intl";
import Link from "next-intl/link";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import Spin from "sspin";
import Condition from "~/components/condition/Condition";
import AccountSelectionCard from "./AccountSelectionCard";
import UserCode from "./UserCode";
import UserName from "./UserName";
import { useListQuery } from "./account.api";
import { setAccount } from "./account.store";
import { AccountListItem, isAccountListResponse } from "./account.types";

// avatar files like avatar_1.png, avatar_2.png, avatar_3.png
// const avatarFiles = Array.from({ length: 24 }, (_, i) => `avatar_${i + 1}.png`);
export default function AccountSelection() {
  const t = useTranslations("account.select");
  const dispatch = useDispatch();
  const router = useRouter();
  const { isLoading, data, error } = useListQuery({});

  const onProfileSelect = (item: AccountListItem) => {
    dispatch(setAccount(item));
    router.push(`/account/${item.userName}-${item.userCode}`);
  };

  return (
    <Spin loading={isLoading}>
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8 ease-in">
        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          {t("title")}
        </h1>
        <div>
          <div className="flex flex-col space-y-4">
            {isAccountListResponse(data) &&
              data.map((item, index) => (
                <AccountSelectionCard
                  key={index}
                  {...item}
                  onSelect={() => onProfileSelect(item)}
                >
                  <AccountSelectionCard.Image>
                    <AccountSelectionCard.Avatar
                      src={item.avatarUrl}
                      alt={item.fullName}
                    ></AccountSelectionCard.Avatar>
                  </AccountSelectionCard.Image>
                  <AccountSelectionCard.Content>
                    <UserName size="xl">
                      {item.userName}
                      <UserCode>{item.userCode}</UserCode>
                    </UserName>
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
            <Link href="/account/create">
              <AccountSelectionCard>
                <AccountSelectionCard.Image>
                  <i className="bx bx-md bx-plus text-gray-400"></i>
                </AccountSelectionCard.Image>
                <AccountSelectionCard.Content>
                  <AccountSelectionCard.Text>
                    {t("new")}
                  </AccountSelectionCard.Text>
                </AccountSelectionCard.Content>
              </AccountSelectionCard>
            </Link>
          </div>
        </div>
      </div>
    </Spin>
  );
}
