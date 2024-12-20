import Link from "next/link"
import Image from 'next/image'

export const Header = () => {
  const iconSize = 20
  return (
    <header className='flex justify-center w-screen bg-gray-light'>
      <div className='h-16 w-full max-w-screen-xl flex justify-between items-center between lg:px-0 px-4'>
        <Link className="text-2xl" href='/'>
          GamerShop
        </Link>
        <Link href='/cart'>
          <Image src='/icons/cart.svg' width={iconSize} height={iconSize} alt='Cart'/>
        </Link>
      </div>
    </header>
  )
}