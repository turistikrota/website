"use client";

import React, { useState } from "react";
import AccountDetailHeader, {
  type Pages,
} from "../components/AccountDetailHeader";
import AccountMenu from "../components/AccountMenu";

type Props = {
  open?: boolean;
  page: Pages;
};

type Context = {
  openMenu: boolean;
  setOpenMenu: (openMenu: boolean) => void;
};

export const AccountDetailContext = React.createContext<Context>({
  openMenu: false,
  setOpenMenu: () => {},
});

export default function AccountDetailLayout({
  open = false,
  page,
  children,
}: React.PropsWithChildren<Props>) {
  const [menuOpen, setMenuOpen] = useState(open);
  return (
    <AccountDetailContext.Provider
      value={{
        openMenu: menuOpen,
        setOpenMenu: setMenuOpen,
      }}
    >
      <div className="flex min-h-screen h-full w-full">
        <aside
          className={`${
            menuOpen ? "block w-full lg:w-1/5" : "w-0 hidden md:block lg:w-1/5"
          } transition-all duration-300`}
        >
          <AccountMenu open={open} />
        </aside>
        <div
          className={`${
            menuOpen ? "w-0 hidden lg:block" : "w-full lg:w-4/5"
          } transition-all duration-300`}
        >
          <AccountDetailHeader page={page} />
          {children}
        </div>
      </div>
    </AccountDetailContext.Provider>
  );
}
