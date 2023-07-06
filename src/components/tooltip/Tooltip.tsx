import React, { useContext, useEffect, useState } from "react";
import { Size } from "~/types/size";
import { TooltipContext } from "./TooltipProvider";
import { TooltipPosition } from "./positions";

type PositionEls = {
  content: string;
  arrow: string;
};

type Props = {
  content: React.ReactNode;
  position?: TooltipPosition;
  size?: Size;
};

const randomUUID = (): string => {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
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
  position = "auto",
  size = "md",
  children,
}) => {
  const [key] = useState(randomUUID()); // [key, setKey] = useState(randomUUID())
  const ctx = useContext(TooltipContext);

  useEffect(() => {
    ctx.add(key, content, position);

    return () => {
      ctx.remove(key);
    };
  }, []);

  const show = (e: React.MouseEvent) => {
    const elPositions = e.currentTarget.getBoundingClientRect();
    ctx.show({
      key,
      height: elPositions.height,
      width: elPositions.width,
      x: elPositions.x,
      y: elPositions.y,
    });
  };

  const hide = () => {
    ctx.hide(key);
  };

  return (
    <div className="relative group">
      <div
        className="inline-flex items-center"
        onMouseEnter={show}
        onMouseLeave={hide}
      >
        {children}
      </div>
    </div>
  );
};
export default Tooltip;
