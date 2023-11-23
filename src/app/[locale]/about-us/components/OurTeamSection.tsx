import { useTranslations } from 'next-intl'
import MemberCard, { Member } from './MemberCard'

export default function OurTeamSection() {
  const t = useTranslations('aboutUs.team')
  const members: Member[] = [
    {
      avatar: 'https://s3.turistikrota.com/site/users/ssi.jpeg',
      title: 'founderAndDeveloper',
      fullName: 'Sami Salih İbrahimbaş',
      social: [
        {
          icon: 'bxl-twitter',
          link: 'https://twitter.com/ss_ibrahimbas',
          title: t('link', {
            name: 'Sami Salih İbrahimbaş',
            socialMedia: 'Twitter',
          }),
        },
        {
          icon: 'bxl-instagram',
          link: 'https://instagram.com/ss.ibrahimbas',
          title: t('link', {
            name: 'Sami Salih İbrahimbaş',
            socialMedia: 'Instagram',
          }),
        },
        {
          icon: 'bxl-linkedin-square',
          link: 'https://linkedin.com/in/ssibrahimbas',
          title: t('link', {
            name: 'Sami Salih İbrahimbaş',
            socialMedia: 'LinkedIn',
          }),
        },
        {
          icon: 'bxl-github',
          link: 'https://github.com/ssibrahimbas',
          title: t('link', {
            name: 'Sami Salih İbrahimbaş',
            socialMedia: 'GitHub',
          }),
        },
      ],
    },
    {
      avatar: 'https://s3.turistikrota.com/site/users/sinci.jpg',
      title: 'contentManager',
      fullName: 'Semih İnci',
      social: [
        {
          icon: 'bxl-linkedin-square',
          link: 'https://linkedin.com/in/semih-inci-431505295',
          title: t('link', {
            name: 'Semih İnci',
            socialMedia: 'LinkedIn',
          }),
        },
      ],
    },
  ]

  return (
    <section className='container my-24 px-6 mx-auto'>
      <div className='mb-32 text-center lg:text-left'>
        <h2 className='text-3xl font-bold mb-12 text-center'>{t('meetTheTeam')}</h2>
        <div className='grid md:grid-cols-3 gap-4'>
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
  )
}
