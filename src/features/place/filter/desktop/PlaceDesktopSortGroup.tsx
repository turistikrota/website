import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import Dropdown from "~/components/dropdown/Dropdown";
import { usePlaceFilter, usePlaceSort } from "../../place.filter";
import { Order, Sort } from "../../place.types";

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
    <Dropdown>
      <Dropdown.Button>{currentSort}</Dropdown.Button>
      <Dropdown.Overlay>
        {sorts.map((sort) => (
          <Dropdown.OverlayItem key={sort} onClick={() => onSelect(sort)}>
            {sort}
          </Dropdown.OverlayItem>
        ))}
      </Dropdown.Overlay>
    </Dropdown>
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
    <Dropdown>
      <Dropdown.Button>{currentOrder}</Dropdown.Button>
      <Dropdown.Overlay>
        {orders.map((sort) => (
          <Dropdown.OverlayItem key={sort} onClick={() => onSelect(sort)}>
            {sort}
          </Dropdown.OverlayItem>
        ))}
      </Dropdown.Overlay>
    </Dropdown>
  );
};

export default function PlaceDesktopSortGroup() {
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
    <div className="flex gap-3">
      <SortSection selected={query.filter.sort} onSelect={onSortSelect} />
      <OrderSection selected={query.filter.order} onSelect={onOrderSelect} />
    </div>
  );
}
