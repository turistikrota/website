export enum Page {
    AboutUs = 'AboutUs',
    ComingSoon = 'ComingSoon'
}

type Pages = {
    [key in Page]: string
}

type Lang = string

type PageProvider = {
    [key in Lang]: Pages
}

export const StaticRoutes : PageProvider = {
    tr: {
        AboutUs: '/hakkimizda',
        ComingSoon: '/cok-yakinda'
    },
    en: {
        AboutUs: '/about-us',
        ComingSoon: '/coming-soon'
    }
}

export const staticRoute = (page: Page, lang: Lang) : string => {
    return StaticRoutes[lang][page]
}