import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import debounce from "~/hooks/dom/useDebounce";
import { placeToQuery, usePlaceFilter } from "../../place.filter";
import { PlaceFilterRequest } from "../../place.types";
import ClearButton from "./ClearButton";

type Props = {
  title: string;
  filterKey: keyof PlaceFilterRequest | null;
  closeable?: boolean;
  resultCount: number;
  onClose: () => void;
};

type FilterComponent = React.FC<Props> & {
  TitleSection: typeof FilterTitleSection;
  Title: typeof FilterTitle;
  ClearButton: typeof ClearButton;
};

const FilterTitleSection: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return <div className="flex justify-between items-center">{children}</div>;
};
const FilterTitle: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <span className="text-2xl font-semibold">{children}</span>;
};

const FilterHead: FilterComponent = ({
  title,
  resultCount,
  filterKey,
  closeable = false,
  onClose,
}) => {
  const t = useTranslations("ux");
  const query = usePlaceFilter();
  const pathname = usePathname();
  const router = useRouter();

  const debouncedPush = debounce((url: string) => {
    router.push(url, { shallow: true });
    onClose();
  }, 500);

  const clear = () => {
    if (filterKey) {
      query.filter[filterKey] = undefined;
      const url = `${pathname}?${placeToQuery(query)}`;
      debouncedPush(url);
    }
  };
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          {closeable && (
            <span
              className="text-gray-600 dark:text-gray-300 mr-3 h-full flex items-center"
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
        {filterKey && !!query.filter[filterKey] && (
          <ClearButton onClear={() => clear()} />
        )}
      </div>
      {!closeable && (
        <span className="text-gray-500 text-sm dark:text-gray-400">
          {resultCount} {t("label.result")}
        </span>
      )}
    </>
  );
};

FilterHead.TitleSection = FilterTitleSection;
FilterHead.Title = FilterTitle;
FilterHead.ClearButton = ClearButton;

export default FilterHead;
