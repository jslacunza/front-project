import { Button } from '@/components/atoms/Button/Button'
import { ImageContainer } from '@/components/atoms/ImageContainer/ImageContainer'

export const GameCard = ({ showTag = false } : { showTag?:boolean }) => {
  
  return (
    <article className='w-[380px] h-[436px] rounded-2xl border-[0.5px] p-6 border-stroke-light flex flex-col gap-5 relative'>
      {showTag && (
        <span className='absolute z-10 bg-tag-bg rounded px-3 py-2 m-3 text-tag-color'>New</span>
      )}
      {/* <Image src='https://placehold.co/600x400' alt='image-game' width={600} height={400} /> */}
      <ImageContainer style='gameCard' />

      <div>
        <p className='uppercase text-font-light font-bold'>genre</p>
        <div className='flex justify-between w-full'>
          <p className='text-lg font-bold'>Name</p>
          <p className='text-xl font-bold'>$10.00</p>
        </div>
      </div>
      <Button style='border' text='ADD TO CART' width='full' />
    </article>
  )
}