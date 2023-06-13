"use client";

import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Spin from "sspin/dist/esm/Spin";
import { useToast } from "~/components/toast/Toast";
import { removeAccount } from "~/features/account/account.store";
import { useLogoutMutation } from "~/features/auth/auth.api";
import { logout } from "~/features/auth/auth.store";
import { parseApiError } from "~/utils/response";
import AccountMenuItem from "./AccountMenuItem";

type Props = {
  hideContent?: boolean;
};

export default function LogoutButton({ hideContent }: Props) {
  const t = useTranslations("account.detail.logout");
  const toast = useToast();
  const router = useRouter();
  const dispatch = useDispatch();
  const [handleLogout, { isLoading, status, error }] = useLogoutMutation({});

  useEffect(() => {
    if (status === "fulfilled") {
      toast.success(t("success"));
      dispatch(logout());
      dispatch(removeAccount());
      router.push("/");
    } else if (status === "rejected") {
      parseApiError({ error, toast });
    }
  }, [status]);

  return (
    <div className="spin-sm">
      <Spin loading={isLoading}>
        <AccountMenuItem
          isLink={false}
          onClick={() => handleLogout({})}
          title={t("text")}
          aria-label={t("text")}
        >
          <AccountMenuItem.IconWrapper open={hideContent}>
            <AccountMenuItem.Icon icon="bx bx-log-out"></AccountMenuItem.Icon>
          </AccountMenuItem.IconWrapper>
          <AccountMenuItem.Content hidden={hideContent}>
            {t("text")}
          </AccountMenuItem.Content>
        </AccountMenuItem>
      </Spin>
    </div>
  );
}
