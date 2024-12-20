import Image from "next/image"

const Style = {
  gameCard: {
    container: 'flex content-center justify-center rounded-t-xl w-full',
    image: 'w-full h-auto hover:scale-110 transition object-cover'
  },
  gameCart: {
    container: 'flex content-center justify-center w-full h-[156px]',
    image: 'w-full object-cover'
  }
}

interface ImageContainerProps {
  style: 'gameCard' | 'gameCart',
  imageSrc: string
  alt: string
}

export const ImageContainer = ({
  style,
  imageSrc,
  alt
}: ImageContainerProps) => {

  return (
    <div className={`overflow-hidden ${Style[style].container}`} >
      <Image className={Style[style].image} src={imageSrc} alt={alt} width='0' height='0' sizes="128w" />
    </div>
  )
}