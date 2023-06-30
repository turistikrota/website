import { useState } from "react";
import CitySelect from "~/components/city/CitySelect";
import Select from "~/components/form/Select";
import { City } from "~/static/location/cities";
import { ContentProps } from "../ContentSwitcher";

export default function ListFilter({ data, loading }: ContentProps) {
  const [city, setCity] = useState<City | null>(null);

  return (
    <section className="col-span-12 lg:col-span-3 rounded-md border">
      <div className="border-b p-4 flex justify-between items-center">
        <h2 className="text-2xl font-bold">Filter</h2>
        <span className="text-sm text-gray-400">
          {data?.list.length} results
        </span>
      </div>

      <div className="p-4 flex flex-col gap-4">
        <Select label="Abc" name="test">
          <Select.DefaultOption />
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </Select>
        <CitySelect
          selectedCityName={city?.name ?? ""}
          onSelect={(city) => setCity(city)}
        />
      </div>
    </section>
  );
}
