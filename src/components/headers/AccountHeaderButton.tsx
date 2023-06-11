"use client";

import { useTranslations } from "next-intl";
import Link from "next-intl/link";
import { useSelector } from "react-redux";
import Image from "~/components/image/image";
import UserCode from "~/features/account/UserCode";
import UserName from "~/features/account/UserName";
import { AccountListItem } from "~/features/account/account.types";
import { RootState } from "~/store/store";
import MobileHeader from "./MobileHeader";

const ProfileButton = ({ account }: { account: AccountListItem }) => {
  return (
    <Link href={`/account/${account.userName}-${account.userCode}`}>
      <div className="group relative flex items-center flex-row space-x-1 hover:bg-second dark:hover:bg-third rounded-md md:px-3 transition-colors duration-200 ease-in-out">
        <div className="flex flex-col items-end justify-center w-12 h-12 rounded-full md:items-center">
          <MobileHeader.Avatar>
            <Image
              src={account.avatarUrl}
              width={48}
              height={48}
              alt={account.fullName}
              title={account.fullName}
            />
          </MobileHeader.Avatar>
        </div>
        <div className="hidden flex-col items-start justify-center md:flex">
          <UserName>
            {account.userName}
            <UserCode size="xs">{account.userCode}</UserCode>
          </UserName>
        </div>
      </div>
    </Link>
  );
};

const LoginButton = () => {
  return (
    <Link href="/auth">
      <MobileHeader.Button>
        <i className="bx bx-user"></i>
      </MobileHeader.Button>
    </Link>
  );
};

const SelectProfileButton = () => {
  const t = useTranslations("header");
  return (
    <Link
      href="/account/select"
      className="hover:bg-second dark:hover:bg-third rounded-md px-3 py-3 transition-colors duration-200 ease-in-out"
    >
      {t("links.selectAccount")}
    </Link>
  );
};

export default function AccountHeaderButton() {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const account = useSelector(
    (state: RootState) => state.account.currentAccount
  );

  if (!isAuthenticated) return <LoginButton />;
  if (account === null) return <SelectProfileButton />;
  return <ProfileButton account={account} />;
}
