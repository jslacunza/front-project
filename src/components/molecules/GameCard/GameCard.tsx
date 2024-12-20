'use client'
import { useEffect, useState } from 'react'
import { Button } from '@/components/atoms/Button/Button'
import { ImageContainer } from '@/components/atoms/ImageContainer/ImageContainer'
import { GameData } from '@/utils/interfaces/GameData'

export const GameCard = ({
  genre,
  image,
  name,
  price,
  isNew,
  id,
  description
}: GameData) => {
  const [inCart, setInCart] = useState(false)

  const handleClick = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    const isInCart = cart.map((game: GameData) => game.id).includes(id)
    if (isInCart) {
      const newCart = cart.filter((game: GameData) => game.id !== id)
      localStorage.setItem('cart', JSON.stringify(newCart))
    } else {
      !isInCart && localStorage.setItem('cart', JSON.stringify([...cart, {
        genre,
        image,
        name,
        price,
        isNew,
        id,
        description
      }]))
    }
    setInCart(!inCart)
  }

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    const isInCart = cart.map((game: GameData) => game.id).includes(id)
    setInCart(isInCart)
  }, [id])


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