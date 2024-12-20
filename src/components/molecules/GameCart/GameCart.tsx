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
    <article className='w-full flex flex-row p-5 justify-between h-[196px]'>
      <div className="w-[256px]">
        <ImageContainer style='gameCart' imageSrc={image} alt={name} />
      </div>
      <div className="flex flex-col w-[318px] justify-between">
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
      <p>X</p>
    </article>
  )
}