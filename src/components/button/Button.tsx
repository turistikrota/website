import { PropsWithChildren } from "react";

type Variant =
  | "primary"
  | "secondary"
  | "success"
  | "error"
  | "warning"
  | "gray"
  | "gray-text"
  | "transparent";
type Size = "normal" | "xs" | "sm" | "md" | "lg";

type Props = {
  variant?: Variant;
  size?: Size;
  htmlType?: "button" | "submit" | "reset";
  block?: boolean;
  className?: string;
  title?: string;
  onClick?: () => void;
};

const variants: Record<Variant, string> = {
  primary:
    "bg-primary-400 hover:bg-primary-300 dark:bg-primary-500 dark:hover:bg-primary-400",
  secondary:
    "bg-secondary-400 hover:bg-secondary-300 dark:bg-secondary-500 dark:hover:bg-secondary-400",
  success:
    "bg-success-400 hover:bg-success-300 dark:bg-success-500 dark:hover:bg-success-400",
  error:
    "bg-error-400 hover:bg-error-300 dark:bg-error-500 dark:hover:bg-error-400",
  warning:
    "bg-warning-400 hover:bg-warning-300 dark:bg-warning-500 dark:hover:bg-warning-400",
  gray: "bg-gray-400 hover:bg-gray-300 dark:bg-gray-500 dark:hover:bg-gray-400",
  "gray-text":
    "text-gray-400 bg-transparent hover:bg-gray-300 dark:text-gray-500 dark:hover:bg-gray-400",
  transparent:
    "bg-transparent hover:bg-transparent dark:hover:bg-transparent shadow-none text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 focus:ring-0 focus:ring-offset-0 focus:ring-offset-transparent focus:ring-transparent",
};

const sizes: Record<Size, string> = {
  normal: "text-base",
  xs: "py-0.5 px-1 text-xs",
  sm: "py-1 px-2 text-sm",
  md: "py-2 px-4 text-base",
  lg: "py-3 px-6 text-lg",
};

export default function Button({
  children,
  size = "md",
  variant = "primary",
  htmlType = "button",
  block = true,
  className = "",
  onClick,
  ...props
}: PropsWithChildren<Props>) {
  return (
    <button
      type={htmlType}
      className={`block rounded-md font-medium text-white shadow focus:outline-none transition duration-200 ease-out hover:ease-in focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-900 ${
        variants[variant]
      } ${sizes[size]} ${block ? "w-full" : ""} ${className ? className : ""}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
