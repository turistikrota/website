import { cookies } from "next/headers";
import AuthGuard from "~/features/auth/AuthGuard";
import { checkSkipCurrentUser } from "~/features/auth/auth.utils";

export default function AccountLayout({ children }: React.PropsWithChildren) {
  return (
    <AuthGuard
      blockPageOnLoading={true}
      redirectIfNotFound={true}
      skip={checkSkipCurrentUser(cookies())}
    >
      {children}
    </AuthGuard>
  );
}
