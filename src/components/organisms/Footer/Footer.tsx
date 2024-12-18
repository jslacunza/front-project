import Image from 'next/image'

export const Footer = () => {
  return (
    <footer className='h-[172px] w-screen bg-gray-dark flex justify-center items-center'>
      <Image src='./icons/apply-logo.svg' height={44} width={170} alt='Apply Digital' />
    </footer>
  )
}