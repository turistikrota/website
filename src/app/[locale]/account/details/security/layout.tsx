import AccountDetailLayout from "../layouts/AccountDetailLayout";

export default function SecurityAccountLayout({
  children,
}: React.PropsWithChildren) {
  return <AccountDetailLayout page="security">{children}</AccountDetailLayout>;
}
