import { useTranslations } from "next-intl";

type ShowHideButtonProps = {
  show: boolean;
  onClick: () => void;
};

export default function ShowHideButton({ show, onClick }: ShowHideButtonProps) {
  const t = useTranslations("ux.button");
  return (
    <button
      type="button"
      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-gray-400"
      onClick={onClick}
      aria-label={show ? t("hide") : t("show")}
      title={show ? t("hide") : t("show")}
    >
      <i className={show ? "bx bx-show" : "bx bx-hide"}></i>
    </button>
  );
}
