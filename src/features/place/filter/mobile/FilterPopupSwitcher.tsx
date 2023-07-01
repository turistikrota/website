import { useTranslations } from "next-intl";

type Props = {
  onFilterOpen: () => void;
  onSortOpen: () => void;
};

const FilterPopupSwitcher: React.FC<Props> = ({ onFilterOpen, onSortOpen }) => {
  const t = useTranslations("place.switch");
  return (
    <section className="w-full p-4 rounded-md relative bg-second grid grid-cols-2 col-span-12">
      <div className="flex items-center col-span-1 justify-center">
        <button
          className="flex items-center justify-center"
          onClick={() => onFilterOpen()}
          aria-label={t("filter")}
          title={t("filter")}
        >
          <i className="bx bx-filter text-2xl text-gray-600 dark:text-gray-400" />
          <span className="ml-2 text-gray-600 dark:text-gray-400">
            {t("filter")}
          </span>
        </button>
      </div>
      <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0.5 h-6 bg-gray-200 dark:bg-gray-200 rounded-full" />
      <div className="flex items-center col-span-1 justify-center">
        <button
          className="flex items-center justify-center"
          onClick={() => onSortOpen()}
          aria-label={t("sort")}
          title={t("sort")}
        >
          <i className="bx bx-sort text-2xl text-gray-600 dark:text-gray-400" />
          <span className="ml-2 text-gray-600 dark:text-gray-400">
            {t("sort")}
          </span>
        </button>
      </div>
    </section>
  );
};

export default FilterPopupSwitcher;
