import { useTranslations } from "next-intl";

type Props = {
  onClear?: () => void;
};

const ClearButton: React.FC<Props> = ({ onClear }) => {
  const t = useTranslations("ux.button");
  return (
    <span
      className=" text-primary hover:opacity-90 transition-colors"
      onClick={() => onClear && onClear()}
      role="button"
      title={t("clear-filter")}
      aria-label={t("clear-filter")}
    >
      {t("clear")}
    </span>
  );
};

export default ClearButton;
