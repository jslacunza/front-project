import { GameCard } from "@/components/molecules/GameCard/GameCard"
import { GameData } from "@/utils/interfaces/GameData"

interface CatalogGameListProps {
  gameList: GameData[]
}

export const CatalogGameList = ({ gameList }: CatalogGameListProps) => {
  return (
    <section className="grid lg:grid-cols-3 grid-cols-1 w-full gap-12 ">
      {gameList.map((game) => {
        return (
          <GameCard
            {...game}
            key={game.id}
          />
        )
      })}
    </section>
  )
}