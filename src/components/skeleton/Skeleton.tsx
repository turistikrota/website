type SkeletonType = React.FC & {
  Block: React.FC<BlockProps>;
};

const Skeleton: SkeletonType = () => {
  return <></>;
};

type BlockSize =
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl";

type BlockProps = {
  size?: BlockSize;
};

const sizes: Record<BlockSize, string> = {
  xs: "h-8",
  sm: "h-10",
  md: "h-12",
  lg: "h-16",
  xl: "h-20",
  "2xl": "h-24",
  "3xl": "h-32",
  "4xl": "h-40",
  "5xl": "h-48",
  "6xl": "h-56",
};

const Block: React.FC<BlockProps> = ({ size = "md" }: BlockProps) => {
  return (
    <div
      role="status"
      className={`flex items-center justify-center max-w-sm bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700 ease-in-out ${sizes[size]}`}
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};

Skeleton.Block = Block;

export default Skeleton;
