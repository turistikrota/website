import { useTranslations } from "next-intl";
import { ContentProps } from "~/app/[locale]/places/components/ContentSwitcher";
import { usePlaceFilter } from "../place.filter";
import PlaceDesktopHead from "./desktop/PlaceDesktopHead";
import PlaceFilterSection from "./desktop/PlaceFilterSection";

export default function DesktopFilterSection({ data, loading }: ContentProps) {
  const t = useTranslations("place.filter");
  const { isFiltered, clean } = usePlaceFilter();
  return (
    <section className="col-span-12 lg:col-span-3 rounded-md border bg-second">
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
    </section>
  );
}
