"use client"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { sidebarLinks } from "@/constants"
import { cn } from "@/lib/utils"
import Link  from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

const MobileNav = ({ user }: MobileNavProps) => {
    const pathName=usePathname()
  return (
      <section className="w-full max-w-[264px]">
          <Sheet>
              <SheetTrigger>
                  <Image
                      src="icons/hamburger.svg"
                      width={30}
                      height={30}
                      alt="menu"
                      className="cursor-pointer"
                  />
            </SheetTrigger>
            <SheetContent side="left" className="border-none bg-white">
            <Link
          href='/'
          className='mb-12 cursor-pointer items-center gap-1 px-4'
        >
          <Image
            src='/icons/logo.svg'
            width={34}
            height={34}
            alt='logo'
          />
          <h1
            className='text-26 font-ibm-plex-serif text-black-1'>
              FinGuard
          </h1>
        </Link>
                  <div className="mobilemav-sheet ">
                      <SheetClose asChild>
                          <nav className="flex h-full flex-col gap-6 pt-16 text-white ">
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
                          USER
                          </nav>
                      </SheetClose>
        </div>

                      Footer
            </SheetContent>
           </Sheet>
    </section>
  )
}

export default MobileNav