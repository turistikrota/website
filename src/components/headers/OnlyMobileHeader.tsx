"use client";

import Logo from "../logo/logo";
import AccountHeaderButton from "./AccountHeaderButton";
import MobileHeader from "./MobileHeader";

export default function OnlyMobileHeader() {
  return (
    <>
      <MobileHeader>
        <MobileHeader.Left>
          <MobileHeader.Logo>
            <Logo width={186} height={30} />
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
