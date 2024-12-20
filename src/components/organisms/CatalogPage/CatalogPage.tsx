'use client'
import { Suspense, useEffect, useState } from "react";
import { PageTitle } from "@/components/atoms/PageTitle/PageTitle";
import { CatalogGameList } from "../CatalogGameList/CatalogGameList";
import { Button } from "@/components/atoms/Button/Button";
import { GameData, GameResponse } from "@/utils/interfaces/GameData";
import { getGames } from "@/utils/fetchGames";

interface CatalogPageProps {
  gamesListData: GameData[]
  availableFilters: string[]
  page: number
  totalPages: number
}

export function CatalogPage({
  gamesListData,
  availableFilters,
  page,
  totalPages,
}: CatalogPageProps) {
  const [gamesList, setGameList] = useState<GameData[]>(gamesListData)
  const [currentPage, setCurrentPage] = useState<number>(page)

  const handleLoadMore = async () => {
    if (currentPage <= totalPages) {
      const data = await getGames(currentPage + 1)
      setGameList([...gamesList, ...data.games])
      setCurrentPage(data.currentPage)
    }
  }

  return (
    <>
      <PageTitle text='Top Sellers' />
      <hr />
      <CatalogGameList gameList={gamesList} />
        <div className="lg:w-[137px]">
          <Button
            width="full"
            style="dark"
            text="SEE MORE"
            onClick={handleLoadMore}
          />
        </div>
    </>
  )
}