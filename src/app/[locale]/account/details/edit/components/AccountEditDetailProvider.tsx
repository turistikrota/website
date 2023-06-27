"use client";

import { useTranslations } from "next-intl";
import { notFound } from "next/navigation";
import { useSelector } from "react-redux";
import Condition from "~/components/condition/Condition";
import Loading from "~/components/loading/Loading";
import DisabledSection from "~/components/sections/DisabledSection";
import { useGetMyAccountQuery } from "~/features/account/account.api";
import { isAccount } from "~/features/account/account.types";
import { RootState } from "~/store/store";
import { wait } from "~/utils/time";
import AccountActivationForm from "./AccountActivationForm";
import AccountChangeUserNameForm from "./AccountChangeUserNameForm";
import AccountCompletedRateArea from "./AccountCompletedRateArea";
import AccountDeletionForm from "./AccountDeletionForm";
import AccountEditAvatarForm from "./AccountEditAvatarForm";
import AccountEditGeneralForm from "./AccountEditGeneralForm";

export default function AccountEditDetailProvider() {
  const t = useTranslations("sections.disabled");
  const account = useSelector(
    (state: RootState) => state.account.currentAccount
  );
  const { data, error, isLoading, refetch } = useGetMyAccountQuery(
    account?.userName ?? ""
  );

  if (isLoading) return <Loading />;

  if (error) return <div>error</div>;

  if (!data || !isAccount(data)) return notFound();

  const reFetch = async () => {
    await wait(1000);
    refetch();
  };

  return (
    <section className="p-4 space-y-10 max-w-4xl mx-auto relative">
      <AccountEditAvatarForm
        avatar={data.avatarUrl}
        userName={data.userName}
        onUpdate={() => reFetch()}
      />
      <Condition value={data.completedRate > 0 && data.completedRate !== 100}>
        <AccountCompletedRateArea rate={data.completedRate} />
      </Condition>
      <AccountChangeUserNameForm />
      <AccountEditGeneralForm account={data} onUpdate={() => reFetch()} />
      <div className="space-y-4 ">
        <AccountActivationForm
          isActive={data.isActive}
          userName={data.userName}
        />
        <DisabledSection
          title={t("maintenance.title")}
          description={t("maintenance.text")}
          variant="maintenance"
        >
          <AccountDeletionForm />
        </DisabledSection>
      </div>
    </section>
  );
}
