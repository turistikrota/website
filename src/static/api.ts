export enum Services {
  Account = 'account',
  Soon = 'soon',
  Place = 'place',
  Category = 'category',
  Listing = 'listing',
  Business = 'business',
}

export const ApiUrls: Record<Services, string> = {
  [Services.Account]: process.env.NEXT_PUBLIC_API_ACCOUNT_SRV_URL!,
  [Services.Soon]: process.env.NEXT_PUBLIC_API_SOON_SRV_URL!,
  [Services.Place]: process.env.NEXT_PUBLIC_API_PLACE_SRV_URL!,
  [Services.Category]: process.env.NEXT_PUBLIC_API_CATEGORY_SRV_URL!,
  [Services.Listing]: process.env.NEXT_PUBLIC_API_LISTING_SRV_URL!,
  [Services.Business]: process.env.NEXT_PUBLIC_API_BUSINESS_SRV_URL!,
}

export const apiUrl = (service: Services, path: string) => `${ApiUrls[service]}${path}`
