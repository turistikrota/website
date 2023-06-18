type RouteType = {
  aboutUs: string;
  account: {
    create: string;
    details: {
      edit: string;
      notifications: string;
      privacy: string;
      security: string;
      settings: string;
      default: string;
    };
    select: string;
  };
  auth: {
    activate: string;
    reSend: string;
    default: string;
    refresh: string;
  };
  comingSoon: string;
  contracts: {
    terms: string;
    privacyNotify: string;
    privacy: string;
  };
};

export type Locales = "en" | "tr";

const Routes: Record<Locales, RouteType> = {
  tr: {
    aboutUs: "/hakkimizda",
    account: {
      create: "/hesap/olustur",
      details: {
        edit: "/hesap/detay/duzenle",
        notifications: "/hesap/detay/bildirim-tercihleri",
        privacy: "/hesap/detay/gizlilik",
        security: "/hesap/detay/guvenlik",
        settings: "/hesap/detay/ayarlar",
        default: "/hesap/detay",
      },
      select: "/hesap/sec",
    },
    auth: {
      activate: "/giris/aktivasyon",
      reSend: "/giris/tekrar-gonder",
      default: "/giris",
      refresh: "/giris?refresh=true",
    },
    comingSoon: "/cok-yakinda",
    contracts: {
      terms: "/sozlesmeler/kullanim-kosullari",
      privacyNotify: "/sozlesmeler/gizlilik-bildirimi",
      privacy:
        "/sozlesmeler/kisisel-verilerin-korunmasi-ve-gizililik-politikası",
    },
  },
  en: {
    aboutUs: "/about-us",
    account: {
      create: "/account/create",
      details: {
        edit: "/account/details/edit",
        notifications: "/account/details/notifications",
        privacy: "/account/details/privacy",
        security: "/account/details/security",
        settings: "/account/details/settings",
        default: "/account/details",
      },
      select: "/account/select",
    },
    auth: {
      activate: "/auth/activate",
      reSend: "/auth/re-send",
      default: "/auth",
      refresh: "/auth?refresh=true",
    },
    comingSoon: "/coming-soon",
    contracts: {
      terms: "/contracts/terms-of-use",
      privacyNotify: "/contracts/privacy-notice",
      privacy: "/contracts/privacy-and-protection-of-personal-data",
    },
  },
};

export const getStaticRoute = (locale: string) => {
  return Routes[locale as Locales];
};

export const mergeUrlWithLocale = (locale: string, url: string) =>
  `/${locale}${url}`;
