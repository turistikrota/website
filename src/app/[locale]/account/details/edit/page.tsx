"use client";
import MaintenanceAlert from "~/components/maintenance/MaintenanceAlert";

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

export default function EditAccount() {
  return (
    <div className="p-4">
      <MaintenanceAlert />
    </div>
  );
}
