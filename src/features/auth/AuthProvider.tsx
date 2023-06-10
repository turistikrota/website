"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useGetCurrentMutation } from "./auth.api";
import { setAccessToken, setIsLoading } from "./auth.store";

type Props = {
  token: string;
};

export default function AuthProvider({
  token,
  children,
}: React.PropsWithChildren<Props>) {
  const [handleCurrentUser, { isLoading, data, status }] =
    useGetCurrentMutation({});
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setIsLoading(isLoading));
  }, [isLoading]);

  useEffect(() => {
    console.log("data::", data);
    console.log("status::", status);
  }, [status]);

  useEffect(() => {
    if (token) {
      dispatch(setAccessToken(token));
      handleCurrentUser({});
    }
  }, [token]);
  return <>{children}</>;
}
