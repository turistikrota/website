"use client";

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { User } from "~/types/user";
import { setUser } from "./auth.store";

type Props = {
  user: User | null;
};

export default function AuthClientProvider({
  user,
  children,
}: React.PropsWithChildren<Props>) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setUser(user));
  }, [user]);
  return <>{children}</>;
}
