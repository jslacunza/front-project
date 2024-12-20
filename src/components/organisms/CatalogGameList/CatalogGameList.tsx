import { GameCard } from "@/components/molecules/GameCard/GameCard"
import { GameData } from "@/utils/interfaces/GameData"

interface CatalogGameListProps {
  gameList: GameData[]
}

export const CatalogGameList = ({ gameList }: CatalogGameListProps) => {
  return (
    <section className="grid grid-cols-3 w-full gap-12">
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