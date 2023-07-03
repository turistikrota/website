import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import RadioGroup from "~/components/form/RadioGroup";
import Popup from "~/components/popup/Popup";
import { usePlaceFilter, usePlaceSort } from "../../place.filter";
import { Order, Sort } from "../../place.types";
import FilterHead from "./FilterPopupHead";

type Props = {
  onClose: () => void;
  open: boolean;
};

type SortSectionProps = {
  selected?: Sort;
  onSelect: (sort: Sort) => void;
};

type OrderSectionProps = {
  selected?: Order;
  onSelect: (order: Order) => void;
};

const SortSection: React.FC<SortSectionProps> = ({ selected, onSelect }) => {
  const { defaultSort, sorts } = usePlaceSort();
  const [currentSort, setCurrentSort] = useState<Sort>(defaultSort);
  const t = useTranslations("place.sort.mobile.sort-by");

  useEffect(() => {
    setCurrentSort(selected ?? defaultSort);
  }, [selected]);

  return (
    <RadioGroup title={t("title")}>
      {sorts.map((sort) => (
        <RadioGroup.Item
          key={sort}
          id={sort}
          name="sort-by"
          reverse
          checked={currentSort === sort}
          onChange={() => onSelect(sort)}
        >
          {t(sort)}
        </RadioGroup.Item>
      ))}
    </RadioGroup>
  );
};

const OrderSection: React.FC<OrderSectionProps> = ({ selected, onSelect }) => {
  const { defaultOrder, orders } = usePlaceSort();
  const [currentOrder, setCurrentOrder] = useState<Order>(defaultOrder);
  const t = useTranslations("place.sort.mobile.order-by");

  useEffect(() => {
    setCurrentOrder(selected ?? defaultOrder);
  }, [selected]);

  return (
    <RadioGroup title={t("title")}>
      {orders.map((order, idx) => (
        <RadioGroup.Item
          key={idx}
          id={`${order}-${idx}`}
          name="order"
          reverse
          checked={currentOrder === order}
          onChange={() => onSelect(order)}
        >
          {t(order)}
        </RadioGroup.Item>
      ))}
    </RadioGroup>
  );
};

const SortPopup: React.FC<Props> = ({ onClose, open }) => {
  const { defaultOrder, defaultSort } = usePlaceSort();
  const t = useTranslations("place.sort.mobile");
  const [isDefault, setIsDefault] = useState<boolean>(true);
  const { query, push } = usePlaceFilter();

  useEffect(() => {
    const isSortDefault = query.filter.sort
      ? query.filter.sort === defaultSort
      : true;
    const isOrderDefault = query.filter.order
      ? query.filter.order === defaultOrder
      : true;
    setIsDefault(isSortDefault && isOrderDefault);
  }, [query]);

  const clear = () => {
    query.filter.sort = undefined;
    query.filter.order = undefined;
    push(query);
  };

  const onSortSelect = (sort: Sort) => {
    query.filter.sort = sort;
    push(query);
  };

  const onOrderSelect = (order: Order) => {
    query.filter.order = order;
    push(query);
  };

  return (
    <Popup
      onClose={onClose}
      open={open}
      size="2xl"
      head={
        <FilterHead.TitleSection>
          <FilterHead.Title>{t("title")}</FilterHead.Title>
          {!isDefault && <FilterHead.ClearButton onClear={() => clear()} />}
        </FilterHead.TitleSection>
      }
    >
      <SortSection selected={query.filter.sort} onSelect={onSortSelect} />
      <OrderSection selected={query.filter.order} onSelect={onOrderSelect} />
    </Popup>
  );
};

export default SortPopup;
