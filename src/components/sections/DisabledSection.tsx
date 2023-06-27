type Variant = "error" | "gray" | "maintenance";

type Props = {
  blur?: boolean;
  rounded?: boolean;
  variant?: Variant;
  icon?: string;
  title: string;
  description: string;
};

type Color = {
  content: string;
  iconName: string;
  icon: string;
  title: string;
  text: string;
  stick: string;
  overlay: string;
};

const Variants: Record<Variant, Color> = {
  gray: {
    content: "bg-gray-200 dark:bg-gray-700",
    iconName: "lock-alt",
    icon: "text-gray-500",
    title: "text-gray-700 dark:text-gray-300",
    text: "text-gray-600 dark:text-gray-400",
    stick: "border-l-gray-300 dark:border-l-gray-600",
    overlay: "bg-gray-200 dark:bg-gray-700",
  },
  error: {
    content: "bg-red-200 dark:bg-red-700",
    iconName: "error",
    icon: "text-red-700 dark:text-red-300",
    title: "text-red-700 dark:text-red-200",
    text: "text-red-600 dark:text-red-300",
    stick: "border-l-red-600 dark:border-l-red-400",
    overlay:
      "bg-red-100 border border-red-700 bg-opacity-60 dark:bg-red-900 dark:border-red-400 dark:bg-opacity-70",
  },
  maintenance: {
    content: "bg-yellow-200 dark:bg-yellow-700",
    iconName: "traffic-cone",
    icon: "text-yellow-700 dark:text-yellow-300",
    title: "text-yellow-700 dark:text-yellow-200",
    text: "text-yellow-600 dark:text-yellow-300",
    stick: "border-l-yellow-600 dark:border-l-yellow-400",
    overlay:
      "bg-yellow-100 border border-yellow-700 bg-opacity-60 dark:bg-yellow-900 dark:border-yellow-400 dark:bg-opacity-70",
  },
};

export default function DisabledSection({
  blur = true,
  rounded = true,
  variant = "gray",
  icon,
  title,
  description,
  children,
}: React.PropsWithChildren<Props>) {
  return (
    <>
      <div className="relative w-full h-full text-center border-2 rounded-md">
        <div className={`w-full ${blur ? "blur-xxs" : ""}`}>{children}</div>
        <span
          className={`
      absolute top-0 left-0 w-full flex items-center justify-center h-full bg-opacity-20 dark:bg-opacity-20 
      ${rounded ? "rounded-md" : ""}
        ${Variants[variant].content}
      `}
        >
          <div
            className={` flex items-center justify-center p-2 gap-2 rounded-md ${Variants[variant].overlay}`}
          >
            <i
              className={`bx bx-lg bx-${icon ?? Variants[variant].iconName} ${
                Variants[variant].icon
              }`}
            ></i>
            <div
              className={`flex flex-col border-l pl-2 ${Variants[variant].stick}`}
            >
              <div
                className={`text-sm text-left font-semibold ${Variants[variant].title}`}
              >
                {title}
              </div>
              <p className={`text-xs text-left ${Variants[variant].text}`}>
                {description}
              </p>
            </div>
          </div>
        </span>
      </div>
    </>
  );
}
