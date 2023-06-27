type Props = {
  enabled?: boolean;
};

export default function EliteSection({
  enabled = false,
  children,
}: React.PropsWithChildren<Props>) {
  return (
    <div className="relative w-full h-full text-center border-2 rounded-md"></div>
  );
}
