import BasicFooter from "~/components/footers/BasicFooter";
import DefaultHeader from "~/components/headers/DefaultHeader";

type Props = {
    children: React.ReactNode;
}

export default function DefaultLayout({ children }: Props) {
    return <>
        <DefaultHeader></DefaultHeader>
        <main>
            {children}
        </main>
        <BasicFooter></BasicFooter>
    </>
}