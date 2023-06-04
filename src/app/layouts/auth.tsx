import { TurnstileNextContext } from "turnstile-next";

type Props = {
  children: React.ReactNode;
};

export default function AuthLayout({ children }: Props) {
  return (
    <>
      <main className="h-screen">{children}</main>
      <TurnstileNextContext></TurnstileNextContext>
    </>
  );
}
