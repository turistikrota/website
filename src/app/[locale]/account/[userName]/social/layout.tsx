import AccountDetailLayout from "../layouts/AccountDetailLayout";

export default function SocialAccountLayout({
  children,
}: React.PropsWithChildren) {
  return <AccountDetailLayout>{children}</AccountDetailLayout>;
}
