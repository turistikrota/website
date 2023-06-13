export enum Page {
  AboutUs = "AboutUs",
  ComingSoon = "ComingSoon",
  AccountCreate = "AccountCreate",
  AuthLogin = "AuthLogin",
  AuthRegister = "AuthRegister",
  AccountSelectProfile = "AccountSelectProfile",
  AccountProfile = "AccountProfile",
}

type Pages = {
  [key in Page]: string;
};

type Lang = string;

type PageProvider = {
  [key in Lang]: Pages;
};

export const StaticRoutes: PageProvider = {
  tr: {
    AboutUs: "/hakkimizda",
    ComingSoon: "/cok-yakinda",
    AccountCreate: "/hesap/olustur",
    AuthLogin: "/giris",
    AuthRegister: "/kayit",
    AccountSelectProfile: "/hesap/sec",
    AccountProfile: "/hesap/detaylar",
  },
  en: {
    AboutUs: "/about-us",
    ComingSoon: "/coming-soon",
    AccountCreate: "/account/create",
    AuthLogin: "/login",
    AuthRegister: "/register",
    AccountSelectProfile: "/account/select",
    AccountProfile: "/account/details",
  },
};

export const replaceTemplate = (template: string, params: any): string => {
  let result = template;
  Object.keys(params).forEach((key) => {
    result = result.replace(`{${key}}`, params[key]);
  });
  return result;
};

export const withLocaleUrl = (url: string, lang: Lang): string => {
  return `/${lang}${url}`;
};

export const staticRoute = (page: Page, lang: Lang): string => {
  return StaticRoutes[lang][page];
};
