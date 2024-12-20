export interface GameData {
  id: string
  genre: string
  image: string
  name: string
  description: string
  price: number
  isNew: boolean
}

export interface GameResponse {
  games: GameData[]
  availableFilters: string[]
  totalPages: number
  currentPage: number
}
