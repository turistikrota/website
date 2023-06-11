"use client";
import { useParams } from "next/navigation";
import { useGetMyAccountQuery } from "~/features/account/account.api";

export default function EditAccount() {
  const params = useParams();
  const { isLoading, data, error } = useGetMyAccountQuery(params.userName);

  if (isLoading) return <div>loading...</div>;
  if (error) return <div>error</div>;
  if (!data) return <div>not found</div>;
  console.log("data:", data);
  return <div>edit account</div>;
}
