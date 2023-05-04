import { useEffect } from "react";

export const useListener = <T extends HTMLElement = HTMLElement>(eventName: string, handler: (event: Event) => void, element?: T) => {
    const el = element || window;
    useEffect(() => {
        console.log('sa');
        el.addEventListener(eventName, handler);
        return () => {
            el.removeEventListener(eventName, handler, false);
        };
    }, [eventName, handler, el]);
}