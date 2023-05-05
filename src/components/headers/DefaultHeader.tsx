"use client";

import { Link, useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { Page, staticRoute } from "~/static/pages";
import MobileHeader from "./MobileHeader";
import TopHeader from "./TopHeader";

export default function DefaultHeader() {
    const t = useTranslations("header");
    const locale = useLocale();
    return (
        <>
            <TopHeader className="hidden md:flex">
                <TopHeader.Left>
                    {t('left.promotion')}
                </TopHeader.Left>
                <TopHeader.Right>
                    <Link href={staticRoute(Page.AboutUs, locale)}>{t('links.aboutUs')}</Link>
                </TopHeader.Right>
            </TopHeader>
            <MobileHeader>
                <MobileHeader.Left>
                    <MobileHeader.Logo>
                        <Image src={"https://cdn.turistikrota.com/logo/1x/horizontal.png"} width={186} height={30} alt={"Turistikrota logo"} title="Turistikrota logo" />
                    </MobileHeader.Logo>
                </MobileHeader.Left>
                <MobileHeader.Fill className="hidden md:flex">
                </MobileHeader.Fill>
                <MobileHeader.Right>
                    {/* 
                    <MobileHeader.Avatar>SSI</MobileHeader.Avatar>
                */}
                    </MobileHeader.Right>
            </MobileHeader>
            </>
    )
}