"use client";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import { ComponentType, useState } from "react";
import Button from "~/components/button/Button";
import { Variant } from "~/types/base";

type ContentType = "list" | "map";

const Components: Record<ContentType, ComponentType> = {
  list: dynamic(() => import("./ListContent")),
  map: dynamic(() => import("./MapContent"), { ssr: false }),
};

type ButtonProps = {
  text: string;
  icon: string;
  onClick: () => void;
  variant: Variant;
};

const AbsoluteButton: React.FC<ButtonProps> = ({
  text,
  variant,
  icon,
  onClick,
}) => {
  return (
    <div className="absolute bottom-10 right-1/2 transform translate-x-1/2 z-500">
      <Button
        onClick={() => onClick()}
        className="hover:scale-103 hover:shadow-lg flex items-center justify-center gap-2 text-lg"
        variant={variant}
        title={text}
      >
        <i className={`bx bx-sm bx-${icon}`} />
        {text}
      </Button>
    </div>
  );
};

export default function ContentSwitcher() {
  const t = useTranslations("content-switch");
  const [active, setActive] = useState<ContentType>("list");

  if (active === "list") {
    return (
      <>
        <Components.list />
        <AbsoluteButton
          text={t("map")}
          icon="map-alt"
          onClick={() => setActive("map")}
          variant="primary"
        />
      </>
    );
  }

  return (
    <>
      <Components.map />
      <AbsoluteButton
        text={t("list")}
        icon="list-ul"
        onClick={() => setActive("list")}
        variant="secondary"
      />
    </>
  );
}
