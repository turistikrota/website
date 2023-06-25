type Props = {
  className?: string;
};

type Head = {
  Title: typeof Title;
  Subtitle: typeof Subtitle;
} & typeof Head;

function Title({ children }: React.PropsWithChildren) {
  return <h2 className="text-lg font-bold lg:block">{children}</h2>;
}

function Subtitle({ children }: React.PropsWithChildren) {
  return (
    <p className="text-gray-600 text-sm dark:text-gray-400 lg:block">
      {children}
    </p>
  );
}

function Head({ children }: React.PropsWithChildren) {
  return <div className="bg-second p-4 border-b rounded-t-md">{children}</div>;
}

function Body({ children }: React.PropsWithChildren) {
  return <div className="bg-second p-4">{children}</div>;
}

function Footer({ children }: React.PropsWithChildren) {
  return <div className="p-4 bg-second rounded-b-md border-t">{children}</div>;
}

Head.Title = Title;
Head.Subtitle = Subtitle;

function FormSection({ children, className }: React.PropsWithChildren<Props>) {
  return <section className={className}>{children}</section>;
}

FormSection.Head = Head;
FormSection.Body = Body;
FormSection.Footer = Footer;

export default FormSection;
