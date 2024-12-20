'use client'
import { PageTitle } from "@/components/atoms/PageTitle/PageTitle"
import { CartGameList } from "../CartGameList/CartGameList"
import { OrderSumary } from "../OrderSumary/OrderSumary"
import { useEffect, useState } from "react"
import { GameData } from "@/utils/interfaces/GameData"

export const CartPage = () => {
  const [gameList, setGameList] = useState<GameData[]>([])

  const handleRemoveGame = (gameList?: GameData[]) => {
    gameList && setGameList(gameList)
  }

  useEffect(() => {
    setGameList(JSON.parse(localStorage.getItem('cart') || '[]'))
  }, [])
  return (
    <>
      <PageTitle text='Your Cart' subtitle={`${gameList.length} item${gameList.length > 1 ? 's' : ''}`} />
      <div className="flex lg:flex-row flex-col w-full justify-between">
        <CartGameList gameList={gameList} updateGameList={handleRemoveGame} />
        <OrderSumary gameList={gameList} />
      </div>
    </>
  )
}