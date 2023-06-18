import { redirect } from "next-intl/server";
import { getStaticRoute } from "~/static/page";

type Props = {
  params: {
    locale: string;
  };
};

export default function Home({ params: { locale } }: Props) {
  redirect(getStaticRoute(locale).comingSoon);
}
