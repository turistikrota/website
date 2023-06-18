import AccountDetailLayout from "../layouts/AccountDetailLayout";

export default function SettingsAccountLayout({
  children,
}: React.PropsWithChildren) {
  return <AccountDetailLayout page="settings">{children}</AccountDetailLayout>;
}
