import { getTranslations } from "next-intl/server";
import AuthForm from "~/features/auth/AuthForm";

export default async function AuthHome() {
  const t = await getTranslations("auth");
  return <AuthForm />;
}
