'use client'
import { PageTitle } from "@/components/atoms/PageTitle/PageTitle"
import { CartGameList } from "../CartGameList/CartGameList"
import { OrderSumary } from "../OrderSumary/OrderSumary"
import { useEffect, useState } from "react"

export const CartPage = () => {
    const [gameList, setGameList] = useState([])

    useEffect(() => {
      if (typeof window !== 'undefined') {
        setGameList(JSON.parse(localStorage.getItem('cart') || '[]'))
      }
    }, [])

  return (
    <>
      <PageTitle text='Your Cart' subtitle={`${gameList.length} item${gameList.length > 1 ? 's' : ''}`} />
      <div className="flex w-full justify-between">
        <CartGameList gameList={gameList} />
        <OrderSumary gameList={gameList} />
      </div>
    </>
  )
}