"use client";

import React, { useState } from "react";
import AccountDetailHeader, {
  type Pages,
} from "../components/AccountDetailHeader";
import AccountMenu from "../components/AccountMenu";
import AccountSelectionRedirect from "./AccountSelectionRedirect";

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
      <div className="flex flex-col min-h-screen h-full w-full">
        <div className={`lg:hidden ${menuOpen ? "hidden" : "block"}`}>
          <AccountDetailHeader page={page} />
        </div>
        <div className="flex h-full w-full flex-grow">
          <aside
            className={`${
              menuOpen
                ? "block w-full lg:w-2/12"
                : "w-0 hidden lg:block lg:w-fit h-full"
            } transition-all duration-200`}
          >
            <AccountMenu isDetail={true} />
          </aside>
          <div
            className={`${
              menuOpen ? "w-0 hidden lg:block lg:w-10/12" : "w-full"
            } transition-all duration-200 h-full`}
          >
            {children}
          </div>
        </div>
      </div>
      <AccountSelectionRedirect />
    </AccountDetailContext.Provider>
  );
}
