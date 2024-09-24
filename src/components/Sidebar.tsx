import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Sidebar = ({user}:SiderbarProps) => {
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
          
        })}
      </nav>
    </section>
  )
}

export default Sidebar