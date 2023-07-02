import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { MobileInfoBox } from "~/components/accessibility/InfoBox";
import Radio from "~/components/form/Radio";
import { useIsDesktop } from "~/hooks/dom/useWindowSize";
import { usePlaceFilter } from "../../place.filter";

const list = [1, 2, 3, 4, 5];

const lastIdx = list.length - 1;

export default function PlaceFilterReviewGroup() {
  const [minReview, setMinReview] = useState<number>(0);
  const t = useTranslations("place.filter.components.review");
  const { query, push } = usePlaceFilter();
  const isDesktop = useIsDesktop();

  useEffect(() => {
    if (!!query.filter.minReview && query.filter.minReview !== minReview) {
      setMinReview(query.filter.minReview);
    }
  }, [query]);

  const onSelect = (num: number) => {
    setMinReview(num);
    query.filter.minReview = num;
    push(query);
  };

  return (
    <>
      <MobileInfoBox>{t("description")}</MobileInfoBox>
      <div className="space-y-1 lg:space-y-0 mt-2">
        {list.map((num, idx) => (
          <Radio
            key={num}
            name="min-review"
            id={`min-review-${num}`}
            checked={minReview === num}
            reverse={!isDesktop}
            onChange={() => onSelect(num)}
            effect={isDesktop ? "hover" : undefined}
          >
            <i className="bx bx-sm bxs-star text-yellow-400 mr-2 lg:ml-1"></i>
            {t(lastIdx === idx ? "labels.last" : "labels.x", {
              star: num,
            })}
          </Radio>
        ))}
      </div>
    </>
  );
}
