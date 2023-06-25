"use client";

import Spin from "sspin";
import Button from "~/components/button/Button";
import FormSection from "~/components/form/FormSection";
import Input from "~/components/form/Input";
import Textarea from "~/components/form/Textarea";

type Props = {
  className?: string;
};

export default function AccountEditGeneralForm({ className }: Props) {
  return (
    <FormSection className={className}>
      <Spin loading={false}>
        <form>
          <FormSection.Head>
            <FormSection.Head.Title>Profil Düzenle</FormSection.Head.Title>
            <FormSection.Head.Subtitle>
              Profil bilgilerinizi düzenleyin.
            </FormSection.Head.Subtitle>
          </FormSection.Head>
          <FormSection.Body>
            <div className="space-y-4 md:space-y-6">
              <Input name="fullName" label="Kullanıcı adı" />
              <Input name="fullName" label="Ad Soyad" />
              <Textarea name="description" label="Hakkında" rows={5} />
              <Input name="birthDate" label="Doğum Tarihi" type="date" />
            </div>
          </FormSection.Body>
          <FormSection.Footer>
            <Button block={false}>Değişiklikleri Kaydet</Button>
          </FormSection.Footer>
        </form>
      </Spin>
    </FormSection>
  );
}
