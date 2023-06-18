export enum Services {
  Account = "account",
  Auth = "auth",
  Soon = "soon",
}

export const ApiUrls: Record<Services, string> = {
  [Services.Account]: process.env.NEXT_PUBLIC_API_ACCOUNT_SRV_URL!,
  [Services.Auth]: process.env.NEXT_PUBLIC_API_AUTH_SRV_URL!,
  [Services.Soon]: process.env.NEXT_PUBLIC_API_SOON_SRV_URL!,
};

export const apiUrl = (service: Services, path: string) =>
  `${ApiUrls[service]}${path}`;
