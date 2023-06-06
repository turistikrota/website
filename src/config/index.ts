type config = {
  turnstile: {
    siteKey: string;
  };
};

export const Config: config = {
  turnstile: {
    siteKey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!,
  },
};
