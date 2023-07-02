import { useTranslations } from "next-intl";
import { ContentProps } from "~/app/[locale]/places/components/ContentSwitcher";
import Input from "~/components/form/Input";
import Radio from "~/components/form/Radio";
import RadioGroup from "~/components/form/RadioGroup";
import SelectGroup from "~/components/form/SelectGroup";
import { usePlaceFilter } from "../place.filter";
import PlaceDesktopHead from "./desktop/PlaceDesktopHead";
import PlaceFilterSection from "./desktop/PlaceFilterSection";

export default function DesktopFilterSection({ data, loading }: ContentProps) {
  const t = useTranslations("place.filter");
  const { isFiltered, clean } = usePlaceFilter();
  return (
    <section className="col-span-12 lg:col-span-3 rounded-md border bg-second">
      <div className="border-b p-4">
        <span className="text-sm text-gray-400">
          {t("results", {
            count: data?.filteredTotal || 0,
          })}
        </span>
      </div>
      <div className="border-b p-4 flex justify-between items-center">
        <h2 className="text-2xl font-bold">{t("title")}</h2>
        {isFiltered && (
          <PlaceDesktopHead.Clear
            text={t("clear-filter")}
            onClear={() => clean()}
          />
        )}
      </div>

      <div className="flex flex-col gap-4">
        <PlaceFilterSection />
        <SelectGroup
          title="Seç bir şeyler"
          filtered
          filter={
            <Input
              label="Search"
              name="search"
              size="md"
              suffix={<i className="bx bx-search-alt-2"></i>}
            />
          }
        >
          <SelectGroup.Item name="abc">bir şeyler</SelectGroup.Item>
        </SelectGroup>
        <RadioGroup title="Seç bir şey">
          <Radio id="keyfim" name="keyfim">
            ahahahah
          </Radio>
          <Radio id="keyfim1" name="keyfim">
            ahahahah1111
          </Radio>
          <Radio id="keyfim2" name="keyfim">
            ahahahah2222
          </Radio>
        </RadioGroup>
      </div>
    </section>
  );
}
