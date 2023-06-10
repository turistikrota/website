"use client";

import { useLocale, useTranslations } from "next-intl";
import Link from "next-intl/link";
import Image from "next/image";
import { useSelector } from "react-redux";
import { Page, staticRoute } from "~/static/pages";
import { RootState } from "~/store/store";
import Condition, { ConditionCB } from "../condition/Condition";
import MobileHeader from "./MobileHeader";
import TopHeader from "./TopHeader";

export default function DefaultHeader() {
  const t = useTranslations("header");
  const locale = useLocale();
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  const account = useSelector(
    (state: RootState) => state.account.currentAccount
  );
  return (
    <>
      <TopHeader className="hidden md:flex">
        <TopHeader.Left>{t("left.promotion")}</TopHeader.Left>
        <TopHeader.Right>
          <Link href={staticRoute(Page.AboutUs, locale)}>
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
          <Condition value={isAuthenticated}>
            <ConditionCB value={account !== null}>
              {() => (
                <Link
                  href={`/account/${account?.userName}-${account?.userCode}`}
                >
                  <MobileHeader.Avatar>
                    <Image
                      src={account!.avatarUrl}
                      width={32}
                      height={32}
                      alt={account!.fullName}
                      title={account!.fullName}
                    />
                  </MobileHeader.Avatar>
                </Link>
              )}
            </ConditionCB>
            <Condition value={account === null}>
              <Link href="/account/select">{t("links.selectAccount")}</Link>
            </Condition>
          </Condition>
          <Condition value={!isAuthenticated}>
            <Link href="/auth">
              <MobileHeader.Button>
                <i className="bx bx-user"></i>
              </MobileHeader.Button>
            </Link>
          </Condition>
        </MobileHeader.Right>
      </MobileHeader>
    </>
  );
}
