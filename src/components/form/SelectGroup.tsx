import { useTranslations } from "next-intl";
import Checkbox from "./Checkbox";

type ClearButtonProps = {
  onClear?: () => void;
};

type Props = ClearButtonProps & {
  className?: string;
  title: string;
  filtered?: boolean;
  filter?: React.ReactNode;
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

function SelectGroup({
  children,
  title,
  filtered = false,
  filter,
  onClear,
  className,
}: React.PropsWithChildren<Props>) {
  return (
    <div className={`${className ? className : ""}`}>
      <div className="flex justify-between items-center">
        <div className="font-bold text-lg text-gray-700 dark:text-gray-200">
          {title}
        </div>
        {filtered && <ClearButton onClear={onClear} />}
      </div>
      {filter && <div className="my-4 lg:my-2">{filter}</div>}
      <div
        className={`max-h-60 overflow-y-auto space-y-3 lg:space-y-2 ${
          !filtered ? "mt-2 lg:mt-2" : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
}

SelectGroup.Item = Checkbox;
export default SelectGroup;