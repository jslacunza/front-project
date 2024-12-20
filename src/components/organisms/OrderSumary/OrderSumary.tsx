import { Button } from "@/components/atoms/Button/Button"
import { GameData } from "@/utils/interfaces/GameData"

interface OrderSumaryPops {
  gameList: GameData[]
}

export const OrderSumary = ({
  gameList
}: OrderSumaryPops) => {
  const getTotalOrder = () => {
    if (gameList.length < 1) return 0
    if (gameList.length === 1) return gameList[0].price
    return gameList.map((game) => {
      return game.price
    }).reduce((acc, curr) => {
      return acc + curr
    })
  }
  return (
    <section className='flex w-[522px]'>
      <div className="flex flex-col w-full">
        <div className="w-full border-[0.5px] rounded-lg border-stroke-light h-fit px-6 py-8 mb-8">
          <p className="text-2xl font-bold">Order sumary</p>
          <p className="mt-3 font-normal text-lg text-font-dark">{gameList.length} {`item${gameList.length > 1 ? 's' : ''}`}</p>
          <div className="mt-14">
            {gameList.map((game) => {
              return (
                <div className="flex justify-between w-ful font-normal text-lg text-font-dark mt-3" key={game.id}>
                  <p>{game.name}</p>
                  <p>${game.price}</p>
                </div>
              )
            })}
          </div>
          <hr className="my-6" />
          <div className="flex justify-between w-ful font-bold text-xl text-font-dark mt-3">
            <p>Order Total</p>
            <p>${getTotalOrder()}</p>
          </div>
        </div>
        <Button text="Checkout" style="dark" width="full"/>
      </div>
    </section>
  )
}