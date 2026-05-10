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

export type Person = {
  name: Name;
  image: string
};

type Studio = {
  name: string;
};

type CoverImage = {
  medium: string;
  large: string;
  extraLarge: string;
};

type DateParts = {
  month: number;
  day: number;
  year: number;
};

type StreamingEpisodes = {
  url: string;
  site: string;
};

export type AnimeTop = IdBase & {
  title: Title;
  format: string;
  episodes: number;
  coverImage: CoverImage;
};

export type AnimeBase = IdBase & {
  title: Title;
  description: string;
  format: string;
  episodes: number;
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
  averageScore: number;
};

export type AnimeInfo = AnimeBase & {
  coverImage: CoverImage;
  averageScore: number;
  synonyms: string[];
  duration: number;
  studios: Studio[];
  staff: Person[];
  characters: Person[];
  streamingEpisodes: StreamingEpisodes[];
};

