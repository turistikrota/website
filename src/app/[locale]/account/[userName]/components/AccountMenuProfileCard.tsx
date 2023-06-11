"use client";

import { useSelector } from "react-redux";
import Image from "~/components/image/image";
import UserCode from "~/features/account/UserCode";
import UserName from "~/features/account/UserName";
import { RootState } from "~/store/store";

type Props = {
  open: boolean;
};

export default function AccountMenuProfileCard({ open }: Props) {
  const account = useSelector(
    (state: RootState) => state.account.currentAccount
  );
  if (account === null) return null;
  return (
    <div className={`flex ${open ? "flex-col" : ""}`}>
      <div className="flex items-center justify-center w-16 h-16 mb-4 overflow-hidden bg-gray-100 rounded-full">
        <Image
          src={account.avatarUrl}
          width={48}
          height={48}
          alt={account.fullName}
          title={account.fullName}
        />
      </div>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <UserName>
          {account.userName}
          <UserCode size="xs">{account.userCode}</UserCode>
        </UserName>
      </div>
    </div>
  );
}
