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
    <Card className='relative shadow-sm transition-shadow duration-200 hover:shadow-md  dark:shadow-none dark:hover:shadow-none'>
      <div className='flex-row items-center lg:flex'>
        <div className='flex w-full shrink-0 grow-0 basis-auto justify-center sm:block lg:w-5/12 lg:pr-6'>
          <Image
            src={src}
            onError={onError}
            alt={props.avatarAlt}
            title={props.avatarAlt}
            width={200}
            height={200}
            className='mb-6 h-36 w-36 rounded-md object-cover lg:mb-0'
          />
        </div>
        <div className='w-full shrink-0 grow-0 basis-auto lg:w-7/12'>
          <h3 className='mb-2 text-lg font-bold'>{props.fullName}</h3>
          <p className='mb-4 text-gray-500 dark:text-gray-400'>{props.avatarTitle}</p>
          <ul className='mx-auto flex list-inside justify-center lg:justify-start'>
            {props.social.map((social) => (
              <li key={social.title}>
                <Link href={social.link} key={social.title} title={social.title}>
                  <span className='px-2 lg:pl-0 lg:pr-2'>
                    <i
                      className={`bx bx-sm ${social.icon} text-primary-600 transition-all duration-200 hover:text-primary-400`}
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
