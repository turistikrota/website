import DesktopFilterSection from "~/components/filter/desktop/DesktopFilterSection";
import MobileFilterSection from "~/components/filter/mobile/MobileFilterSection";
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
