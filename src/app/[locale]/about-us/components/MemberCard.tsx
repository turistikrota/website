'use client'
import Card from '@turistikrota/ui/cards/default'
import { useImageSrc } from '@turistikrota/ui/hooks/image'
import Image from 'next/image'
import Link from 'next/link'

type Social = {
  icon: string
  link: string
  title: string
}

type TeamTitleType = keyof Messages['aboutUs']['team']['title']

export type Member = {
  avatar: string
  title: TeamTitleType
  fullName: string
  social: Social[]
}

type CardProps = Member & {
  avatarAlt: string
  avatarTitle: string
}

const MemberCard = (props: CardProps) => {
  const { src, onError } = useImageSrc(props.avatar)
  return (
    <Card className='relative transition-shadow duration-200 shadow-sm hover:shadow-md  dark:shadow-none dark:hover:shadow-none'>
      <div className='lg:flex flex-row items-center'>
        <div className='grow-0 shrink-0 basis-auto w-full lg:w-5/12 lg:pr-6 flex justify-center sm:block'>
          <Image
            src={src}
            onError={onError}
            alt={props.avatarAlt}
            title={props.avatarAlt}
            width={200}
            height={200}
            className='rounded-md mb-6 lg:mb-0 w-36 h-36 object-cover'
          />
        </div>
        <div className='grow-0 shrink-0 basis-auto w-full lg:w-7/12'>
          <h3 className='text-lg font-bold mb-2'>{props.fullName}</h3>
          <p className='text-gray-500 dark:text-gray-400 mb-4'>{props.avatarTitle}</p>
          <ul className='list-inside flex mx-auto justify-center lg:justify-start'>
            {props.social.map((social) => (
              <li key={social.title}>
                <Link href={social.link} key={social.title} title={social.title}>
                  <span className='px-2 lg:pl-0 lg:pr-2'>
                    <i
                      className={`bx bx-sm ${social.icon} text-primary-600 hover:text-primary-400 transition-all duration-200`}
                    ></i>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  )
}

export default MemberCard
