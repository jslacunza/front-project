import { ImageContainer } from "@/components/atoms/ImageContainer/ImageContainer"

interface GameCartProps {
  genre: string
  image: string
  name: string
  description: string
  price: number
}

export const GameCart = ({
  genre,
  image,
  name,
  description,
  price
}: GameCartProps) => {
  console.log('image: ', image);
  return (
    <article className='w-full flex lg:flex-row flex-col p-5 justify-between lg:h-[196px] h-fit'>
      <div className="flex justify-between lg:w-[256px] w-full gap-4">
        <ImageContainer style='gameCart' imageSrc={image} alt={name} />
        <p className="lg:hidden block">X</p>
      </div>
      <div className="flex flex-col lg:w-[318px] w-full justify-between lg:mt-0 mt-5">
        <div>
          <p className="uppercase text-font-light font-bold">{genre}</p>
          <p className="font-bold text-xl">{name}</p>
          {description && (
            <p className="font-normal text-font-light">{description}</p>
          )}
        </div>
        <div>
          <p className="text-right text-xl font-bold">${price}</p>
        </div>
      </div>
      <p className="lg:block hidden">X</p>
    </article>
  )
}