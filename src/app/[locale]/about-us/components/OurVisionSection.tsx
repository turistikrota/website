import { useTranslations } from "next-intl";

export default function OurVisionSection() {
    const t = useTranslations("aboutUs.ourVision");

    return <section className="container my-24 px-6 mx-auto flex lg:flex-row flex-col md:gap-10 gap-16 justify-evenly">
        <div className="w-full lg:w-6/12">
            <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800">{t("title")}</h2>
            <p className="font-normal text-base leading-6 text-gray-600 mt-6 w-full lg:w-10/12 xl:w-9/12">{t('p1')}</p>
            <p className="font-normal text-base leading-6 text-gray-600 w-full lg:w-10/12 xl:w-9/12 mt-10">{t('p2')}</p>
        </div>
        <div className="w-full lg:w-6/12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 lg:gap-12 gap-10">
   
                <div className="flex p-4 shadow-md">
                    <div className="mr-6">
                    <i className='bx bx-md bx-star text-secondary'></i>
                    </div>
                    <div className="">
                        <h3 className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-primary-800">{t('cards.quality.title')}</h3>
                        <p className="mt-2 font-normal text-base leading-6 text-gray-600">{t('cards.quality.text')}</p>
                    </div>
                </div>

                <div className="flex p-4 shadow-md">
                    <div className="mr-6">
                    <i className='bx bx-lg bx-trophy text-secondary'></i>
                    </div>
                    <div className="">
                        <h3 className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-primary-800">{t('cards.experience.title')}</h3>
                        <p className="mt-2 font-normal text-base leading-6 text-gray-600">{t('cards.experience.text')}</p>
                    </div>
                </div>

                <div className="flex p-4 shadow-md">
                    <div className="mr-6">
                    <i className='bx bx-lg bx-group text-secondary'></i>
                    </div>
                    <div className="">
                        <h3 className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-primary-800">{t('cards.social.title')}</h3>
                        <p className="mt-2 font-normal text-base leading-6 text-gray-600">{t('cards.social.text')}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
}