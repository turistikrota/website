import AccountDetailLayout from "../layouts/AccountDetailLayout";

export default function HelpAccountLayout({
  children,
}: React.PropsWithChildren) {
  return <AccountDetailLayout page="security">{children}</AccountDetailLayout>;
}
