import { useTranslations } from "next-intl";
import Button from "~/components/button/Button";
import FormSection from "~/components/form/FormSection";
import Input from "~/components/form/Input";
import VipSection from "~/components/sections/VipSection";

export default function AccountChangeUserNameForm() {
  const t = useTranslations("account.details.edit.userName");
  return (
    <VipSection enabled={false}>
      <FormSection>
        <FormSection.Head>
          <FormSection.Head.Title>{t("title")}</FormSection.Head.Title>
          <FormSection.Head.Subtitle>{t("subtitle")}</FormSection.Head.Subtitle>
        </FormSection.Head>
        <FormSection.Body>
          <Input
            id="userName"
            name="userName"
            type="text"
            autoComplete="nickname"
            label={t("userName")}
          />
        </FormSection.Body>
        <FormSection.Footer>
          <Button block={false} htmlType="submit" disabled={true}>
            {t("save")}
          </Button>
        </FormSection.Footer>
      </FormSection>
    </VipSection>
  );
}