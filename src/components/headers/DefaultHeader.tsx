import Image from "next/image";
import MobileHeader from "./MobileHeader";

export default function DefaultHeader() {
    return (<MobileHeader>
    <MobileHeader.Left>
        <MobileHeader.Logo>
            <Image src={"https://cdn.turistikrota.com/logo/1x/horizontal.png"} width={186} height={30} alt={"Turistikrota"} />
        </MobileHeader.Logo>
    </MobileHeader.Left>
    <MobileHeader.Fill className="hidden md:flex">
    </MobileHeader.Fill>
   <MobileHeader.Right>
    <MobileHeader.Avatar>SSI</MobileHeader.Avatar>
   </MobileHeader.Right>
</MobileHeader>)
}