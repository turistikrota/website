import { redirect } from "next-intl/server";

export default async function Home() {
  redirect(`/coming-soon`);
}
