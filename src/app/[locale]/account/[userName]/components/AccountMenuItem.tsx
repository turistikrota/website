import Link from "next-intl/link";
import { Colors } from "~/types/base";

type AccountMenuItemType = React.FC<React.PropsWithChildren<Props>> & {
  Content: typeof Content;
  Icon: typeof Icon;
  IconWrapper: typeof IconWrapper;
  Badge: typeof Badge;
  LinkIcon: typeof LinkIcon;
};

type BadgeProps = {
  type?: Colors;
  visible?: boolean;
};

type ContentProps = {
  isLink?: boolean;
};

type LinkIconProps = {
  visible?: boolean;
};

type DefaultProps = {
  onClick?: () => void;
  className?: string;
};

type LinkProps = DefaultProps & {
  href: string;
  title: string;
  alt?: string;
};

type Props = {
  isLink?: boolean;
} & (LinkProps | DefaultProps);

function isLinkProps(props: Props): props is LinkProps {
  return (props as LinkProps).href !== undefined;
}

const BadgeStyles: Record<Colors, string> = {
  primary: "bg-primary-500",
  secondary: "bg-secondary-500",
  success: "bg-success-500",
  danger: "bg-danger-500",
  warning: "bg-warning-500",
  info: "bg-info-500",
};

const IconWrapper = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

const Icon = ({ icon }: { icon: string }) => {
  return <i className={`${icon} bx-sm text-gray-700 dark:text-white`}></i>;
};

const Badge = ({
  type = "primary",
  visible = true,
  children,
}: React.PropsWithChildren<BadgeProps>) => {
  if (!visible) return null;
  return (
    <span
      className={`absolute top-0 -right-2 flex items-center text-xs text-white justify-center w-4 h-4 rounded-full ${BadgeStyles[type]}`}
    >
      {children}
    </span>
  );
};

const LinkIcon = ({ visible }: LinkIconProps) => {
  if (!visible) return null;
  return (
    <i className="bx bx-sm bx-chevron-right text-gray-700 dark:text-white absolute top-1/2 right-2 transform -translate-y-1/2"></i>
  );
};

const Content = ({
  children,
  isLink,
}: React.PropsWithChildren<ContentProps>) => {
  return (
    <div className="flex flex-col items-start justify-center col-span-3 relative">
      <span className="text-md font-semibold text-gray-900  dark:text-white">
        {children}
      </span>
      <LinkIcon visible={isLink} />
    </div>
  );
};

const DefaultProvider = ({
  children,
  className,
  onClick,
}: React.PropsWithChildren<DefaultProps>) => {
  return (
    <div
      className={`cursor-pointer ${className ? className : ""}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

const LinkProvider = ({
  children,
  onClick,
  title,
  className,
  alt,
  href,
}: React.PropsWithChildren<LinkProps>) => {
  return (
    <Link href={href} title={title} onClick={onClick} className={className}>
      {children}
    </Link>
  );
};

const AccountMenuItem: AccountMenuItemType = ({
  children,
  className,
  ...props
}) => {
  const classes = `w-full bg-second rounded-md grid grid-cols-4 py-3 hover:bg-third transition-colors duration-200 ${className}`;
  if (isLinkProps(props)) {
    return (
      <LinkProvider {...props} className={classes}>
        {children}
      </LinkProvider>
    );
  }
  return (
    <DefaultProvider {...props} className={classes}>
      {children}
    </DefaultProvider>
  );
};

AccountMenuItem.Content = Content;
AccountMenuItem.IconWrapper = IconWrapper;
AccountMenuItem.Badge = Badge;
AccountMenuItem.Icon = Icon;
AccountMenuItem.LinkIcon = LinkIcon;

export default AccountMenuItem;
