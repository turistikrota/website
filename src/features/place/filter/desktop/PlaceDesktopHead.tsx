import { useTranslations } from "next-intl";

type ClearButtonProps = {
  onClear?: () => void;
};

type PlaceDesktopHeadType = React.FC<React.PropsWithChildren> & {
  Title: typeof Title;
  Clear: typeof Clear;
};

const Title: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="font-bold text-lg text-gray-700 dark:text-gray-200">
      {children}
    </div>
  );
};
const Clear: React.FC<ClearButtonProps> = ({ onClear }) => {
  const t = useTranslations("ux.button");
  return (
    <span
      className="text-sm text-primary hover:opacity-90 transition-colors"
      onClick={() => onClear && onClear()}
      role="button"
      title={t("clear-filter")}
      aria-label={t("clear-filter")}
    >
      {t("clear")}
    </span>
  );
};

const PlaceDesktopHead: PlaceDesktopHeadType = ({ children }) => {
  return (
    <div className="flex justify-between items-center mb-4">{children}</div>
  );
};

PlaceDesktopHead.Title = Title;
PlaceDesktopHead.Clear = Clear;

export default PlaceDesktopHead;
