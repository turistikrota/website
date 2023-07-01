import DesktopFilterSection from "~/features/place/filter/DesktopFilterSection";
import MobileFilterSection from "~/features/place/filter/MobileFilterSection";
import { useIsDesktop } from "~/hooks/dom/useWindowSize";
import { ContentProps } from "../ContentSwitcher";

export default function ListFilter({ data, loading }: ContentProps) {
  const isDesktop = useIsDesktop();

  return (
    <>
      {!isDesktop && <MobileFilterSection data={data} loading={loading} />}
      {isDesktop && <DesktopFilterSection data={data} loading={loading} />}
    </>
  );
}
