import { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import { generateDefaultMetadata } from "~/utils/meta";
import ContractContent, {
  type Contract,
  type Locale,
} from "./contents/ContractContent";

type Props = {
  params: {
    slug: Contract;
    locale: Locale;
  };
};

export async function generateMetadata({
  params: { slug },
}: Props): Promise<Metadata> {
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
  return <ContractContent locale={params.locale} slug={params.slug} />;
}
