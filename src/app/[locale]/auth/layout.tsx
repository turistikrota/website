import { cookies } from "next/headers";
import AuthLayout from "~/app/layouts/auth";
import ConfigurationLayout from "~/app/layouts/configuration";
import AuthGuard from "~/features/auth/AuthGuard";
import { checkSkipCurrentUser } from "~/features/auth/auth.utils";

export default function AuthPageLayout({ children }: React.PropsWithChildren) {
  return (
    <AuthLayout>
      <AuthGuard
        blockPageOnLoading={true}
        redirectIfFound={true}
        skip={checkSkipCurrentUser(cookies())}
      >
        <ConfigurationLayout>{children}</ConfigurationLayout>
      </AuthGuard>
    </AuthLayout>
  );
}
