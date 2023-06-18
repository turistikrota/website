import { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import MaintenanceAlert from "~/components/maintenance/MaintenanceAlert";
import { generateDefaultMetadata } from "~/utils/meta";

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

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("account.details.edit.meta");
  const locale = getLocale();
  return generateDefaultMetadata(locale, {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords"),
    page: "/account/details/edit",
  });
}

export default function EditAccount() {
  return (
    <div className="p-4">
      <MaintenanceAlert />
    </div>
  );
}
