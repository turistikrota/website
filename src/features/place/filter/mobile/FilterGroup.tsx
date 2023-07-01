import { useTranslations } from "next-intl";

type ClearButtonProps = {
  onClear?: () => void;
};

type Props = ClearButtonProps & {
  title: string;
  values: string;
  filtered?: boolean;
  onClick: () => void;
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

const FilterGroup: React.FC<Props> = ({
  title,
  values,
  filtered = true,
  onClick,
  onClear,
}) => {
  return (
    <div className="border-b pb-4">
      <div className="flex justify-between items-center" onClick={onClick}>
        <div className="font-bold text-lg text-gray-700 dark:text-gray-200">
          {title}
        </div>
        {filtered && <ClearButton onClear={onClear} />}
      </div>
      <div className={`text-secondary text-sm`}>{values}</div>
    </div>
  );
};

export default FilterGroup;
