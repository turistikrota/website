import React from "react";

type OverlayItemProps = {
  onClick?: () => void;
};

type DropdownType = React.FC<React.PropsWithChildren> & {
  Button: React.FC<React.PropsWithChildren>;
  Overlay: React.FC<React.PropsWithChildren>;
  OverlayItem: React.FC<React.PropsWithChildren<OverlayItemProps>>;
};

const Button: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <button
      type="button"
      className="peer group inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:ring-transparent focus:ring-0 focus-visible:outline-none focus:outline-none"
    >
      {children}
      <i className="bx bxs-chevron-down text-gray-500 ml-2 transition-transform duration-200 group-focus:rotate-180"></i>
    </button>
  );
};

const Overlay: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="origin-top-right absolute mt-2 right-0 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible peer-focus:opacity-100 peer-focus:visible transition-opacity">
      <div
        className="py-1"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        {children}
      </div>
    </div>
  );
};

const OverlayItem: React.FC<React.PropsWithChildren<OverlayItemProps>> = ({
  children,
  onClick,
}) => {
  return (
    <a
      href="#"
      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
      role="menuitem"
      onClick={onClick}
    >
      {children}
    </a>
  );
};

const Dropdown: DropdownType = ({ children }) => {
  return <div className="relative hidden lg:block">{children}</div>;
};

Dropdown.Button = Button;
Dropdown.Overlay = Overlay;
Dropdown.OverlayItem = OverlayItem;

export default Dropdown;
