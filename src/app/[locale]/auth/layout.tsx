import Image from "next/image";
import MobileHeader from "~/components/headers/MobileHeader";

type Props = {
    children: React.ReactNode;
  }

export default function AuthLayout({children} : Props) {
    return <>
        <MobileHeader>
            <MobileHeader.Left>
                <MobileHeader.Logo>
                    <Image src={"https://cdn.turistikrota.com/logo/1x/horizontal.png"} width={186} height={30} alt={"Turistikrota"} />
                </MobileHeader.Logo>
            </MobileHeader.Left>
           <MobileHeader.Right>
            <MobileHeader.Avatar>SSI</MobileHeader.Avatar>
           </MobileHeader.Right>
        </MobileHeader>
    <main className="pt-16 h-full w-full">
    {children}
    </main>
    </>
}