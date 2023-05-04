"use client";

import Image from "next/image";
import Link from "next/link";
import MobileHeader from "./MobileHeader";
import TopHeader from "./TopHeader";

export default function DefaultHeader() {
    return (
        <>
            <TopHeader className="hidden md:flex">
                <TopHeader.Left>
                    işte bazı textler kankası
                </TopHeader.Left>
                <TopHeader.Right>
                    <Link href={"/about-us"}>About Us</Link>
                    <Link href={"/about-us"}>About Us</Link>
                    <Link href={"/about-us"}>About Us</Link>
                    <Link href={"/about-us"}>About Us</Link>
                </TopHeader.Right>
            </TopHeader>
            <MobileHeader>
                <MobileHeader.Left>
                    <MobileHeader.Logo>
                        <Image src={"https://cdn.turistikrota.com/logo/1x/horizontal.png"} width={186} height={30} alt={"Turistikrota"} />
                    </MobileHeader.Logo>
                </MobileHeader.Left>
                <MobileHeader.Fill className="hidden md:flex">
                </MobileHeader.Fill>
                <MobileHeader.Right>
                    <MobileHeader.Avatar>SSI</MobileHeader.Avatar>
                </MobileHeader.Right>
            </MobileHeader>
            </>
    )
}