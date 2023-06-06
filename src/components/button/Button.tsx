import { PropsWithChildren } from "react";

type Variant = "primary" | "secondary" | "success" | "error" | "warning";
type Size = "sm" | "md" | "lg";

type Props = {
  variant?: Variant;
  size?: Size;
  htmlType?: "button" | "submit" | "reset";
  onClick?: () => void;
};

const variants: Record<Variant, string> = {
  primary: "bg-primary-400 hover:bg-primary-300",
  secondary: "bg-secondary-400 hover:bg-secondary-300",
  success: "bg-success-400 hover:bg-success-300",
  error: "bg-error-400 hover:bg-error-300",
  warning: "bg-warning-400 hover:bg-warning-300",
};

const sizes: Record<Size, string> = {
  sm: "py-1 px-2 text-sm",
  md: "py-2 px-4 text-base",
  lg: "py-3 px-6 text-lg",
};

export default function Button({
  children,
  size = "md",
  variant = "primary",
  htmlType = "button",
  onClick,
}: PropsWithChildren<Props>) {
  return (
    <button
      type={htmlType}
      className={`block w-full rounded-md font-medium text-white shadow focus:outline-none transition duration-150 ease-out hover:ease-in focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-900 ${variants[variant]} ${sizes[size]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
