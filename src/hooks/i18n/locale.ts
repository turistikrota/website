import { useLocale } from "next-intl";
import { Locales, isLocale } from "~/static/page";

export const useLocaleCode = (): Locales => {
  const locale = useLocale();
  return isLocale(locale) ? locale : "tr";
};
