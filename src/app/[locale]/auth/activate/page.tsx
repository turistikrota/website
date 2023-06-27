import { getTranslator } from "next-intl/server";
import ActivateForm from "~/features/auth/ActivateForm";
import { LayoutProps } from "~/types/base";

export default async function ActivateAccount({
  params: { locale },
}: LayoutProps) {
  const t = await getTranslator(locale, "auth");
  return <ActivateForm />;
}
