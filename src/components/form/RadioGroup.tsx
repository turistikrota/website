type Props = {
  className?: string;
  title: string;
};

function RadioGroup({
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
      <div>{children}</div>
    </div>
  );
}

export default RadioGroup;
