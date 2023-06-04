import { useLocale } from "next-intl";
import { redirect } from "next-intl/server";
import { Page, staticRoute } from "~/static/pages";

export default async function Home() {
  const locale = useLocale();
  redirect(staticRoute(Page.ComingSoon, locale));
}
