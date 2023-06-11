"use client";

import React, { useState } from "react";
import AccountMenu from "../components/AccountMenu";

type Props = {
  open?: boolean;
};

type Context = {
  openMenu: boolean;
  setOpenMenu: (openMenu: boolean) => void;
};

const AccountDetailContext = React.createContext<Context>({
  openMenu: false,
  setOpenMenu: () => {},
});

export default function AccountDetailLayout({
  open = false,
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
        <div
          className={`${
            menuOpen ? "block w-full lg:w-1/5" : "w-0 hidden"
          } transition-all duration-300`}
        >
          <AccountMenu />
        </div>
        <div
          className={`${
            menuOpen ? "w-0 hidden lg:w-4/5 lg:block" : "w-full"
          } transition-all duration-300`}
        >
          {children}
        </div>
      </div>
    </AccountDetailContext.Provider>
  );
}
