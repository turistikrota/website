import { useTranslations } from "next-intl";
import Alert from "~/components/alert/Alert";

export default function AccountDisabledAlert() {
  const t = useTranslations("account.details.edit.disabled");

  return (
    <Alert type="warning">
      <Alert.Title>{t("title")}</Alert.Title>
      <Alert.Description>{t("description")}</Alert.Description>
    </Alert>
  );
}
