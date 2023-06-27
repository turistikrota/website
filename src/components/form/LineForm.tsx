type Props = {
  className?: string;
};

function Left({ children }: React.PropsWithChildren) {
  return <div className="flex flex-col grow justify-start">{children}</div>;
}

function Title({ children }: React.PropsWithChildren) {
  return (
    <div className="text-lg text-left font-bold text-gray-800 dark:text-gray-200">
      {children}
    </div>
  );
}

function Description({ children }: React.PropsWithChildren) {
  return (
    <div className="text-sm text-left text-gray-600 dark:text-gray-400">
      {children}
    </div>
  );
}

function Right({ children }: React.PropsWithChildren) {
  return <div className="flex justify-end">{children}</div>;
}

function LineForm({ children, className }: React.PropsWithChildren<Props>) {
  return (
    <div
      className={`flex justify-between items-center ${
        className ? className : ""
      }`}
    >
      {children}
    </div>
  );
}

Left.Title = Title;
Left.Description = Description;

LineForm.Left = Left;
LineForm.Right = Right;

export default LineForm;
