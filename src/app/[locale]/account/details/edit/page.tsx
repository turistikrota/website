import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { getStaticRoute } from "~/static/page";
import { LayoutProps } from "~/types/base";
import { generateDefaultMetadata } from "~/utils/meta";
import AccountEditAvatarForm from "./components/AccountEditAvatarForm";
import AccountEditGeneralForm from "./components/AccountEditGeneralForm";

/*
  const account = useSelector(
    (state: RootState) => state.account.currentAccount
  );
  const { isLoading, data, error } = useGetMyAccountQuery(
    `${account!.userName}-${account!.userCode}`
  );
  if (isLoading) return <div>loading...</div>;
  if (error) return <div>error</div>;
  if (!data) return <div>not found</div>;
  console.log("data:", data);
  return <AccountEditForm />;
*/

export async function generateMetadata({
  params: { locale },
}: LayoutProps): Promise<Metadata> {
  const t = await getTranslations("account.details.edit.meta");
  return generateDefaultMetadata(locale, {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    page: {
      tr: getStaticRoute("tr").account.details.edit,
      en: getStaticRoute("en").account.details.edit,
    },
  });
}

export default function EditAccount() {
  return (
    <div className="p-4 space-y-4 md:space-y-6">
      <AccountEditAvatarForm />
      <AccountEditGeneralForm className="max-w-4xl mx-auto" />
    </div>
  );
}
