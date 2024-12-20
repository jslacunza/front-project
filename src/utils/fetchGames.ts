import { GameResponse } from "./interfaces/GameData"

interface FetchGamesProps {
  page?: string
  genre?: string
}

export const getGames = async ({ page, genre }: FetchGamesProps ): Promise<GameResponse> => {
  const url = new URL(`${process.env.NEXT_PUBLIC_GAMES_API}/api/games`)
  page && url.searchParams.append('page', page.toString())
  genre && url.searchParams.append('genre', genre)
  const dataFetch = await fetch(url)
  return dataFetch.json()
}