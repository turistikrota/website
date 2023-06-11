import { cookies } from "next/headers";
import BasicFooter from "~/components/footers/BasicFooter";
import AuthGuard from "~/features/auth/AuthGuard";
import { checkSkipCurrentUser } from "~/features/auth/auth.utils";

export default function AccountLayout({ children }: React.PropsWithChildren) {
  return (
    <>
      <AuthGuard
        blockPageOnLoading={true}
        skip={checkSkipCurrentUser(cookies())}
      >
        <main>{children}</main>
        <BasicFooter></BasicFooter>
      </AuthGuard>
    </>
  );
}
