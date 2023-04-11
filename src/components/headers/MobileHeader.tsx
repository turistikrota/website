import Image from "next/image";
import Link from "next/link";

export default function MobileHeader() {
    return (
        <header className="fixed top-0 left-0 z-10 w-full h-16 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
            <div className="flex items-center justify-between h-full px-4 mx-auto max-w-7xl">
                <div className="flex items-center">
                    <Link href={"/"} className={"flex items-center"}>
                        <div className="flex items-center justify-center mr-2 rounded-full">
                            <Image src="/logo/default-logo.svg"  alt="Logo" width={170} height={41} />
                        </div>
                    </Link>
                </div>
                <div className="flex items-center">
                    <button className="p-2 flex items-center text-center justify-center text-gray-600 w-9 h-9 bg-gray-100 rounded-full hover:bg-gray-200 dark:text-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700">
                        JD
                        {/* If avatar not selected, write username <Image src="/menu.svg" alt="Menu" width={24} height={24} /> */}
                    </button>
                </div>
            </div>
        </header>
    )
}
