import Link from "next-intl/link";
import Image from "next/image";
import "sspin/dist/index.css";
import AuthLayout from "~/app/layouts/auth";

export default function AuthPageLayout({ children }: React.PropsWithChildren) {
  return (
    <AuthLayout>
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
            {children}
          </div>
        </div>
      </section>
    </AuthLayout>
  );
}
