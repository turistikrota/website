import { useTranslations } from "next-intl";
import Radio from "./Radio";

type ClearButtonProps = {
  onClear?: () => void;
};

type Props = ClearButtonProps & {
  className?: string;
  title: string;
  clearable?: boolean;
  onClear?: () => void;
};

const ClearButton: React.FC<ClearButtonProps> = ({ onClear }) => {
  const t = useTranslations("ux.button");
  return (
    <span
      className="text-sm text-primary hover:opacity-90 transition-colors"
      onClick={() => onClear && onClear()}
      role="button"
      title={t("clear-filter")}
      aria-label={t("clear-filter")}
    >
      {t("clear")}
    </span>
  );
};

function RadioGroup({
  children,
  title,
  clearable = false,
  onClear,
  className,
}: React.PropsWithChildren<Props>) {
  return (
    <div className={`${className ? className : ""}`}>
      <div className="flex justify-between items-center">
        <div className="text-lg font-bold">{title}</div>
        {clearable && <ClearButton onClear={onClear} />}
      </div>
      <div>{children}</div>
    </div>
  );
}

RadioGroup.Item = Radio;

export default RadioGroup;
