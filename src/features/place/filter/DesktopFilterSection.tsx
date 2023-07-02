import { useTranslations } from "next-intl";
import { ContentProps } from "~/app/[locale]/places/components/ContentSwitcher";
import { useHeaderFixed } from "~/hooks/dom/useHeaderFixed";
import { usePlaceFilter } from "../place.filter";
import PlaceDesktopHead from "./desktop/PlaceDesktopHead";
import PlaceFilterSection from "./desktop/PlaceFilterSection";

export default function DesktopFilterSection({ data, loading }: ContentProps) {
  const headerFixed = useHeaderFixed();
  const t = useTranslations("place.filter");
  const { isFiltered, clean } = usePlaceFilter();

  return (
    <>
      <section
        className={`w-[300px] min-w-[300px] max-w-[300px] min-h-[700px] `}
      >
        <div
          className={`rounded-md border bg-second overflow-x-hidden overflow-y-auto sticky transition-top duration-200 ${
            headerFixed ? "top-[80px] h-sticky-bar" : "top-0 h-screen"
          }`}
        >
          <div className="border-b p-4 flex justify-between items-center">
            <span className="text-gray-400">
              {t("results", {
                count: data?.filteredTotal || 0,
              })}
            </span>
            {isFiltered && (
              <PlaceDesktopHead.Clear
                text={t("clear-filter")}
                onClear={() => clean()}
              />
            )}
          </div>

          <div className="flex flex-col gap-4">
            <PlaceFilterSection />
          </div>
        </div>
      </section>
    </>
  );
}
