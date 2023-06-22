"use client";
import { useEffect, useState } from "react";

type Size = {
  width: number | undefined;
  height: number | undefined;
};

export const useWindowSize = (): Size => {
  const [windowSize, setWindowSize] = useState<Size>({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handler = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };
      window.addEventListener("resize", handler);
      handler();
      return () => window.removeEventListener("resize", handler);
    }
  }, []);
  return windowSize;
};
