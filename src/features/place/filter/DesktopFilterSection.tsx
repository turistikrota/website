import { useState } from "react";
import { ContentProps } from "~/app/[locale]/places/components/ContentSwitcher";
import CitySelect from "~/components/city/CitySelect";
import Input from "~/components/form/Input";
import Radio from "~/components/form/Radio";
import RadioGroup from "~/components/form/RadioGroup";
import SelectGroup from "~/components/form/SelectGroup";
import { City } from "~/static/location/cities";

export default function DesktopFilterSection({ data, loading }: ContentProps) {
  const [city, setCity] = useState<City | null>(null);
  return (
    <section className="col-span-12 lg:col-span-3 rounded-md border bg-second">
      <div className="border-b p-4 flex justify-between items-center">
        <h2 className="text-2xl font-bold">Filter</h2>
        <span className="text-sm text-gray-400">
          {data?.list.length} results
        </span>
      </div>

      <div className="p-4 flex flex-col gap-4">
        <CitySelect
          selectedCityName={city?.name ?? ""}
          onSelect={(city) => setCity(city)}
        />
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
