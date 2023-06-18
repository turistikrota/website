"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getStaticRoute } from "~/static/page";
import { RootState } from "~/store/store";

export default function AccountSelectionRedirect() {
  const router = useRouter();
  const locale = useLocale();
  const account = useSelector(
    (state: RootState) => state.account.currentAccount
  );
  useEffect(() => {
    if (!account) return router.push(getStaticRoute(locale).account.select);
  }, [account]);

  return null;
}
