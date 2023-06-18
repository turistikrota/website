import { Size, TextSize } from "~/types/size";

type UserCodeProps = {
  size?: Size;
};

export default function UserCode({
  children,
  size = "sm",
}: React.PropsWithChildren<UserCodeProps>) {
  return (
    <span className={`text-gray-500 dark:text-gray-400 ${TextSize[size]}`}>
      {" "}
      #{children}
    </span>
  );
}
