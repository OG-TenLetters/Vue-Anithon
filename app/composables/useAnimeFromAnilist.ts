import type {
  AnimeBase,
  Anime,
  AnimeCarousel,
  AnimeInfo,
  AnimeTop,
} from "~/types/animeFromAnilist";

import type {
  AnimeCarouselResponse,
  AnimeCardResponse,
  GraphQLResponse,
  AnimeTopResponse,
  AnimeInfoResponse,
  AnimeBaseResponse,
  AnimeInfoQuery,
} from "~/types/graphql";

export const useAnimeFromAnilist = () => {
  const config = useRuntimeConfig();
  const anilist = async <T>(query: string) => {
    return $fetch<GraphQLResponse<T>>(config.public.apiAnilistUrl, {
      method: "POST",
      body: {
        query,
      },
    });
  };

  const mapAnimeTop = (a: any): AnimeTop => {
    const title = {
      native: a.title?.native ?? null,
      english: a.title?.english ?? null,
      romaji: a.title?.romaji ?? null,
    };
    const coverImage = {
      medium: a.coverImage?.medium ?? null,
      large: a.coverImage?.large ?? null,
      extraLarge: a.coverImage?.extraLarge ?? null,
    };

    return {
      id: a.id ?? 0,
      idMal: a.idMal ?? 0,
      title,
      format: a.format ?? null,
      episodes: a.episodes ?? null,
      coverImage,
    };
  };

  const mapAnimeBase = (a: AnimeBaseResponse): AnimeBase => {
    const stripHtml = (html: string | null) =>
      html?.replace(/<[^>]*>/g, "") ?? "";

    const title = {
      native: a.title?.native ?? "",
      english: a.title?.english ?? "",
      romaji: a.title?.romaji ?? "",
    };
    const startDate = {
      year: a.startDate?.year ?? 0,
      month: a.startDate?.month ?? 0,
      day: a.startDate?.day ?? 0,
    };
    const endDate = {
      year: a.endDate?.year ?? 0,
      month: a.endDate?.month ?? 0,
      day: a.endDate?.day ?? 0,
    };

    return {
      id: a.id ?? 0,
      idMal: a.idMal ?? 0,
      title,
      description: stripHtml(a.description),
      format: a.format ?? "",
      episodes: a.episodes ?? 0,
      genres: a.genres ?? [],
      status: a.status ?? "",
      isAdult: a.isAdult ?? false,
      startDate,
      endDate,
    };
  };

  const mapAnime = (a: any): Anime => {
    const coverImage = {
      medium: a.coverImage?.medium ?? null,
      large: a.coverImage?.large ?? null,
      extraLarge: a.coverImage?.extraLarge ?? null,
    };

    return {
      ...mapAnimeBase(a),
      coverImage,
    };
  };

  const mapAnimeCarousel = (a: any): AnimeCarousel => {
    return {
      ...mapAnimeBase(a),
      bannerImage: a.bannerImage ?? null,
      averageScore: a.averageScore ?? null,
    };
  };

  const mapAnimeInfo = (a: AnimeInfoResponse): AnimeInfo => {
    const coverImage = {
      medium: a.coverImage?.medium ?? "",
      large: a.coverImage?.large ?? "",
      extraLarge: a.coverImage?.extraLarge ?? "",
    };
    const mapName = (n: any) => ({
      native: n?.native ?? "",
      full: n?.full ?? "",
    });

    const staff =
      a.staff?.nodes?.map((s: any) => ({
        name: mapName(s.name),
        image: s.image?.medium ?? "",
      })) ?? [];

    const characters =
      a.characters?.nodes?.map((c: any) => ({
        name: mapName(c.name),
        image: c.image?.medium ?? "",
      })) ?? [];

    const studios =
      a.studios?.nodes?.map((s: any) => ({
        name: s.name ?? "",
      })) ?? [];

    const mapStreamingEpisodes = (sE: any) => ({
      url: sE?.url ?? "",
      site: sE?.site ?? "",
    });

    const streamingEpisodes =
      a.streamingEpisodes?.map(mapStreamingEpisodes) ?? [];

    return {
      ...mapAnimeBase(a),
      duration: a.duration ?? 0,
      averageScore: a.averageScore ?? 0,
      synonyms: a.synonyms ?? [],
      studios,
      coverImage,
      staff,
      characters,
      streamingEpisodes,
    };
  };

  const getByIdAnime = async (
    id: number,
    idMal: number,
  ): Promise<AnimeInfo> => {
    const query = `
    query InfoCard {
    Media(type: ANIME, id:${id}, idMal:${idMal}) {
      id
      idMal
      title {
        english
        native
        romaji
      }
      format
      status
      description
      season
      episodes
      duration
      synonyms
      genres
      isAdult
      studios {
        nodes {
          name
        }
      }
      coverImage {
        large
        medium
        extraLarge
      }
      startDate {
        year
        month
        day
      }
      endDate {
        year
        month
        day
      }
      streamingEpisodes {
        url
        site
      }
      characters (sort: RELEVANCE, perPage: 27 ) {
        nodes {
          name {
            native
            full
          }
          image {
            medium
          }
        }
      }
      staff (sort: [RELEVANCE]) {
        nodes {
          name {
            full
            native
          }
          image {
            medium
          }
          gender
          characters (sort: [ID]) {
            nodes {
              name {
                full
                native
              }
              image {
                medium
              }
            }
          }
        }
      }


    }
}
    `;
    const res = await anilist<AnimeInfoQuery>(query);
    const mapped = mapAnimeInfo(res.data.Media);

    return mapped;
  };

  const getAnime = async (perPage: number, page: number): Promise<Anime[]> => {
    const query = `
    query GeneralAnime {
  Page(perPage: ${perPage}, page: ${page}) {
    media(type: ANIME, sort: [POPULARITY_DESC]) {
      id
      idMal
      title {
        romaji
        english
        native
      }
      format
      status
      description
      episodes
      genres
      isAdult
      coverImage {
        large
        medium
        extraLarge
      }
      startDate {
        year
        month
        day
      }
      endDate {
        year
        month
        day
      }


    }
  }
}
    `;
    const res = await anilist<AnimeCardResponse>(query);
    return res.data.Page.media.map(mapAnime);
  };

  const getCarouselAnime = async (
    perPage: number,
    page: number,
  ): Promise<AnimeCarousel[]> => {
    const query = `
    query {
  
  Page(perPage: ${perPage}, page: ${page}) {
    media(type: ANIME, sort: [POPULARITY_DESC]) {
      id
      idMal
      title {
        romaji
        english
        native
      }
      format
      averageScore
      status
      description
      episodes
      genres
      isAdult
      bannerImage 
      startDate {
        year
      }
      endDate {
        year
      }
    }
  }
}
    `;
    const res = await anilist<AnimeCarouselResponse>(query);
    return res.data.Page.media.map(mapAnimeCarousel);
  };

  const getTopAnime = async (
    perPage: number,
    page: number,
  ): Promise<AnimeTop[]> => {
    const query = `
    query topAnime {
  Page (perPage: ${perPage}, page: ${page}) {
  media(type: ANIME, sort: [TRENDING_DESC]) {
    id
    idMal
    isAdult
    title {
      native
      english
      romaji
    }
    format
    episodes
    coverImage {
      extraLarge
      large
      medium
      color
    }
  }
  }
}
    `;
    const res = await anilist<AnimeTopResponse>(query);
    return res.data.Page.media.map(mapAnimeTop);
  };

  return {
    getAnime,
    getCarouselAnime,
    getTopAnime,
    getByIdAnime,
  };
};
