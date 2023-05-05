import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

type Social = {
  icon: string;
  link: string;
  title: string;
}

type TeamTitleType = keyof Messages["aboutUs"]["team"]["title"];

type Member = {
  avatar: string;
  title: TeamTitleType;
  fullName: string;
  social: Social[]
}

type CardProps = Member & {
  avatarAlt: string;
  avatarTitle: string;
}

const MemberCard = (props: CardProps) => {
  return <div className="mb-6 lg:mb-0 hover:shadow-lg transition-all duration-100">
    <div className="relative block rounded-lg shadow-lg bg-white dark:bg-second p-6">
      <div className="lg:flex flex-row items-center">
        <div className="grow-0 shrink-0 basis-auto w-full lg:w-5/12 lg:pr-6 flex justify-center sm:block">
          <Image
            src={props.avatar}
            alt={props.avatarAlt}
            title={props.avatarAlt}
            width={200}
            height={200}
            className="rounded-md mb-6 lg:mb-0"
          />
        </div>
        <div className="grow-0 shrink-0 basis-auto w-full lg:w-7/12">
          <h3 className="text-lg font-bold mb-2">{props.fullName}</h3>
          <p className="text-gray-500 dark:text-gray-400 mb-4">{props.avatarTitle}</p>
          <ul className="list-inside flex mx-auto justify-center lg:justify-start">
            {props.social.map((social) => (
              <li key={social.title}>
              <Link href={social.link} key={social.title} title={social.title}>
                <span className="px-2 lg:pl-0 lg:pr-2">
                  <i className={`bx bx-sm ${social.icon} text-primary-600 hover:text-primary-400 transition-all duration-100`}></i>
                </span>
              </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
}

export default function OurTeamSection() {
  const t = useTranslations("aboutUs.team");
  const members: Member[] = [
    {
      avatar: "https://cdn.turistikrota.com/avatars/ssi.jpg",
      title: "founderAndDeveloper",
      fullName: "Sami Salih İbrahimbaş",
      social: [
        {
          icon: "bxl-twitter",
          link: "https://twitter.com/ss_ibrahimbas",
          title: t("link", { name: "Sami Salih İbrahimbaş", socialMedia: "Twitter" })
        },
        {
          icon: "bxl-instagram",
          link: "https://instagram.com/ss.ibrahimbas",
          title: t("link", { name: "Sami Salih İbrahimbaş", socialMedia: "Instagram" })
        },
        {
          icon: "bxl-linkedin-square",
          link: "https://linkedin.com/in/ssibrahimbas",
          title: t("link", { name: "Sami Salih İbrahimbaş", socialMedia: "LinkedIn" })
        },
        {
          icon: "bxl-github",
          link: "https://github.com/ssibrahimbas",
          title: t("link", { name: "Sami Salih İbrahimbaş", socialMedia: "GitHub" })
        }
      ]
    }
  ];

  return <section className="container my-24 px-6 mx-auto">
    <div className="mb-32 text-center lg:text-left">
      <h2 className="text-3xl font-bold mb-12 text-center">
        {t("meetTheTeam")}
      </h2>
      <div className="grid md:grid-cols-3 gap-6 xl:gap-x-12">
        {members.map((member) => (
          <MemberCard
            {...member}
            key={member.fullName}
            avatarAlt={t('avatar', { name: member.fullName })}
            avatarTitle={t(`title.${member.title}`)}
          />
        ))}
      </div>
    </div>
  </section>
}