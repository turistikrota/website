import { Size, TextSize } from "~/types/size";

type UserNameProps = {
  size?: Size;
};

export default function UserName({
  children,
  size = "md",
}: React.PropsWithChildren<UserNameProps>) {
  return (
    <div
      className={`font-semibold text-gray-900 dark:text-white ${TextSize[size]}`}
    >
      {children}
    </div>
  );
}
