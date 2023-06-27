import { getTranslator } from "next-intl/server";
import ReSendVerificationForm from "~/features/auth/ReSendVerificationForm";
import { LayoutProps } from "~/types/base";

export default async function ReSendVerification({
  params: { locale },
}: LayoutProps) {
  const t = await getTranslator(locale, "auth");
  return <ReSendVerificationForm />;
}
