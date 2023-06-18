"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "~/store/store";

export default function AccountSelectionRedirect() {
  const router = useRouter();
  const account = useSelector(
    (state: RootState) => state.account.currentAccount
  );
  useEffect(() => {
    if (!account) return router.push("/account/select");
  }, [account]);

  return null;
}
