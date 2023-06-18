"use client";

type Variant = "primary" | "secondary" | "success" | "error" | "warning";
type Size = "sm" | "md" | "lg";

type Props = {
  children: React.ReactNode;
  name: string;
  required?: boolean;
  value?: boolean;
  id?: string;
  error?: string;
  variant?: Variant;
  size?: Size;
  onChange?: (value: boolean) => void;
  onBlur?: (value: boolean) => void;
};

const variants: Record<Variant, string> = {
  primary:
    "checked:border-primary-500 checked:bg-primary-500 checked:before:bg-primary-500",
  secondary:
    "checked:border-secondary-500 checked:bg-secondary-500 checked:before:bg-secondary-500",
  success:
    "checked:border-success-500 checked:bg-success-500 checked:before:bg-success-500",
  error:
    "checked:border-error-500 checked:bg-error-500 checked:before:bg-error-500",
  warning:
    "checked:border-warning-500 checked:bg-warning-500 checked:before:bg-warning-500",
};

const sizes: Record<Size, string> = {
  sm: "h-3 w-3",
  md: "h-5 w-5",
  lg: "h-7 w-7",
};

const svgSizes: Record<Size, string> = {
  sm: "h-2.5 w-2.5",
  md: "h-4 w-4",
  lg: "h-6 w-6",
};

export default function Checkbox({
  children,
  name,
  required,
  value,
  onChange,
  onBlur,
  error,
  size = "md",
  variant = "primary",
  ...props
}: Props) {
  return (
    <div>
      <div className="flex items-center">
        <label
          className="relative flex cursor-pointer items-center rounded-full mr-3"
          htmlFor={name}
          data-ripple-dark="true"
        >
          <input
            id={name}
            name={name}
            type="checkbox"
            className={`before:content[''] peer relative cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity  hover:before:opacity-10 ${variants[variant]} ${sizes[size]}`}
            required={required}
            value={value ? "on" : "off"}
            onChange={(e) => onChange?.(e.target.checked)}
            onBlur={(e) => onBlur?.(e.target.checked)}
            {...props}
          />
          <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`${svgSizes[size]}`}
              viewBox="0 0 20 20"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="1"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </label>
        <label
          className="mt-px cursor-pointer select-none font-light text-gray-800 dark:text-gray-400"
          htmlFor={name}
        >
          {children}
        </label>
      </div>
      {error && <small className="text-xs text-red-500">{error}</small>}
    </div>
  );
}
