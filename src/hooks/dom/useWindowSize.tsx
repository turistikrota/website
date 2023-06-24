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

export const useIsMobile = (): boolean => {
  const { width } = useWindowSize();
  return width ? width < 768 : false;
};

export const useIsSmallMobile = (): boolean => {
  const { width } = useWindowSize();
  return width ? width < 375 : false;
};

export const useIsTablet = (): boolean => {
  const { width } = useWindowSize();
  return width ? width < 1024 : false;
};

export const useIsDesktop = (): boolean => {
  const { width } = useWindowSize();
  return width ? width >= 1280 : false;
};
