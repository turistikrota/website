"use client";
import AccountMenu from "./components/AccountMenu";

export default function AccountDetail() {
  return (
    <section className="sm:max-w-md mx-auto min-h-screen h-full flex items-start justify-center">
      <AccountMenu isDetail={false} />
    </section>
  );
}
