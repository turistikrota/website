import AccountMenu from "./components/AccountMenu";

export default function AccountDetail() {
  return (
    <section className="sm:max-w-2xl mx-auto min-h-screen h-full flex items-center justify-center">
      <AccountMenu open={false} />
    </section>
  );
}
