import { useEffect, useState } from "react"
import { GameData } from "./interfaces/GameData"

export const useHandleLocalStorage = () => {
  const [gameCart, setGameCart] = useState<GameData[]>([])

  const isInCart = (gameId: string) => {
    return gameCart.map((game: GameData) => {
      return game.id
    }).includes(gameId)
  }

  const addToCart = (game: GameData) => {
    if (!isInCart(game.id)) {
      const newCart = [...gameCart, game]
      setGameCart(newCart)
    }
  }

  const removeFromCart = (gameId: string) => {
    if (isInCart(gameId)) {
      const newCart = gameCart.filter((cartGame: GameData) => {
        return gameId !== cartGame.id
      })
      setGameCart(newCart)
      localStorage.setItem('cart', JSON.stringify(newCart))
    }
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const cart = localStorage.getItem('cart')
      !cart && setGameCart(JSON.parse(localStorage.getItem('cart') || '[]'))
    }
    localStorage.setItem('cart', JSON.stringify(gameCart))
  },[gameCart])

  return {
    addToCart,
    isInCart,
    removeFromCart
  }
}