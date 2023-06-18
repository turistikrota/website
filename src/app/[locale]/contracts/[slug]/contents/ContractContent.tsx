"use client";

import dynamic from "next/dynamic";

export type Contract = "privacy-notification" | "privacy-and-policy";
export type Locale = "tr" | "en";

const TrPrivacy = dynamic(() => import("./tr/privacy-notification.md"), {
  ssr: false,
});
const EnPrivacy = dynamic(() => import("./en/privacy-notification.md"), {
  ssr: false,
});
const TrPrivacyAndPolicy = dynamic(() => import("./tr/privacy-and-policy.md"), {
  ssr: false,
});
const EnPrivacyAndPolicy = dynamic(() => import("./en/privacy-and-policy.md"), {
  ssr: false,
});

type ContractsType = {
  locale: {
    tr: typeof TrPrivacy;
    en: typeof EnPrivacy;
  };
  date: string;
  slug: string;
};

const Contracts: Record<Contract, ContractsType> = {
  "privacy-notification": {
    locale: {
      tr: TrPrivacy,
      en: EnPrivacy,
    },
    date: "2021-01-01",
    slug: "privacy-notification",
  },
  "privacy-and-policy": {
    locale: {
      tr: TrPrivacyAndPolicy,
      en: EnPrivacyAndPolicy,
    },
    date: "2021-01-01",
    slug: "privacy-and-policy",
  },
};

const getContract = (slug: Contract) => Contracts[slug];

const getLocaleComponent = (slug: Contract, locale: Locale) =>
  getContract(slug).locale[locale];

const isExist = (slug: Contract) => !!getContract(slug);

type Props = {
  locale: Locale;
  slug: Contract;
};

export default function ContractContent({ locale, slug }: Props) {
  if (!isExist(slug)) return <>not found</>;
  const Component = getLocaleComponent(slug, locale);
  return (
    <section className="contract-page p-4 mx-auto max-w-7xl ">
      <Component
        components={{
          h1: ({ children }) => (
            <h1 className="text-2xl font-bold text-center mb-3">{children}</h1>
          ),
          h2: ({ children }) => (
            <h2
              className="text-xl font-bold text-gray-900 dark:text-gray-200 my-3
            "
            >
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-300 mb-1">
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="text-base font-bold">{children}</h4>
          ),
          h5: ({ children }) => (
            <h5 className="text-base font-bold">{children}</h5>
          ),
          h6: ({ children }) => (
            <h6 className="text-base font-bold">{children}</h6>
          ),
          p: ({ children }) => (
            <p className="text-base text-gray-700 dark:text-gray-400">
              {children}
            </p>
          ),
          a: ({ children, href }) => (
            <a className="text-base" href={href}>
              {children}
            </a>
          ),
          ul: ({ children }) => <ul className="text-base">{children}</ul>,
        }}
      />
    </section>
  );
}
