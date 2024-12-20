import { GameResponse } from "./interfaces/GameData"

export const getGames = async (page?: number): Promise<GameResponse> => {
  const url = `http://localhost:3000/api/games${page ? '?page=' + page : '?page=1'}`
  const dataFetch = await fetch(url)
  return dataFetch.json()
}