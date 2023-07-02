import ClearButton from "../mobile/ClearButton";

type PlaceDesktopHeadType = React.FC<React.PropsWithChildren> & {
  Title: typeof Title;
  Clear: typeof ClearButton;
};

const Title: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="font-bold text-lg text-gray-700 dark:text-gray-200">
      {children}
    </div>
  );
};

const PlaceDesktopHead: PlaceDesktopHeadType = ({ children }) => {
  return (
    <div className="flex justify-between items-center mb-4">{children}</div>
  );
};

PlaceDesktopHead.Title = Title;
PlaceDesktopHead.Clear = ClearButton;

export default PlaceDesktopHead;
