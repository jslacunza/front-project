import { CatalogPage } from "@/components/organisms/CatalogPage/CatalogPage";
import { getGames } from "@/utils/fetchGames";

export default async function Home() {
  const data = await getGames({})

  return (
    <CatalogPage
      gamesListData={data.games}
      availableFilters={data.availableFilters}
      page={data.currentPage}
      totalPages={data.totalPages}
    />
  )
}

