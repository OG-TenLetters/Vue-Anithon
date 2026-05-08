type IdBase = {
  id: number;
  idMal: number;
};

type Title = {
  native: string;
  english: string;
  romaji: string;
};

type Name = {
  native: string;
  full: string;
};



type Person = {
  name: Name;
  image: string;
}

type CoverImage = {
  medium: string;
  large: string;
  extraLarge: string;
};

type DateParts = {
  year: number | null;
  month: number | null;
  day: number | null;
};



type StreamingEpisodes = {
  url: string;
  site: string;
};

export type AnimeBase = IdBase & {
  title: Title;
  description: string | null;
  format: string | null;
  episodes: number | null;
  genres: string[];
  status: string;
  isAdult: boolean;
  startDate: DateParts;
  endDate: DateParts;
};


export type Anime = AnimeBase & {
  coverImage: CoverImage;
};

export type AnimeCarousel = AnimeBase & {
  bannerImage: string;
};

export type AnimeInfo = AnimeBase & {
  coverImage: CoverImage;
  duration: number | null;
  staff: Person [];
  characters: Person[];
  streamingEpisodes: StreamingEpisodes[];
};
