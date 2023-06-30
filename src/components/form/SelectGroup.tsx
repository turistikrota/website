import Checkbox from "./Checkbox";

type Props = {
  className?: string;
  title: string;
};

const Item = ({ children }: React.PropsWithChildren) => {
  return <Checkbox name="">{children}</Checkbox>;
};

function SelectGroup({
  children,
  title,
  className,
}: React.PropsWithChildren<Props>) {
  return (
    <div className={`${className ? className : ""}`}>
      <div className="flex justify-between items-center">
        <div className="text-lg font-bold">{title}</div>
        <span className="text-sm text-gray-400">clear</span>
      </div>
      <div>
        <Item>Item 1</Item>
        <Item>Item 2</Item>
      </div>
    </div>
  );
}

export default SelectGroup;
