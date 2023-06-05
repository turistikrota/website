import Image from "next/image";
import Link from "next/link";
import AuthForm from "./components/AuthForm";

export default function AuthHome() {
  return (
    <section className="h-full">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-full lg:py-0">
        <Link
          href="/"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <Image
            src={"https://cdn.turistikrota.com/logo/horizontal.svg"}
            width={186}
            height={30}
            alt={"Turistikrota logo"}
            title="Turistikrota logo"
          />
        </Link>
        <div className="w-full bg-second shadow-lg rounded-lg md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <AuthForm />
          </div>
        </div>
      </div>
    </section>
  );
}
