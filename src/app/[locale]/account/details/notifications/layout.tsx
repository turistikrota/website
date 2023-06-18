import AccountDetailLayout from "../layouts/AccountDetailLayout";

export default function NotificationsAccountLayout({
  children,
}: React.PropsWithChildren) {
  return (
    <AccountDetailLayout page="notifications">{children}</AccountDetailLayout>
  );
}
