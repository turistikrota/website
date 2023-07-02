"use client";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Button from "~/components/button/Button";
import { useListMutation } from "~/features/place/place.api";
import { usePlaceFilter } from "~/features/place/place.filter";
import {
  PlaceListItem,
  isPlaceListResponse,
} from "~/features/place/place.types";
import debounce from "~/hooks/dom/useDebounce";
import { Variant } from "~/types/base";
import { ListResponse } from "~/types/response/response.types";

type ContentType = "list" | "map";

export type ContentProps = {
  loading: boolean;
  data: ListResponse<PlaceListItem> | null;
};

const DynamicList = dynamic(() => import("./list/ListContent"));
const DynamicMap = dynamic(() => import("./map/MapContent"), { ssr: false });

type ButtonProps = {
  text: string;
  icon: string;
  onClick: () => void;
  variant: Variant;
};

const FixedButton: React.FC<ButtonProps> = ({
  text,
  variant,
  icon,
  onClick,
}) => {
  return (
    <div className="fixed bottom-10 right-1/2 transform translate-x-1/2 z-500">
      <Button
        onClick={() => onClick()}
        className="hover:scale-103 hover:shadow-lg flex items-center justify-center gap-2 text-lg"
        variant={variant}
        title={text}
      >
        <i className={`bx bx-sm bx-${icon}`} />
        {text}
      </Button>
    </div>
  );
};

export default function ContentSwitcher() {
  const t = useTranslations("content-switch");
  const { query } = usePlaceFilter();
  const [fetchData, { data, isLoading }] = useListMutation({});
  const [active, setActive] = useState<ContentType>("list");
  const debouncedFilter = debounce((filter) => {
    fetchData(filter);
  }, 500);

  useEffect(() => {
    debouncedFilter(query);
  }, [query]);

  if (active === "list") {
    return (
      <>
        <DynamicList
          data={isPlaceListResponse(data) ? data : null}
          loading={isLoading}
        />
        <FixedButton
          text={t("map")}
          icon="map-alt"
          onClick={() => setActive("map")}
          variant="primary"
        />
      </>
    );
  }

  return (
    <>
      <DynamicMap
        data={isPlaceListResponse(data) ? data : null}
        loading={isLoading}
        position={[41.0082, 28.9784]}
      />
      <FixedButton
        text={t("list")}
        icon="list-ul"
        onClick={() => setActive("list")}
        variant="secondary"
      />
    </>
  );
}
