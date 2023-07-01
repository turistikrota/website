"use client";

import React, { PropsWithChildren, useState } from "react";

type Variant = "primary" | "secondary" | "success" | "error" | "warning";
type Size = "sm" | "md" | "lg";

interface RadioProps {
  id: string;
  name: string;
  value: string;
  checked?: boolean;
  variant?: Variant;
  size?: Size;
  onChange?: (value: string) => void;
}

const variants: Record<Variant, string> = {
  primary:
    "text-white checked:bg-primary-500 checked:border-primary-500 checked:before:bg-primary-500  before:bg-primary-500",
  secondary:
    "text-secondary-500 border-blue-gray-200 checked:border-secondary-500 checked:before:bg-secondary-500  before:bg-blue-gray-500",
  success:
    "text-success-500 border-blue-gray-200 checked:border-success-500 checked:before:bg-success-500  before:bg-blue-gray-500",
  error:
    "text-error-500 border-blue-gray-200 checked:border-error-500 checked:before:bg-error-500  before:bg-blue-gray-500",
  warning:
    "text-warning-500 border-blue-gray-200 checked:border-warning-500 checked:before:bg-warning-500  before:bg-blue-gray-500",
};

const svgVariants: Record<Variant, string> = {
  primary: "text-white",
  secondary: "text-secondary-500",
  success: "text-success-500",
  error: "text-error-500",
  warning: "text-warning-500",
};

const sizes: Record<Size, string> = {
  sm: "h-3 w-3",
  md: "h-5 w-5",
  lg: "h-7 w-7",
};

const svgSizes: Record<Size, string> = {
  sm: "h-2.5 w-2.5",
  md: "h-3.5 w-3.5",
  lg: "h-6 w-6",
};

const Radio: React.FC<PropsWithChildren<RadioProps>> = ({
  children,
  value,
  id,
  name,
  size = "md",
  variant = "primary",
  checked = false,
  onChange,
}) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = () => {
    setIsChecked(true);

    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div className="flex items-center">
      <label
        className="relative flex cursor-pointer items-center rounded-full p-3"
        htmlFor={id}
      >
        <input
          id={id}
          name={name}
          type="radio"
          className={`before:content[''] peer relative cursor-pointer appearance-none rounded-full border transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:opacity-0 before:transition-opacity hover:before:opacity-10 ${variants[variant]} ${sizes[size]}`}
          value={value}
          checked={isChecked}
          onChange={handleChange}
        />
        <div
          className={`pointer-events-none flex items-center justify-center absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 opacity-0 transition-opacity peer-checked:opacity-100 ${svgVariants[variant]}`}
        >
          <i className="bx bx-xs bx-check"></i>
        </div>
      </label>
      <label
        className="mt-px cursor-pointer select-none font-light text-gray-500 dark:text-gray-500"
        htmlFor={id}
      >
        {children}
      </label>
    </div>
  );
};

export default Radio;
