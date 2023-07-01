import { useTranslations } from "next-intl";

type Props = {
  title: string;
  closeable?: boolean;
  resultCount: number;
  onClose: () => void;
};

const FilterHead: React.FC<Props> = ({
  title,
  resultCount,
  closeable = false,
  onClose,
}) => {
  const t = useTranslations("ux");
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        {closeable && (
          <span
            className="text-gray-600 dark:text-gray-300 mr-3 flex items-center"
            onClick={onClose}
            role="button"
            title={t("button.close")}
            aria-label={t("button.close")}
          >
            <i className="bx bx-sm bx-arrow-back"></i>
          </span>
        )}
        <span className="text-2xl font-semibold">{title}</span>
      </div>
      {!closeable && (
        <span className="text-gray-600 dark:text-gray-300">
          {resultCount} {t("label.result")}
        </span>
      )}
    </div>
  );
};

export default FilterHead;
