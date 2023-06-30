import { cookies } from "next/headers";
import OnlyMobileHeader from "~/components/headers/OnlyMobileHeader";
import AuthGuard from "~/features/auth/AuthGuard";
import { checkSkipCurrentUser } from "~/features/auth/auth.utils";

export default function MapLayout({ children }: React.PropsWithChildren) {
  return (
    <>
      <AuthGuard
        blockPageOnLoading={false}
        skip={checkSkipCurrentUser(cookies())}
      >
        <OnlyMobileHeader />
        <main
          className="h-full"
          style={{
            height: "calc(100vh - 63px)",
          }}
        >
          {children}
        </main>
      </AuthGuard>
    </>
  );
}
