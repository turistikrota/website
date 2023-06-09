"use client";

import { Provider, useDispatch } from "react-redux";

import { useLocale } from "next-intl";
import { PropsWithChildren } from "react";
import { setLocale } from "~/features/config/config.store";
import store from "./store";

function ConfigProvider({ children }: PropsWithChildren) {
  const locale = useLocale();
  const dispatch = useDispatch();
  dispatch(setLocale(locale));
  return <>{children}</>;
}

export default function ReduxProvider({ children }: PropsWithChildren) {
  return (
    <Provider store={store}>
      <ConfigProvider>{children}</ConfigProvider>
    </Provider>
  );
}
