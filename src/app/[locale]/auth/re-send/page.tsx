import { getTranslations } from "next-intl/server";
import ReSendVerificationForm from "~/features/auth/ReSendVerificationForm";

export default async function ReSendVerification() {
  const t = await getTranslations("auth");
  return <ReSendVerificationForm />;
}

export const revalidate = 3600;
