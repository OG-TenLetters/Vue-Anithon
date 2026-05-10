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
  }
};

type StreamingEpisodes = {
  url: string | null;
  site: string | null;
};

export type AnimeTopResponse = {
  Page: {
    media: {
      id: number;
      idMal: number;
      title: Title;
      format: string | null;
      episodes: number | null;
      coverImage: CoverImage;
    }[];
  };
};

export type AnimeBaseResponse = IdBase & {
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


export type AnimeInfoQuery = {
  Media: AnimeInfoResponse
}

export type AnimeInfoResponse = AnimeBaseResponse & {
    coverImage: CoverImage;
    averageScore: number | null;
    synonyms: string[] | null;
    duration: number | null;
    studios: {
      nodes: {
        name: string | null;
      }[];
    }
    staff: {
      nodes: Person[];
    };
    characters: {
      nodes: Person[];
    };
    streamingEpisodes: StreamingEpisodes[];
};
