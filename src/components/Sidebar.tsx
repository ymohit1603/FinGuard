"use client"
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import { sidebarLinks } from '@/constants'
import Footer from './Footer'

const Sidebar = ({ user }: SiderbarProps) => {
  const pathName = usePathname();
  return (
    <section className='sidebar'>
      <nav className='flex flex-col gap-4'>
        <Link
          href='/'
          className='mb-12 cursor-pointer items-center gap-2'
        >
          <Image
            src='/icons/logo.svg'
            width={34}
            height={34}
            alt='logo'
            className='size-[24px'
          />
          <h1
            className='sidebar-logo'>
              FinGuard
          </h1>
        </Link>
        {sidebarLinks.map((item) => {
          const isActive=pathName===item.route||pathName.startsWith(`${item.route}/`)
          return ( 
            <Link href={item.route} key={item.label}
            className={cn('sidebar-link',{'bg-bank-gradient':isActive})}>
              <div className='relative size-6'>
                <Image
                  className={cn({'brightness-[3] invert-8':isActive})}
                  src={item.imgURL} alt={item.label} fill></Image>
              </div>
              <p className={cn( 'sidebar-label',{'!text-white':isActive })}>{item.label}</p>
            </Link>
          )
        })}
      User
      </nav>
      <Footer user={user} />
    </section>
  )
}

export default Sidebar