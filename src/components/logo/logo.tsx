import Image from "../image/image";

export default function Logo() {
  return (
    <Image
      src={"https://cdn.turistikrota.com/logo/horizontal.svg"}
      width={186}
      height={30}
      alt={"Turistikrota logo"}
      title="Turistikrota logo"
      priority
    />
  );
}
