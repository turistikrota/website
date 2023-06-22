"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Spin from "sspin";
import Button from "~/components/button/Button";
import Condition from "~/components/condition/Condition";
import { RootState } from "~/store/store";
import CheckUserNameForm from "./CheckUserNameForm";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { useRefreshMutation } from "./auth.api";
type Id = "check-username" | "login" | "register";

const Components = {
  CheckUserName: CheckUserNameForm,
  Login: LoginForm,
  Register: RegisterForm,
};

type ChainEl = {
  title: string;
  component: keyof typeof Components;
};

const chain: Record<Id, ChainEl> = {
  "check-username": {
    title: "check.title",
    component: "CheckUserName",
  },
  login: {
    title: "login.title",
    component: "Login",
  },
  register: {
    title: "register.title",
    component: "Register",
  },
};

const getActiveChain = (id: Id): ChainEl => {
  return chain[id];
};

export default function AuthForm() {
  const t = useTranslations("auth");
  const isExpired = useSelector((state: RootState) => state.auth.isExpired);
  const [email, setEmail] = useState<string>("");
  const [id, setId] = useState<Id>("check-username");
  const [activeChain, setActiveChain] = useState<ChainEl>(
    getActiveChain("check-username")
  );
  const [handleRefresh, { isLoading, status }] = useRefreshMutation({});

  useEffect(() => {
    if (isExpired && !isLoading && status === "uninitialized") {
      handleRefresh({});
    }
  }, [isExpired]);

  const onNext = (id: Id, mail?: string) => {
    setId(id);
    setActiveChain(getActiveChain(id));
    if (mail) setEmail(mail);
    else setEmail("");
  };

  const onPrev = () => {
    if (["login", "register"].includes(id)) {
      setId("check-username");
      setActiveChain(getActiveChain("check-username"));
    }
  };

  return (
    <>
      <Spin.WithContext value={isLoading}>
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <div className="flex items-center">
            <Condition value={["login", "register"].includes(id)}>
              <Button
                block={false}
                variant="transparent"
                size="normal"
                className="mr-1"
                title={t("buttons.back")}
                onClick={onPrev}
              >
                <i className="bx bx-left-arrow-alt text-3xl text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"></i>
              </Button>
            </Condition>
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              {t(activeChain.title as any)}
            </h1>
          </div>
          <Condition value={id === "check-username"}>
            <Components.CheckUserName
              onNext={(val: boolean, mail?: string) =>
                onNext(val ? "login" : "register", mail)
              }
            />
          </Condition>
          <Condition value={id === "login"}>
            <Components.Login email={email} />
          </Condition>
          <Condition value={id === "register"}>
            <Components.Register email={email} />
          </Condition>
        </div>
      </Spin.WithContext>
    </>
  );
}
