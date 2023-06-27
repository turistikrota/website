import { Metadata } from "next";
import { getTranslator } from "next-intl/server";
import AuthForm from "~/features/auth/AuthForm";
import { getStaticRoute } from "~/static/page";
import { LayoutProps } from "~/types/base";
import { generateDefaultMetadata } from "~/utils/meta";

export async function generateMetadata({
  params: { locale },
}: LayoutProps): Promise<Metadata> {
  const t = await getTranslator(locale, "auth.meta");
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

export default async function AuthHome({ params: { locale } }: LayoutProps) {
  const t = await getTranslator(locale, "auth");
  return <AuthForm />;
}
