"use client";
import Popup from "~/components/popup/Popup";

import { useState } from "react";
import { ContentProps } from "~/app/[locale]/places/components/ContentSwitcher";

type SwitchProps = {
  onFilterOpen: () => void;
  onSortOpen: () => void;
};

type PopupProps = {
  onClose: () => void;
  open: boolean;
};

const FilterPopupSwitcher: React.FC<SwitchProps> = ({
  onFilterOpen,
  onSortOpen,
}) => {
  return (
    <section className="w-full p-4 rounded-md relative bg-second grid grid-cols-2 col-span-12">
      <div className="flex items-center col-span-1 justify-center">
        <button
          className="flex items-center justify-center"
          onClick={() => onFilterOpen()}
        >
          <i className="bx bx-filter text-2xl text-gray-600 dark:text-gray-400" />
          <span className="ml-2 text-gray-600 dark:text-gray-400">Filter</span>
        </button>
      </div>
      <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0.5 h-6 bg-gray-200 dark:bg-gray-200 rounded-full" />
      <div className="flex items-center col-span-1 justify-center">
        <button
          className="flex items-center justify-center"
          onClick={() => onSortOpen()}
        >
          <i className="bx bx-sort text-2xl text-gray-600 dark:text-gray-400" />
          <span className="ml-2 text-gray-600 dark:text-gray-400">Sort</span>
        </button>
      </div>
    </section>
  );
};

const FilterPopup: React.FC<PopupProps> = ({ onClose, open }) => {
  return (
    <Popup onClose={onClose} open={open} size="3xl">
      filter contenttt
    </Popup>
  );
};
const SortPopup: React.FC<PopupProps> = ({ onClose, open }) => {
  return (
    <Popup onClose={onClose} open={open} size="2xl">
      sort contenttt
    </Popup>
  );
};

export default function MobileFilterSection({ data, loading }: ContentProps) {
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  const onClose = () => {};

  return (
    <>
      <FilterPopupSwitcher
        onFilterOpen={() => setFilterOpen(true)}
        onSortOpen={() => setSortOpen(true)}
      />
      <FilterPopup onClose={() => setFilterOpen(false)} open={filterOpen} />
      <SortPopup onClose={() => setSortOpen(false)} open={sortOpen} />
    </>
  );
}
