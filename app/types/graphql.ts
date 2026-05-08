export type GraphQLRequest = { query: string; variables?: Record<string, any> };
export type GraphQLResponse<T> = { data: T };

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
  year: number | null;
  month: number | null;
  day: number | null;
};

type Name = {
  native: string;
  full: string;
};

type Person = {
  name: Name;
  image: string;
};


type StreamingEpisodes = {
    url: string | null;
    site: string | null;
}

type AnimeBaseResponse = IdBase & {
  title: Title;
  format: string | null;
  status: string | null;
  description: string | null;
  episodes: number | null;
  genres: string[] | null;
  isAdult: boolean;
  startDate: DateParts;
  endDate: DateParts;
};

export type AnimeCardResponse = {
  Page: {
    media: (AnimeBaseResponse & {
      coverImage: CoverImage;
    })[];
  };
};

export type AnimeCarouselResponse = {
  Page: {
    media: (AnimeBaseResponse & {
      banner: string | null;
    })[];
  };
};

export type AnimeInfoResponse = {
  Media: AnimeBaseResponse & {
    coverImage: CoverImage;
    duration: number | null;
    staff: {
      nodes: Person[];
    };
    characters: {
      nodes: Person[];
    };
    streamingEpisodes: StreamingEpisodes[];
  }
};
