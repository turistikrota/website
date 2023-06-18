import { Metadata } from "next";

type Options = {
  title: string;
  description: string;
  keywords: string;
  page: string;
};

export const generateDefaultMetadata = (
  locale: string,
  opts: Options
): Metadata => {
  return {
    title: opts.title,
    description: opts.description,
    keywords: opts.keywords,
    alternates: {
      languages: {
        tr: `/tr${opts.page}`,
        en: `/en${opts.page}`,
      },
    },
    openGraph: {
      title: opts.title,
      description: opts.description,
      type: "website",
      url: `https://turistikrota.com/${locale}${opts.page}`,
      images: [
        {
          url: "https://cdn.turistikrota.com/logo/vertical_500x500.png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@turistikrota",
      creator: "@turistikrota",
      title: opts.title,
      description: opts.description,
      images: [
        {
          url: "https://cdn.turistikrota.com/logo/vertical_500x500.png",
        },
      ],
    },
  };
};
