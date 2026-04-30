  

export type Anime = {
  id: number
  title: string
  images: {
    small: string | null
    medium: string | null
    large: string | null
  }
  status: string | null
  episodes: number | null
  type: string | null
  genres: string[]
  synopsis: string | null
  rating: string | null
  aired: string | null
}

   