import { GameCart } from "@/components/molecules/GameCart/GameCart"
import { GameData } from "@/utils/interfaces/GameData"

interface CartGameListProps {
  gameList: GameData[]
}

export const CartGameList = ({ gameList }: CartGameListProps) => {
  return (
    <section className="flex flex-col lg:w-[678px] f-full">
      {gameList.map((game, index) => {
        return (
          <>
            <GameCart
              {...game}
              key={game.id}
            />
            {index !== gameList.length-1 && (
              <hr />
            )}
          </>
        )
      })}
    </section>
  )
}