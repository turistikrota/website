import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import AuthForm from "~/features/auth/AuthForm";
import { getStaticRoute } from "~/static/page";
import { LayoutProps } from "~/types/base";
import { generateDefaultMetadata } from "~/utils/meta";

export async function generateMetadata({
  params: { locale },
}: LayoutProps): Promise<Metadata> {
  const t = await getTranslations("auth.meta");
  return generateDefaultMetadata(locale, {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    page: {
      tr: getStaticRoute("tr").auth.default,
      en: getStaticRoute("en").auth.default,
    },
  });
}

export default async function AuthHome() {
  const t = await getTranslations("auth");
  return <AuthForm />;
}
