"use client";

import Link from "next-intl/link";
import { useState } from "react";
import { useListener } from "~/hooks/dom/useListener";
import { BaseProps } from "~/types/base";

type HeaderProps = {
  className?: string;
};

type ClickableProps = {
  onClick?: () => void;
};

const Left = ({ children }: BaseProps) => {
  return <div className="flex items-center">{children}</div>;
};

const Fill = ({ children, className }: BaseProps & HeaderProps) => {
  return (
    <div className={`flex items-center flex-grow ${className}`}>{children}</div>
  );
};

const Right = ({ children }: BaseProps) => {
  return <div className="flex items-center">{children}</div>;
};

const Logo = ({ children }: BaseProps) => {
  return (
    <div className="flex items-center">
      <Link href={"/"} className={"flex items-center"}>
        <div className="flex items-center justify-center mr-2 rounded-full">
          {children}
        </div>
      </Link>
    </div>
  );
};

const Avatar = ({ children, onClick }: BaseProps & ClickableProps) => {
  return (
    <button
      onClick={onClick}
      className="p-2 flex items-center text-center justify-center text-gray-600 w-9 h-9 bg-gray-100 rounded-full hover:bg-gray-200 dark:text-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      {children}
    </button>
  );
};

function MobileHeader({ children }: BaseProps) {
  const [isFixed, setIsFixed] = useState(false);

  useListener("scroll", () => {
    let checkPoint = isFixed ? 64 : 120;
    setIsFixed(window.scrollY >= checkPoint);
  });

  return (
    <header
      className={`backdrop-saturate-200 backdrop-blur-sm w-full h-16 border-b border-gray-200 dark:border-gray-800 ${
        isFixed && "fixed top-0 left-0 z-30 animate-slide-down"
      }`}
    >
      <div className="flex items-center justify-between h-full px-4 mx-auto max-w-7xl">
        {children}
      </div>
    </header>
  );
}

MobileHeader.Left = Left;
MobileHeader.Right = Right;
MobileHeader.Logo = Logo;
MobileHeader.Avatar = Avatar;
MobileHeader.Fill = Fill;

export default MobileHeader;
