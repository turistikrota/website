import AccountDetailLayout from "../layouts/AccountDetailLayout";

export default function VipAccountLayout({
  children,
}: React.PropsWithChildren) {
  return <AccountDetailLayout page="vip">{children}</AccountDetailLayout>;
}
