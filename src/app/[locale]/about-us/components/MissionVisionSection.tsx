import { BaseProps } from "~/types/base";

export default function MissionVisionSection({children}: BaseProps) {
    return <section className="container my-24 px-6 mx-auto flex lg:flex-row flex-col md:gap-10 gap-16 justify-evenly">{children}</section>
}