"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Spin from "sspin";
import { Condition, Skeleton } from "~/components";
import { useToast } from "~/components/toast/Toast";

type Id = "check-username" | "login" | "register";

const Components = {
  CheckUserName: dynamic(() => import("./CheckUserNameForm"), {
    ssr: false,
    loading: () => <Skeleton.Block size="3xl" />,
  }),
  Login: dynamic(() => import("./LoginForm"), {
    ssr: false,
    loading: () => <Skeleton.Block size="4xl" />,
  }),
  Register: dynamic(() => import("./RegisterForm"), {
    ssr: false,
  }),
};

type ChainEl = {
  title: string;
  component: keyof typeof Components;
};

const chain: Record<Id, ChainEl> = {
  "check-username": {
    title: "Sign in or Sign up to your account",
    component: "CheckUserName",
  },
  login: {
    title: "Sign in to your account",
    component: "Login",
  },
  register: {
    title: "Sign up to your account",
    component: "Register",
  },
};

const getActiveChain = (id: Id): ChainEl => {
  return chain[id];
};

export default function LoginForm() {
  const [id, setId] = useState<Id>("register");
  const toast = useToast();
  const [activeChain, setActiveChain] = useState<ChainEl>(
    getActiveChain("register")
  );

  useEffect(() => {
    toast.secondary(
      "Welcome to the app with long text to test the wrapping",
      2500
    );
  }, []);

  const onNext = (id: Id) => {
    setId(id);
    setActiveChain(getActiveChain(id));
  };
  return (
    <>
      <Spin.WithContext value={false}>
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            {activeChain.title}
          </h1>
          <Condition value={id === "check-username"}>
            <Components.CheckUserName
              onNext={(val: boolean) => onNext(val ? "login" : "register")}
            />
          </Condition>
          <Condition value={id === "login"}>
            <Components.Login />
          </Condition>
          <Condition value={id === "register"}>
            <Components.Register />
          </Condition>
        </div>
      </Spin.WithContext>
    </>
  );
}
