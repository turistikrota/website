import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import Input from "~/components/form/Input";
import { usePlaceFilter } from "../../place.filter";

export default function PlaceFilterQueryGroup() {
  const [word, setWord] = useState<string>("");
  const t = useTranslations("place.filter.components.query");
  const { query, push } = usePlaceFilter();

  useEffect(() => {
    if (!!query.filter.query && query.filter.query !== word) {
      setWord(query.filter.query);
    }
  }, [query]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWord(e.target.value);
    query.filter.query = e.target.value;
    push(query);
  };

  return (
    <>
      <p className="text-sm text-gray-500 mb-4">{t("description")}</p>
      <Input
        label={t("label")}
        name="word"
        value={word}
        onChange={handleChange}
      />
    </>
  );
}
