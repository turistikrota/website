import { getTranslations } from "next-intl/server";
import ActivateForm from "~/features/auth/ActivateForm";

export default async function ActivateAccount() {
  const t = await getTranslations("auth");
  return <ActivateForm />;
}
