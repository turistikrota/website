import ConfigurationLayout from "~/app/layouts/configuration";
import AccountCreateForm from "~/features/account/AccountCreateForm";

export default function AccountCreate() {
  return (
    <ConfigurationLayout>
      <AccountCreateForm />
    </ConfigurationLayout>
  );
}
