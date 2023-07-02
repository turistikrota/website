import React from "react";
import { Size } from "~/types/size";

type Position = "top" | "bottom" | "left" | "right" | "auto" | "top-right";

type PositionEls = {
  content: string;
  arrow: string;
};

type Props = {
  content: React.ReactNode;
  position?: Position;
  size?: Size;
};

const positions: Record<Position, PositionEls> = {
  top: {
    content: "top-full left-1/2 -translate-x-1/2 -translate-y-full",
    arrow: "",
  },
  bottom: {
    content: "bottom-full left-1/2 -translate-x-1/2 translate-y-full",
    arrow: "",
  },
  left: {
    content: "right-full top-1/2 -translate-y-1/2",
    arrow: "",
  },
  right: {
    content: "left-full top-1/2 -translate-y-1/2",
    arrow: "",
  },
  auto: {
    content: "top-full left-1/2 -translate-x-1/2 -translate-y-full",
    arrow: "",
  },
  "top-right": {
    content: "bottom-full left-full -translate-x-8",
    arrow: "-bottom-2 left-4 -translate-x-1/2",
  },
};

const sizes: Record<Size, string> = {
  xs: "min-w-[50px]",
  sm: "min-w-[100px]",
  md: "min-w-[150px]",
  lg: "min-w-[200px]",
  xl: "min-w-[250px]",
  "2xl": "min-w-[300px]",
  "3xl": "min-w-[350px]",
  "4xl": "min-w-[400px]",
};

const Tooltip: React.FC<React.PropsWithChildren<Props>> = ({
  content,
  position = "top-right",
  size = "md",
  children,
}) => {
  return (
    <div className="relative group">
      <div className="inline-flex items-center">{children}</div>
      <div
        className={`absolute text-sm font-normal p-2 bg-third text-white rounded opacity-0 transition-opacity duration-200 invisible group-hover:visible group-hover:opacity-100 ${positions[position].content} ${sizes[size]}`}
      >
        {content}
        <svg
          className={`absolute text-third h-2 w-full ${positions[position].arrow}`}
          x="0px"
          y="0px"
          viewBox="0 0 255 255"
          xmlSpace="preserve"
        >
          <polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
        </svg>
      </div>
    </div>
  );
};
export default Tooltip;
