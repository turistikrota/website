import { cookies } from "next/headers";
import BasicFooter from "~/components/footers/BasicFooter";
import DefaultHeader from "~/components/headers/DefaultHeader";
import AuthGuard from "~/features/auth/AuthGuard";
import { checkSkipCurrentUser } from "~/features/auth/auth.utils";

export default function DefaultLayout({ children }: React.PropsWithChildren) {
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
