import AccountDetailLayout from "../layouts/AccountDetailLayout";

export default function SocialAccountLayout({
  children,
}: React.PropsWithChildren) {
  return <AccountDetailLayout page="security">{children}</AccountDetailLayout>;
}
