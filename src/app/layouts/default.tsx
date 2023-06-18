import { cookies } from "next/headers";
import BasicFooter from "~/components/footers/BasicFooter";
import DefaultHeader from "~/components/headers/DefaultHeader";
import AuthGuard from "~/features/auth/AuthGuard";
import { checkSkipCurrentUser } from "~/features/auth/auth.utils";

type Props = {
  children: React.ReactNode;
};

export default function DefaultLayout({ children }: Props) {
  return (
    <>
      <AuthGuard
        blockPageOnLoading={false}
        skip={checkSkipCurrentUser(cookies())}
      >
        <DefaultHeader></DefaultHeader>
        <main>{children}</main>
        <BasicFooter></BasicFooter>
      </AuthGuard>
    </>
  );
}
