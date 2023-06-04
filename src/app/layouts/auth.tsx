import { TurnstileContext } from "~/components/turnstile/Turnstile";

type Props = {
  children: React.ReactNode;
};

export default function AuthLayout({ children }: Props) {
  return (
    <>
      <main className="h-screen">{children}</main>
      <TurnstileContext></TurnstileContext>
    </>
  );
}
