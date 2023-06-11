"use client";

import Link from "next-intl/link";
import { useParams } from "next/navigation";
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
  href?: (_: string) => string;
  action?: string;
  badge?: number;
  badgeType?: Colors;
  extraClass?: string;
};

const menuItems: MenuItem[] = [
  {
    title: "edit",
    icon: "bx bx-edit",
    href: (username) => `/account/${username}/edit`,
  },
  {
    title: "notifications",
    icon: "bx bx-bell",
    href: (username) => `/account/${username}/notifications`,
  },
  {
    title: "settings",
    icon: "bx bx-cog",
    href: (username) => `/account/${username}/settings`,
  },
  {
    title: "security",
    icon: "bx bx-lock",
    href: (username) => `/account/${username}/security`,
  },
  {
    title: "privacy",
    icon: "bx bx-lock-alt",
    href: (username) => `/account/${username}/privacy`,
  },
  {
    title: "logout",
    icon: "bx bx-log-out",
    action: "logout",
    extraClass:
      "bg-red-500 dark:bg-red-600 hover:bg-red-600 dark:hover:bg-red-700",
  },
];

export default function AccountMenu({ open }: Props) {
  const params = useParams();
  return (
    <div className="flex flex-col items-center justify-center w-full h-full rounded-md">
      <Link
        href="/"
        className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
      >
        <Logo />
      </Link>
      <AccountMenuProfileCard open={open} />
      <div className="grid gap-4 w-full mt-5">
        {menuItems.map((el, i) => (
          <AccountMenuItem
            key={i}
            isLink={!!el.href}
            onClick={() => console.log("clicked")}
            title={el.title}
            href={el.href ? el.href(params.userName) : undefined}
            className={el.extraClass}
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
