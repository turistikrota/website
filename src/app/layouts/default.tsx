import DefaultHeader from "~/components/headers/DefaultHeader";

type Props = {
    children: React.ReactNode;
}

export default function DefaultLayout({ children }: Props) {
    return <>
        <DefaultHeader></DefaultHeader>
        <main className="pt-16 h-full w-full">
            {children}
        </main>
    </>
}