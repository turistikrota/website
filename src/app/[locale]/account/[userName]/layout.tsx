import BasicFooter from "~/components/footers/BasicFooter";
import AuthGuard from "~/features/auth/AuthGuard";

export default function AccountLayout({ children }: React.PropsWithChildren) {
  return (
    <>
      <AuthGuard blockPageOnLoading={true}>
        <main>{children}</main>
        <BasicFooter></BasicFooter>
      </AuthGuard>
    </>
  );
}
