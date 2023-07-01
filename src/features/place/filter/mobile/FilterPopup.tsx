import { useTranslations } from "next-intl";
import { useState } from "react";
import { ContentProps } from "~/app/[locale]/places/components/ContentSwitcher";
import CitySelect from "~/components/city/CitySelect";
import Popup from "~/components/popup/Popup";
import { City } from "~/static/location/cities";

type Props = ContentProps & {
  onClose: () => void;
  open: boolean;
};

const FilterPopup: React.FC<Props> = ({ onClose, open, data, loading }) => {
  const [city, setCity] = useState<City | null>(null);
  const t = useTranslations("place.filter");
  return (
    <Popup onClose={onClose} open={open} size="3xl">
      <span className="text-2xl font-semibold">{t("title")}</span>
      <div className="mt-4">
        <CitySelect
          selectedCityName={city?.name ?? ""}
          onSelect={(city) => setCity(city)}
        />
      </div>
    </Popup>
  );
};

export default FilterPopup;
