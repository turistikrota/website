type AlertType =
  | "success"
  | "error"
  | "info"
  | "warning"
  | "primary"
  | "secondary";

type Props = BaseProps & {
  type: AlertType;
  onClose?: () => void;
  show?: boolean;
  showIcon?: boolean;
  closable?: boolean;
  className?: string;
};

type Alert = React.FC<Props> & {
  Title: React.FC<BaseProps>;
  Description: React.FC<BaseProps>;
};

type BaseProps = {
  children: React.ReactNode;
};

const Styles: Record<AlertType, string> = {
  success: "bg-green-100 border-green-500 text-green-700",
  error: "bg-red-100 border-red-500 text-red-700",
  info: "bg-blue-100 border-blue-500 text-blue-700",
  warning: "bg-yellow-100 border-yellow-500 text-yellow-700",
  primary: "bg-primary-100 border-primary-500 text-primary-700",
  secondary: "bg-secondary-100 border-secondary-500 text-secondary-700",
};

const Title: React.FC<BaseProps> = ({ children }) => {
  return <p className="font-bold text-left">{children}</p>;
};

const Description: React.FC<BaseProps> = ({ children }) => {
  return <p className="text-sm text-left">{children}</p>;
};

const Alert: Alert = ({
  children,
  onClose,
  closable = false,
  show = true,
  showIcon = false,
  type,
  className,
}) => {
  return (
    <>
      {show && (
        <div
          className={`flex items-center relative rounded border-l-4 p-4 ${Styles[type]} ${className}`}
          role="alert"
        >
          {showIcon && <i className="bx bx-info-circle text-2xl mr-4"></i>}
          <div>{children}</div>
          {closable && (
            <button
              className="ml-auto absolute right-1.5 top-0 bg-transparent border-0 text-2xl leading-none font-semibold outline-none focus:outline-none"
              onClick={onClose}
            >
              <span className="text-black opacity-70 h-6 w-6 text-2xl block outline-none focus:outline-none">
                ×
              </span>
            </button>
          )}
        </div>
      )}
    </>
  );
};
Alert.Title = Title;
Alert.Description = Description;

export default Alert;
