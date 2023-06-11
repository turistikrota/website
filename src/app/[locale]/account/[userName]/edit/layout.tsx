import AccountDetailLayout from "../layouts/AccountDetailLayout";

export default function EditAccountLayout({
  children,
}: React.PropsWithChildren) {
  return <AccountDetailLayout>{children}</AccountDetailLayout>;
}
