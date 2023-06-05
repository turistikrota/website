import { PropsWithChildren } from "react";

type Props = {
  value: boolean;
};

export default function Condition({
  value,
  children,
}: PropsWithChildren<Props>) {
  return value ? <>{children}</> : null;
}
