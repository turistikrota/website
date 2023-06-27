"use client";

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { User } from "~/types/user";
import { setIsExpired, setUser } from "./auth.store";

type Props = {
  user: User | null;
  isExpired: boolean;
};

export default function AuthClientProvider({
  user,
  isExpired,
  children,
}: React.PropsWithChildren<Props>) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setUser(user));
  }, [dispatch, user]);

  useEffect(() => {
    dispatch(setIsExpired(isExpired));
  }, [dispatch, isExpired]);

  return <>{children}</>;
}
