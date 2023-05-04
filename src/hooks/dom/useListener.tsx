"use client";

import { useEffect } from "react";

export const useListener = <T extends HTMLElement = HTMLElement>(eventName: string, handler: (event: Event) => void, element?: T) => {
    let el = typeof window !== "undefined" ? (element || window) : undefined;
    useEffect(() => {
        el!.addEventListener(eventName, handler);
        return () => {
            el!.removeEventListener(eventName, handler, false);
        };
    }, [eventName, handler, el]);
}