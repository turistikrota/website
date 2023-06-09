export const refreshTurnstile = () => {
  if (typeof window === "undefined") return;
  if ("turnstile" in window) {
    // @ts-ignore
    window.turnstile.render(".cf-turnstile");
  }
};
