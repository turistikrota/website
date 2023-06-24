import Button from "~/components/button/Button";
import Input from "~/components/form/Input";

export default function AccountEditGeneralForm() {
  return (
    <section>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold hidden lg:block">Profil Düzenle</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4 hidden lg:block">
          Profil bilgilerinizi düzenleyin.
        </p>
        <form className="space-y-4">
          <Input id="" label="Kullanıcı Adı" name="" />
          <Input id="" label="Kullanıcı Kodu" name="" />
          <Button>Tamam</Button>
        </form>
      </div>
    </section>
  );
}
