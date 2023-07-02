import ContentLoader from "~/components/loading/ContentLoader";
import DesktopFilterSection from "~/features/place/filter/DesktopFilterSection";
import MobileFilterSection from "~/features/place/filter/MobileFilterSection";
import { useIsDesktop, useWindowWidth } from "~/hooks/dom/useWindowSize";
import { ContentProps } from "../ContentSwitcher";

export default function ListFilter({ data, loading }: ContentProps) {
  const isWidthExist = useWindowWidth();
  const isDesktop = useIsDesktop();

  if (!isWidthExist) return <ContentLoader />;

  return (
    <>
      {!isDesktop && <MobileFilterSection data={data} loading={loading} />}
      {isDesktop && <DesktopFilterSection data={data} loading={loading} />}
    </>
  );
}
