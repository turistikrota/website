import { useTranslations } from "next-intl";

type VisionProps = {
    title: string;
    text: string;
    icon: string;
}

const VisionItem = ({ title, text, icon }: VisionProps) => (
    <div className="flex p-4 shadow-md dark:bg-second dark:rounded relative">
                    <div className="absolute left-1/2 top-2 transform -translate-x-1/2 -translate-y-1/2">
                        <div className="z-20 w-12 h-12 bg-secondary rounded-full justify-center items-center flex">
                    <i className={`bx bx-md text-white ${icon}`}></i>
                </div>
                    </div>
                    <div className="text-center mt-8">
                        <h3 className="font-semibold mb-4 lg:text-2xl text-xl lg:leading-6 leading-5 text-primary-800 dark:text-primary">{title}</h3>
                        <p className="mt-2 font-normal text-base leading-6 text-gray-600 dark:text-gray-400">{text}</p>
                    </div>
                </div>
)

export default function OurVisionSection() {
    const t = useTranslations("aboutUs.ourVision");

    const items : VisionProps[] = [
        {
            icon: "bx-star",
            title: t('cards.quality.title'),
            text: t('cards.quality.text')
        },
        {
            icon: "bx-trophy",
            title: t('cards.experience.title'),
            text: t('cards.experience.text')
        },
        {
            icon: "bx-group",
            title: t('cards.social.title'),
            text: t('cards.social.text')
        }
    ];

    return <section className="container my-24 px-6 mx-auto flex lg:flex-row flex-col md:gap-10 gap-16 justify-evenly">
        <div className="w-full lg:w-6/12 text-center">
            <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7">{t("title")}</h2>
            <p className="font-normal text-base leading-6 text-gray-600 dark:text-gray-400 mt-6 w-full mx-auto lg:w-10/12 xl:w-9/12">{t('p1')}</p>
            <p className="font-normal text-base leading-6 text-gray-600 dark:text-gray-400 w-full mx-auto lg:w-10/12 xl:w-9/12 mt-10">{t('p2')}</p>
        </div>
        <div className="w-full lg:w-6/12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 lg:gap-12 gap-10">
                {items.map((item, index) => <VisionItem key={index} {...item} />)}
                </div>
        </div>
    </section>
}