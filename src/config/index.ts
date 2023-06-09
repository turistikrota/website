type config = {
  turnstile: {
    siteKey: string;
  };
  headers: {
    TurnstileToken: string;
  };
};

export const Config: config = {
  turnstile: {
    siteKey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!,
  },
  headers: {
    TurnstileToken: "X-Turnstile-Token",
  },
};
