"use client";

type InputValue = string | number | readonly string[] | undefined;

type Size = "sm" | "md" | "lg";

type InputProps<Value extends InputValue = string> = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  value?: Value;
  onChange?: (value: Value) => void;
  onBlur?: () => void;
  autoComplete?: string;
  autoFocus?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  placeholder?: string;
  size?: Size;
};

const sizes: Record<Size, string> = {
  sm: "h-8",
  md: "h-10",
  lg: "h-12",
};

const labelSizes: Record<Size, string> = {
  sm: "peer-placeholder-shown:text-xs peer-placeholder-shown:leading-[2.5]",
  md: "peer-placeholder-shown:leading-[3.75]",
  lg: "peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.3]",
};

function Input<Value extends InputValue = string>({
  label,
  name,
  type,
  required,
  value,
  onChange,
  onBlur,
  size = "lg",
  ...props
}: InputProps<Value>) {
  return (
    <div className={`relative w-full min-w-[200px] ${sizes[size]}`}>
      <input
        className="peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-default px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline-0 transition-all  focus:border-2 focus:border-secondary-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
        placeholder=" "
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={(e) => {
          onChange?.(e.target.value as Value);
        }}
        onBlur={onBlur}
        {...props}
      />
      <label
        className={`before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-secondary-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-secondary-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-secondary-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 ${labelSizes[size]}`}
      >
        {label}
      </label>
    </div>
  );
}

function Textarea() {}

function Select() {}

//Input.Textarea = Textarea;
//Input.Select = Select;

export default Input;