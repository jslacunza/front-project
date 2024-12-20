'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export const Footer = () => {
  const router = useRouter()
  return (
    <footer className='h-[172px] w-screen bg-gray-dark flex justify-center items-center'>
      <Image
        className='cursor-pointer'
        src='./icons/apply-logo.svg'
        height={44} width={170}
        alt='Apply Digital'
        onClick={() => router.push('/')}
      />
    </footer>
  )
}