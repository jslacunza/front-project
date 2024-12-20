import { Loader } from "@/components/atoms/Loader/Loader";
import { CatalogPage } from "@/components/organisms/CatalogPage/CatalogPage";
import { getGames } from "@/utils/fetchGames";
import { Suspense } from "react";

export default async function Home() {
  const data = await getGames()

  return (
    <CatalogPage
      gamesListData={data.games}
      availableFilters={data.availableFilters}
      page={data.currentPage}
      totalPages={data.totalPages}
    />
  )
}

