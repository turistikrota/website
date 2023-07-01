export type BaseProps = {
  children: React.ReactNode;
};

export type Colors =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "vip";

export type LayoutProps = {
  params: {
    locale: string;
  };
};

export type Variant =
  | "primary"
  | "secondary"
  | "success"
  | "error"
  | "warning"
  | "gray"
  | "gray-text"
  | "transparent"
  | "opacity"
  | "vip";

export type Coordinates = [number, number];

export function isCoordinates(value: any): value is Coordinates {
  return (
    Array.isArray(value) &&
    value.length === 2 &&
    typeof value[0] === "number" &&
    typeof value[1] === "number"
  );
}
