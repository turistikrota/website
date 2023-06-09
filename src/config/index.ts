type config = {
  turnstile: {
    siteKey: string;
  };
  headers: {
    TurnstileToken: string;
    Authorization: string;
    AcceptLang: string;
  };
};

export const Config: config = {
  turnstile: {
    siteKey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!,
  },
  headers: {
    TurnstileToken: "X-Turnstile-Token",
    Authorization: "Authorization",
    AcceptLang: "Accept-Language",
  },
};
