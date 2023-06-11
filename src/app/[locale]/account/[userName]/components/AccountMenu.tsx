"use client";

import Link from "next-intl/link";
import Logo from "~/components/logo/logo";
import { Colors } from "~/types/base";
import AccountMenuItem from "./AccountMenuItem";
import AccountMenuProfileCard from "./AccountMenuProfileCard";

type Props = {
  open: boolean;
};

type MenuItem = {
  title: string;
  icon: string;
  href?: string;
  action?: string;
  badge?: number;
  badgeType?: Colors;
};

const menuItems: MenuItem[] = [];

export default function AccountMenu({ open }: Props) {
  const els = [
    {
      title: "My Profile",
      href: "/account/[userName]",
      icon: "bx bx-user-circle",
    },
    {
      title: "Security",
      href: "/account/[userName]/security",
      icon: "bx bx-lock",
    },
    {
      title: "Notifications",
      href: "/account/[userName]/notifications",
      icon: "bx bx-bell",
      badge: 2,
      badgeType: "primary",
    },
    {
      title: "Billing",
      href: "/account/[userName]/billing",
      icon: "bx bx-credit-card",
    },
    {
      title: "Settings",
      href: "/account/[userName]/settings",
      icon: "bx bx-cog",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full h-full rounded-md">
      <Link
        href="/"
        className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
      >
        <Logo />
      </Link>
      <AccountMenuProfileCard open={open} />
      <h1 className="text-2xl font-bold">AccountMenu</h1>
      <div className="grid gap-4 w-full">
        {els.map((el, i) => (
          <AccountMenuItem
            key={i}
            isLink={!!el.href}
            onClick={() => console.log("clicked")}
            title={el.title}
            href={"/"}
          >
            <AccountMenuItem.IconWrapper>
              <AccountMenuItem.Icon icon={el.icon} />
              <AccountMenuItem.Badge
                type={el.badgeType as Colors}
                visible={!!el.badge}
              >
                {el.badge}
              </AccountMenuItem.Badge>
            </AccountMenuItem.IconWrapper>
            <AccountMenuItem.Content isLink={!!el.href}>
              {el.title}
            </AccountMenuItem.Content>
          </AccountMenuItem>
        ))}
      </div>
    </div>
  );
}
