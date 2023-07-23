type config = {
  turnstile: {
    siteKey: string
  }
  headers: {
    TurnstileToken: string
    Authorization: string
    AcceptLang: string
    Credentials: string
  }
  cdn: {
    notFound: string
  }
  cookies: {
    accessToken: string
    accountName: string
  }
}

export const Config: config = {
  turnstile: {
    siteKey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!,
  },
  headers: {
    TurnstileToken: 'X-Turnstile-Token',
    Authorization: 'Authorization',
    AcceptLang: 'Accept-Language',
    Credentials: 'Access-Control-Allow-Credentials',
  },
  cdn: {
    notFound: 'https://s3.turistikrota.com/ui/404.png',
  },
  cookies: {
    accessToken: 'access_token',
    accountName: '.s.a.u',
  },
}
