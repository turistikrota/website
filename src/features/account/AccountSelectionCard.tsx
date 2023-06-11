"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { PropsWithChildren, useState } from "react";
import { Config } from "~/config";

type AccountSelectionProps = {
  onSelect?: () => void;
};

type AccountSelectionCardType = React.FC<
  PropsWithChildren<AccountSelectionProps>
> & {
  CompletedRangeLine: typeof CompletedRangeLine;
  VerifiedBadge: typeof VerifiedBadge;
  Image: typeof AImage;
  Content: typeof Content;
  FullName: typeof FullName;
  Avatar: typeof Avatar;
  Text: typeof Text;
};

const CompletedRangeLine = ({ completedRate }: { completedRate: number }) => {
  const t = useTranslations("account.select.tool");
  return (
    <div
      className="absolute bottom-0 left-0 w-full h-1 bg-green-50 dark:bg-green-950 bg-opacity-50 rounded-b-md"
      role="progressbar"
      aria-valuenow={completedRate}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={t("completedRate", { rate: completedRate })}
      title={t("completedRate", { rate: completedRate })}
    >
      <div
        className={`h-full bg-green-400 dark:bg-green-500 rounded-b-md`}
        style={{ width: `${completedRate}%` }}
      ></div>
    </div>
  );
};

const VerifiedBadge = () => {
  const t = useTranslations("general");
  return (
    <div
      className="absolute top-0 right-0 flex items-center justify-center w-6 h-6 rounded-full"
      role="alert"
      aria-label={t("verified")}
      title={t("verified_alt")}
    >
      <i className="bx bx-md bxs-badge-check text-primary-500"></i>
    </div>
  );
};

const AImage = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="col-span-1 bg-default flex items-center justify-center p-4 rounded-tl-md rounded-bl-md">
      {children}
    </div>
  );
};

type AvatarProps = {
  src: string;
  alt: string;
};

const Avatar = ({ src, alt }: AvatarProps) => {
  const [avatar, setAvatar] = useState<string>(src);
  return (
    <Image
      src={avatar}
      alt={alt}
      width={70}
      height={70}
      onError={() => setAvatar(Config.cdn.notFound)}
    />
  );
};

const Content = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="col-span-3 bg-third dark:bg-header flex flex-col justify-center p-4 rounded-tr-md rounded-br-md">
      {children}
    </div>
  );
};

const Text = ({ children }: React.PropsWithChildren) => {
  return (
    <span className="text-md font-semibold text-gray-900 dark:text-white">
      {children}
    </span>
  );
};

const FullName = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="text-sm text-gray-500 line-clamp-1 dark:text-gray-500">
      {children}
    </div>
  );
};

const Card: AccountSelectionCardType = ({ children, onSelect }) => {
  return (
    <div
      className="grid grid-cols-4 relative cursor-pointer ease-in duration-200"
      onClick={onSelect}
    >
      {children}
    </div>
  );
};

Card.CompletedRangeLine = CompletedRangeLine;
Card.VerifiedBadge = VerifiedBadge;
Card.Image = AImage;
Card.Content = Content;
Card.FullName = FullName;
Card.Avatar = Avatar;
Card.Text = Text;

export default Card;
