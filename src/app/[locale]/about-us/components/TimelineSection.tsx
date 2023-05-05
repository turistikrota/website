import { useTranslations } from "next-intl";

export default function TimelineSection() {
    const t = useTranslations("aboutUs.timeline");

    return <section className="container my-24 px-6 mx-auto">
        <div className="relative mt-24">
            <h2 className="text-3xl font-bold mb-12 text-center">
                {t("title")}
            </h2>
            <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
                <div className="z-20 w-12 h-12 bg-secondary rounded-full flex justify-center items-center">
                <i className='bx bx-sm bx-flag text-white' ></i>
                </div>

                <div className="z-20 w-12 h-12 bg-secondary rounded-full flex justify-center items-center">
                <i className='bx bx-sm bx-clipboard text-white'></i>
                </div>

                <div className="z-20 w-12 h-12 bg-secondary rounded-full justify-center items-center hidden sm:flex">
                <i className='bx bx-sm bxs-devices text-white'></i>
                </div>
            </div>
            <hr className="z-10 absolute top-2/4 w-full bg-gray-200 dark:bg-gray-500" />
        </div>
        <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
            <div>
                <h3 className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-primary-800 dark:text-primary mt-6">{t('founding.title')}</h3>
                <p className="font-normal text-base leading-6 text-gray-600 dark:text-gray-400 mt-6">{t('founding.text')}</p>
            </div>
            <div>
                <h3 className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-primary-800 dark:text-primary mt-6">{t('development.title')}</h3>
                <p className="font-normal text-base leading-6 text-gray-600 dark:text-gray-400 mt-6">{t('development.text')}</p>
            </div>
            <div className="sm:block hidden">
                <h3 className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-primary-800 dark:text-primary mt-6">{t('launch.title')}</h3>
                <p className="font-normal text-base leading-6 text-gray-600 dark:text-gray-400 mt-6">{t('launch.text')}</p>
            </div>
        </div>
        <div className="sm:hidden block relative mt-8">
            <div className="grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
            <div className="z-20 w-12 h-12 bg-secondary rounded-full justify-center items-center flex sm:hidden">
                <i className='bx bx-sm bxs-devices text-white'></i>
                </div>
            </div>
            <hr className="z-10 absolute -top-1/4 w-full bg-gray-200 dark:bg-gray-500" />
        </div>
        <div className="sm:hidden grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
            <div>
            <h3 className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-primary-800 dark:text-primary mt-6">{t('launch.title')}</h3>
                <p className="font-normal text-base leading-6 text-gray-600 dark:text-gray-400 mt-6">{t('launch.text')}</p>
            </div>
        </div>
    </section>
}