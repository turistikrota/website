import { useTranslations } from "next-intl";
import RadioGroup from "~/components/form/RadioGroup";
import Popup from "~/components/popup/Popup";

type Props = {
  onClose: () => void;
  open: boolean;
};

const SortPopup: React.FC<Props> = ({ onClose, open }) => {
  const t = useTranslations("place.sort.mobile");
  return (
    <Popup onClose={onClose} open={open} size="2xl">
      <span className="text-2xl font-semibold">{t("title")}</span>
      <div className="mt-4">
        <RadioGroup title={t("sort-by.title")}>
          <RadioGroup.Item id="most-popular" name="sort-by" value="">
            {t("sort-by.most-popular")}
          </RadioGroup.Item>
          <RadioGroup.Item id="rating" name="sort-by" value="">
            {t("sort-by.rate")}
          </RadioGroup.Item>
          <RadioGroup.Item id="distance" name="sort-by" value="">
            {t("sort-by.distance")}
          </RadioGroup.Item>
        </RadioGroup>
        <RadioGroup title={t("order-by.title")}>
          <RadioGroup.Item id="asc" name="order" value="">
            {t("order-by.asc")}
          </RadioGroup.Item>
          <RadioGroup.Item id="desc" name="order" value="">
            {t("order-by.desc")}
          </RadioGroup.Item>
        </RadioGroup>
      </div>
    </Popup>
  );
};

export default SortPopup;
