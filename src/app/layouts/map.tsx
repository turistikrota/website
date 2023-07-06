import { cookies } from "next/headers";
import OnlyMobileHeader from "~/components/headers/OnlyMobileHeader";
import { TooltipProvider } from "~/components/tooltip/TooltipProvider";
import AuthGuard from "~/features/auth/AuthGuard";
import { checkSkipCurrentUser } from "~/features/auth/auth.utils";
import { useSizeWithoutHeader } from "~/hooks/dom/useHeaderSize";

export default function MapLayout({ children }: React.PropsWithChildren) {
  const size = useSizeWithoutHeader();
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
            minHeight: size,
          }}
        >
          <TooltipProvider>{children}</TooltipProvider>
        </main>
      </AuthGuard>
    </>
  );
}
