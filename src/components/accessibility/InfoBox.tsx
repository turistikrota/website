import { useIsDesktop } from "~/hooks/dom/useWindowSize";
import Tooltip from "../tooltip/Tooltip";

const DesktopInfoBox: React.FC<React.PropsWithChildren> = ({ children }) => {
  const isDesktop = useIsDesktop();
  if (!isDesktop) return null;
  return (
    <Tooltip content={children} size="xl">
      <i className="bx bx-info-circle text-gray-500 text-xl ml-1"></i>
    </Tooltip>
  );
};

const MobileInfoBox: React.FC<React.PropsWithChildren> = ({ children }) => {
  const isDesktop = useIsDesktop();
  if (isDesktop) return null;
  return <p className="text-sm text-gray-500 mb-4">{children}</p>;
};

export { DesktopInfoBox, MobileInfoBox };