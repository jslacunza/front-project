'use client'
import { Suspense, useEffect, useState } from "react";
import { PageTitle } from "@/components/atoms/PageTitle/PageTitle";
import { CatalogGameList } from "../CatalogGameList/CatalogGameList";
import { Button } from "@/components/atoms/Button/Button";
import { GameData, GameResponse } from "@/utils/interfaces/GameData";
import { getGames } from "@/utils/fetchGames";
import { Filter } from "@/components/molecules/Filter/Filter";
import { useSearchParams } from "next/navigation";

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
  const queryParam = useSearchParams()
  const [gamesList, setGameList] = useState<GameData[]>(gamesListData)
  const [currentPage, setCurrentPage] = useState<number>(page)

  const handleLoadMore = async () => {
    if (currentPage <= totalPages) {
      const data = await getGames({page: `${currentPage + 1}`})
      setGameList([...gamesList, ...data.games])
      setCurrentPage(data.currentPage)
    }
  }

  const handleFilter = async (genre?: string) => {
    const data = await getGames({genre: genre || ''})
    setGameList(data.games)
    setCurrentPage(data.currentPage)
  }

  useEffect(() => {
    const fetchGames = async () => {
      const queryPage = queryParam.get('page') || ''
      const querGenre = queryParam.get('genre') || ''
      const data = await getGames({page: queryPage, genre: querGenre})
      setGameList(data.games)
    }
    fetchGames()
  }, [queryParam])

  return (
    <>
      <div>
        <PageTitle text='Top Sellers' />
        <div className="flex justify-end">
          <Filter filterList={availableFilters} onClickFilter={handleFilter} />
        </div>
        <hr />
      </div>
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