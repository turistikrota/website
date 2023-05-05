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

                <div className="z-20 w-12 h-12 bg-secondary rounded-full flex justify-center items-center">
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
                <svg className="z-20" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="24" className="fill-secondary" />
                    <path d="M21 23C23.2091 23 25 21.2091 25 19C25 16.7909 23.2091 15 21 15C18.7909 15 17 16.7909 17 19C17 21.2091 18.7909 23 21 23Z" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15 33V31C15 29.9391 15.4214 28.9217 16.1716 28.1716C16.9217 27.4214 17.9391 27 19 27H23C24.0609 27 25.0783 27.4214 25.8284 28.1716C26.5786 28.9217 27 29.9391 27 31V33" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M28 15.1301C28.8604 15.3504 29.623 15.8508 30.1676 16.5524C30.7122 17.254 31.0078 18.117 31.0078 19.0051C31.0078 19.8933 30.7122 20.7562 30.1676 21.4578C29.623 22.1594 28.8604 22.6598 28 22.8801" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M33 33.0001V31.0001C32.9949 30.1173 32.6979 29.2609 32.1553 28.5645C31.6126 27.8682 30.8548 27.3708 30 27.1501" stroke="white" strokeWidth="2.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            <hr className="z-10 absolute top-2/4 w-full bg-gray-200" />
        </div>
        <div className="sm:hidden grid sm:grid-cols-3 grid-cols-2 sm:gap-8 gap-4">
            <div>
            <h3 className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-primary-800 dark:text-primary mt-6">{t('launch.title')}</h3>
                <p className="font-normal text-base leading-6 text-gray-600 dark:text-gray-400 mt-6">{t('launch.text')}</p>
            </div>
        </div>
    </section>
}