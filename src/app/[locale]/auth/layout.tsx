import { cookies } from "next/headers";
import AuthLayout from "~/app/layouts/auth";
import ConfigurationLayout from "~/app/layouts/configuration";
import AuthGuard from "~/features/auth/AuthGuard";

export default function AuthPageLayout({ children }: React.PropsWithChildren) {
  const cookieStore = cookies();
  const token = cookieStore.get("access_token");
  return (
    <AuthLayout>
      <AuthGuard blockPageOnLoading={true} redirectIfFound={true}>
        <ConfigurationLayout>{children}</ConfigurationLayout>
      </AuthGuard>
    </AuthLayout>
  );
}
