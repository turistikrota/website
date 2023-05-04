import Link from "next/link";

type Props = {
    children: React.ReactNode;
}

type HeaderProps = {
    className?: string;
}

type ClickableProps = {
    onClick?: () => void;
}

const Left = ({ children }: Props) => {
    return (
        <div className="flex items-center">
            {children}
        </div>
    )
}

const Fill = ({ children, className }: Props & HeaderProps) => {
    return <div className={`flex items-center flex-grow ${className}`}>
        {children}
    </div>
}

const Right = ({ children }: Props) => {
    return <div className="flex items-center">
        {children}
    </div>
}

const Logo = ({ children }: Props) => {
    return (
        <div className="flex items-center">
            <Link href={"/"} className={"flex items-center"}>
                <div className="flex items-center justify-center mr-2 rounded-full">
                    {children}
                </div>
            </Link>
        </div>
    )
}

const Avatar = ({ children, onClick }: Props & ClickableProps) => {
    return <button onClick={onClick} className="p-2 flex items-center text-center justify-center text-gray-600 w-9 h-9 bg-gray-100 rounded-full hover:bg-gray-200 dark:text-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700">
        {children}
    </button>
}

function MobileHeader({children} : Props) {
    return (
        <header className="fixed top-0 left-0 z-10 w-full h-16 bg-header border-b border-gray-200 dark:border-gray-800">
            <div className="flex items-center justify-between h-full px-4 mx-auto max-w-7xl">
                {children}
            </div>
        </header>
    )
}

MobileHeader.Left = Left;
MobileHeader.Right = Right;
MobileHeader.Logo = Logo;
MobileHeader.Avatar = Avatar;
MobileHeader.Fill = Fill;

export default MobileHeader;
