import BasicFooter from "~/components/footers/BasicFooter";
import DefaultHeader from "~/components/headers/DefaultHeader";
import AuthGuard from "~/features/auth/AuthGuard";

type Props = {
  children: React.ReactNode;
};

export default function DefaultLayout({ children }: Props) {
  return (
    <>
      <AuthGuard blockPageOnLoading={false}>
        <DefaultHeader></DefaultHeader>
        <main>{children}</main>
        <BasicFooter></BasicFooter>
      </AuthGuard>
    </>
  );
}
