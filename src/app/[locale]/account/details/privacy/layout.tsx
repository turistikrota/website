import AccountDetailLayout from "../layouts/AccountDetailLayout";

export default function PrivacyAccountLayout({
  children,
}: React.PropsWithChildren) {
  return <AccountDetailLayout page="privacy">{children}</AccountDetailLayout>;
}
