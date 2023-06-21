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

type ButtonProps = {
  ariaLabel?: string;
  title?: string;
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

const Button = ({
  children,
  onClick,
  ...props
}: BaseProps & ButtonProps & ClickableProps) => {
  return (
    <button
      onClick={onClick}
      className="p-2 flex items-center text-center justify-center text-gray-600 w-9 h-9 bg-gray-200 rounded-full hover:bg-gray-300 dark:text-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors duration-200"
      {...props}
    >
      {children}
    </button>
  );
};

const Avatar = ({ children, onClick }: BaseProps & ClickableProps) => {
  return (
    <button
      onClick={onClick}
      className="p-2 flex items-center text-center justify-center text-gray-600 w-9 h-9 bg-gray-200 rounded-full dark:text-gray-300 dark:bg-gray-700 transition-colors duration-200"
    >
      {children}
    </button>
  );
};

function MobileHeader({
  children,
  className,
}: React.PropsWithChildren<HeaderProps>) {
  const [isFixed, setIsFixed] = useState(false);

  useListener("scroll", () => {
    let checkPoint = isFixed ? 64 : 120;
    setIsFixed(window.scrollY >= checkPoint);
  });

  return (
    <header
      className={` backdrop-blur-md w-full h-16 border-b border-gray-200 dark:border-gray-800 ${
        isFixed ? "fixed top-0 left-0 z-30 animate-slide-down" : ""
      }`}
    >
      <div
        className={`flex items-center h-full px-4 mx-auto max-w-7xl ${
          className ? className : "justify-between"
        }`}
      >
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
MobileHeader.Button = Button;

export default MobileHeader;
