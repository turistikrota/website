"use client";

import { useLocale, useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useContext } from "react";
import Condition from "~/components/condition/Condition";
import Logo from "~/components/logo/logo";
import { RouteType, getStaticRoute } from "~/static/page";
import { Colors } from "~/types/base";
import { isWindowLtLg } from "~/utils/responsive";
import { AccountDetailContext } from "../layouts/AccountDetailLayout";
import { Pages } from "./AccountDetailHeader";
import LogoutButton from "./AccountLogoutButton";
import AccountMenuItem from "./AccountMenuItem";
import AccountMenuProfileCard from "./AccountMenuProfileCard";

type Props = {
  isDetail: boolean;
};

const ToggleButton = dynamic(() => import("./AccountMenuToggle"), {
  ssr: false,
});

type MenuItem = {
  title: Pages;
  icon: string;
  href: (r: RouteType) => string;
  badge?: number;
  badgeType?: Colors;
};

const menuItems: MenuItem[] = [
  {
    title: "edit",
    icon: "bx bx-edit",
    href: (r: RouteType) => r.account.details.edit,
  },
  {
    title: "notifications",
    icon: "bx bx-bell",
    href: (r: RouteType) => r.account.details.notifications,
  },
  {
    title: "settings",
    icon: "bx bx-cog",
    href: (r: RouteType) => r.account.details.settings,
  },
  {
    title: "security",
    icon: "bx bx-lock",
    href: (r: RouteType) => r.account.details.security,
  },
  {
    title: "privacy",
    icon: "bx bx-lock-alt",
    href: (r: RouteType) => r.account.details.privacy,
  },
];

export default function AccountMenu({ isDetail }: Props) {
  const locale = useLocale();
  const menuContext = useContext(AccountDetailContext);
  const t = useTranslations("account.detail.links");

  const onMenuClick = () => {
    if (isDetail && isWindowLtLg()) {
      menuContext?.setOpenMenu(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-start w-full h-full rounded-md px-4 py-4">
      <Condition value={isDetail}>
        <div
          className={`hidden lg:flex mb-2 w-full ${
            menuContext.openMenu ? "justify-start" : "justify-center"
          }`}
        >
          <ToggleButton />
        </div>
      </Condition>
      <Condition value={!isDetail}>
        <Link href="/" className="flex items-center mb-6">
          <Logo />
        </Link>
      </Condition>
      <AccountMenuProfileCard open={isDetail ? menuContext?.openMenu : true} />
      <div className="grid gap-4 w-full mt-5">
        {menuItems.map((el, i) => (
          <AccountMenuItem
            key={i}
            isLink={!!el.href}
            title={t(el.title)}
            aria-label={t(el.title)}
            href={el.href(getStaticRoute(locale))}
            onClick={onMenuClick}
          >
            <AccountMenuItem.IconWrapper
              open={isDetail ? !menuContext?.openMenu : false}
            >
              <AccountMenuItem.Icon icon={el.icon} />
              <AccountMenuItem.Badge
                type={el.badgeType as Colors}
                visible={!!el.badge}
              >
                {el.badge}
              </AccountMenuItem.Badge>
            </AccountMenuItem.IconWrapper>
            <AccountMenuItem.Content
              isLink={!!el.href}
              hidden={isDetail ? !menuContext?.openMenu : false}
            >
              {t(el.title)}
            </AccountMenuItem.Content>
          </AccountMenuItem>
        ))}
        <LogoutButton hideContent={isDetail ? !menuContext?.openMenu : false} />
      </div>
    </div>
  );
}
