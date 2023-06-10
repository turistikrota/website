import AuthGuard from "~/features/auth/AuthGuard";

export default function AccountSelectLayout({
  children,
}: React.PropsWithChildren) {
  return (
    <AuthGuard blockPageOnLoading={true} redirectIfNotFound={true}>
      {children}
    </AuthGuard>
  );
}
