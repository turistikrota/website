import AccountDetailLayout from "../layouts/AccountDetailLayout";

export default function EditAccountLayout({
  children,
}: React.PropsWithChildren) {
  return <AccountDetailLayout page="edit">{children}</AccountDetailLayout>;
}
