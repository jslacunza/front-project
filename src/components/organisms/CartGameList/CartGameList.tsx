import { GameCart } from "@/components/molecules/GameCart/GameCart"
import { GameData } from "@/utils/interfaces/GameData"

interface CartGameListProps {
  gameList: GameData[]
  updateGameList: (gameList: GameData[]) => void
}

export const CartGameList = ({ gameList, updateGameList }: CartGameListProps) => {
  
  return (
    <section className="flex flex-col lg:w-[678px] f-full">
      {gameList.map((game, index) => {
        return (
          <>
            <GameCart
              {...game}
              updateGameList={updateGameList}
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