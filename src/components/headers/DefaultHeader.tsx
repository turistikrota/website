"use client";

import { useLocale, useTranslations } from "next-intl";
import Link from "next-intl/link";
import Image from "next/image";
import AccountHeaderButton from "./AccountHeaderButton";
import MobileHeader from "./MobileHeader";
import TopHeader from "./TopHeader";

export default function DefaultHeader() {
  const t = useTranslations("header");
  const locale = useLocale();
  return (
    <>
      <TopHeader className="hidden md:flex">
        <TopHeader.Left>{t("left.promotion")}</TopHeader.Left>
        <TopHeader.Right>
          <Link
            href={"/about-us"}
            className="hover:opacity-80 transition-all duration-200 ease-in-out"
          >
            {t("links.aboutUs")}
          </Link>
        </TopHeader.Right>
      </TopHeader>
      <MobileHeader>
        <MobileHeader.Left>
          <MobileHeader.Logo>
            <Image
              src={"https://cdn.turistikrota.com/logo/1x/horizontal.png"}
              width={186}
              height={30}
              alt={"Turistikrota logo"}
              title="Turistikrota logo"
            />
          </MobileHeader.Logo>
        </MobileHeader.Left>
        <MobileHeader.Fill className="hidden md:flex">{``}</MobileHeader.Fill>
        <MobileHeader.Right>
          <AccountHeaderButton />
        </MobileHeader.Right>
      </MobileHeader>
    </>
  );
}
