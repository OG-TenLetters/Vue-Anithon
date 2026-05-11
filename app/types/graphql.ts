export type GraphQLRequest = { query: string; variables?: Record<string, any> };
export type GraphQLResponse<T> = {
  data: T;
  errors?: { message: string }[];
};

export type PageMedia<T> = {
  Page: {
    media: T[];
  };
};

type Media<T> = {
  Media: T;
};

type IdBase = {
  id: number;
  idMal: number;
};

type Title = {
  romaji: string;
  english: string | null;
  native: string;
};

type CoverImage = {
  medium: string | null;
  large: string | null;
  extraLarge: string | null;
};

type DateParts = {
  month: number | null;
  day: number | null;
  year: number | null;
};

type Name = {
  native: string;
  full: string;
};

type Person = {
  name: Name;
  image: {
    medium: string | null;
  };
};

type StreamingEpisodes = {
  url: string;
  site: string;
};

export type AnimeBaseResponse = IdBase & {
  title: Title;
  format: string | null;
  status: string | null;
  description: string | null;
  episodes: number | null;
  genres: string[];
  isAdult: boolean;
  startDate: DateParts;
  endDate: DateParts;
};

export type AnimeTopResponse = {
  id: number;
  idMal: number;
  title: Title;
  format: string | null;
  episodes: number | null;
  coverImage: CoverImage;
};

export type AnimeCardResponse = AnimeBaseResponse & {
  coverImage: CoverImage;
};

export type AnimeCarouselResponse = AnimeBaseResponse & {
  bannerImage: string | null;
  averageScore: number | null;
};

export type AnimeInfoResponse = AnimeBaseResponse & {
  coverImage: CoverImage;
  averageScore: number | null;
  synonyms: string[];
  duration: number | null;
  studios: {
    nodes: {
      name: string | null;
    }[];
  };
  staff: {
    nodes: Person[];
  };
  characters: {
    nodes: Person[];
  };
  streamingEpisodes: StreamingEpisodes[];
};

export type AnimeTopQuery = PageMedia<AnimeTopResponse>;
export type AnimeCardQuery = PageMedia<AnimeCardResponse>;
export type AnimeCarouselQuery = PageMedia<AnimeCarouselResponse>;
export type AnimeInfoQuery = Media<AnimeInfoResponse>;
