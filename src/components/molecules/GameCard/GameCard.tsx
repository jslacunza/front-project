'use client'
import { Button } from '@/components/atoms/Button/Button'
import { ImageContainer } from '@/components/atoms/ImageContainer/ImageContainer'
import { useHandleLocalStorage } from '@/utils/handleLocalStorage'
import { GameData } from '@/utils/interfaces/GameData'
import { useEffect, useState } from 'react'

export const GameCard = ({
  genre,
  image,
  name,
  price,
  isNew,
  id,
  description
}: GameData) => {
  const { addToCart, removeFromCart, isInCart } = useHandleLocalStorage()
  const [inCart, setInCart] = useState(false)

  const handleClick = () => {
    // const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    // if (!inCart) {
    if (!isInCart(id)) {
      setInCart(true)
      addToCart({
        id,
        genre,
        image,
        name,
        description,
        price,
        isNew,
      })
    }
    else {
      setInCart(false)
      removeFromCart(id)
    }
  }

  useEffect(() => {
    if (id && isInCart(id)) setInCart(isInCart(id))
  }, [id, isInCart])

  // useEffect(() => {
  //   // if (typeof window !== 'undefined') {
  //   // }
  //   const cart = localStorage.getItem('cart')
  //   console.log(`cart/id${id}: `, cart);
  // },[inCart, id])

  return (
    <article className='w-full h-[436px] rounded-2xl border-[0.5px] p-6 border-stroke-light flex flex-col gap-5 relative'>
      {isNew && (
        <span className='absolute z-10 bg-tag-bg rounded px-3 py-2 m-3 text-tag-color hover:cursor-default select-none'>New</span>
      )}
      <ImageContainer imageSrc={image} alt={name} style='gameCard' />
      <div>
        <p className='uppercase text-font-light font-bold'>{genre}</p>
        <div className='flex justify-between w-full'>
          <p className='text-lg font-bold'>{name}</p>
          <p className='text-xl font-bold'>${price}</p>
        </div>
      </div>
      <Button
        style='border'
        text={inCart ? 'REMOVE' : 'ADD TO CART'}
        width='full'
        onClick={handleClick}
      />
    </article>
  )
}