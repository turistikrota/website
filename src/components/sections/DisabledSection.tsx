type Variant = "error" | "gray" | "maintenance" | "premium" | "elite";

type Props = {
  blur?: boolean;
  rounded?: boolean;
  variant?: Variant;
  icon?: string;
};

type Color = {
  content: string;
  iconName: string;
  icon: string;
  title: string;
  text: string;
  stick: string;
};

const Variants: Record<Variant, Color> = {
  gray: {
    content: "bg-gray-200 dark:bg-gray-700",
    iconName: "lock-alt",
    icon: "text-gray-500",
    title: "text-gray-700 dark:text-gray-300",
    text: "text-gray-600 dark:text-gray-400",
    stick: "border-l-gray-300 dark:border-l-gray-600",
  },
  error: {
    content: "bg-red-200 dark:bg-red-700",
    iconName: "error",
    icon: "text-red-500",
    title: "text-red-500 dark:text-red-400",
    text: "text-red-500 dark:text-red-300",
    stick: "border-l-red-300 dark:border-l-red-600",
  },
  maintenance: {
    content: "bg-yellow-200 dark:bg-yellow-700",
    iconName: "error",
    icon: "text-yellow-500",
    title: "text-yellow-500 dark:text-yellow-400",
    text: "text-yellow-500 dark:text-yellow-300",
    stick: "border-l-yellow-300 dark:border-l-yellow-600",
  },
  premium: {
    content: "bg-blue-200 dark:bg-blue-700",
    iconName: "error",
    icon: "text-blue-500",
    title: "text-blue-500 dark:text-blue-400",
    text: "text-blue-500 dark:text-blue-300",
    stick: "border-l-blue-300 dark:border-l-blue-600",
  },
  elite: {
    content: "bg-purple-200 dark:bg-purple-700",
    iconName: "error",
    icon: "text-purple-500",
    title: "text-purple-500 dark:text-purple-400",
    text: "text-purple-500 dark:text-purple-300",
    stick: "border-l-purple-300 dark:border-l-purple-600",
  },
};

export default function DisabledSection({
  blur = true,
  rounded = true,
  variant = "elite",
  icon,
  children,
}: React.PropsWithChildren<Props>) {
  return (
    <div
      className="relative w-full h-full text-center border-2 rounded-md"
      role="alert"
      title={decodeURI("avbsadsa\n with a very long title")}
      aria-label="avbsadsa"
    >
      <div className={`w-full ${blur ? "blur-xxs" : ""}`}>{children}</div>
      <span
        className={`
      absolute top-0 left-0 flex items-center justify-center w-full h-full bg-opacity-20 dark:bg-opacity-20 gap-5
      ${rounded ? "rounded-md" : ""}
        ${Variants[variant].content}
      `}
      >
        <i
          className={`bx bx-lg bx-${icon ?? Variants[variant].iconName} ${
            Variants[variant].icon
          }`}
        ></i>
        <div
          className={`flex flex-col border-l pl-6 ${Variants[variant].stick}`}
        >
          <div
            className={`text-sm text-left font-semibold ${Variants[variant].title}`}
          >
            Disabled
          </div>
          <p className={`text-xs text-left ${Variants[variant].text}`}>
            This section is disabled
          </p>
        </div>
      </span>
    </div>
  );
}
