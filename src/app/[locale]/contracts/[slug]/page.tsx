import { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { generateDefaultMetadata } from "~/utils/meta";
import ContractContent from "./contents/ContractContent";
import { isContract, type Locale } from "./contents/ContractTypes";

type Props = {
  params: {
    slug: string;
    locale: Locale;
  };
};

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
  if (!isContract(slug)) return {};
  const t = await getTranslations(`contracts.${slug}`);
  const locale = getLocale();
  return generateDefaultMetadata(locale, {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    page: `/contracts/${slug}`,
  });
}

export default function ContractPage({ params }: Props) {
  if (!isContract(params.slug)) return notFound();
  return <ContractContent locale={params.locale} slug={params.slug} />;
}
