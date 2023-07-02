import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import SelectGroup from "~/components/form/SelectGroup";
import { usePlaceFilter } from "../../place.filter";
import { Type } from "../../place.types";

const types = Object.values(Type);

export default function PlaceFilterTypeGroup() {
  const [selected, setSelected] = useState<Type[]>([]);
  const t = useTranslations("place.filter.components.types");
  const { query, push } = usePlaceFilter();

  useEffect(() => {
    if (
      !!query.filter.types &&
      !query.filter.types.every((name) => selected.find((f) => f === name))
    ) {
      setSelected([...query.filter.types]);
    }
  }, [query]);

  const handleChange = (type: Type) => {
    let newList: Type[] = [];
    if (selected.includes(type)) {
      newList = selected.filter((item) => item !== type);
    } else {
      newList = [...selected, type];
    }
    setSelected(newList);
    query.filter.types = newList;
    push(query);
  };

  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-500 mb-4">{t("description")}</p>
      {types.map((type) => (
        <SelectGroup.Item
          key={type}
          id={type}
          name="types"
          value={selected.includes(type)}
          onChange={() => handleChange(type)}
          reversed
        >
          {t(`translation.${type}`)}
        </SelectGroup.Item>
      ))}
    </div>
  );
}
