'use client'
import { GameResponse } from "./interfaces/GameData"

export const getGames = async (page?: number): Promise<GameResponse> => {
  const url = `${process.env.NEXT_PUBLIC_GAMES_API}/api/games${page ? '?page=' + page : '?page=1'}`
  const dataFetch = await fetch(url)
  return dataFetch.json()
}