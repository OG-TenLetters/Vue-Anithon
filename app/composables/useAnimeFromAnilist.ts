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
  AnimeCardQuery,
  AnimeCarouselQuery,
  AnimeTopQuery,
  PageMedia,
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
  const extractMedia = <T>(res: GraphQLResponse<PageMedia<T>>) => {
    return res.data.Page.media;
  };

console.log("API URL:", config.public.apiAnilistUrl);

  const mapAnimeTop = (a: AnimeTopResponse): AnimeTop => {
    const title = {
      native: a.title?.native ?? "",
      english: a.title?.english ?? "",
      romaji: a.title?.romaji ?? "",
    };
    const coverImage = {
      medium: a.coverImage?.medium ?? "",
      large: a.coverImage?.large ?? "",
      extraLarge: a.coverImage?.extraLarge ?? "",
    };

    return {
      id: a.id ?? 0,
      idMal: a.idMal ?? 0,
      title,
      format: a.format ?? "",
      episodes: a.episodes ?? 0,
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
  const mapAnime = (a: AnimeCardResponse): Anime => {
    const coverImage = {
      medium: a.coverImage?.medium ?? "",
      large: a.coverImage?.large ?? "",
      extraLarge: a.coverImage?.extraLarge ?? "",
    };

    return {
      ...mapAnimeBase(a),
      coverImage,
    };
  };
  const mapAnimeCarousel = (a: AnimeCarouselResponse): AnimeCarousel => {
    return {
      ...mapAnimeBase(a),
      bannerImage: a.bannerImage ?? "",
      averageScore: a.averageScore ?? 0,
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
    const fullQuery = `
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
    const fetchAnimeInfo = () => anilist<AnimeInfoQuery>(fullQuery);
    const res = await fetchAnimeInfo();
    return mapAnimeInfo(res.data.Media);
  };
  const getAnime = async (perPage: number, page: number): Promise<Anime[]> => {
    const generalQuery = `
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
    const fetchAnime = () => anilist<AnimeCardQuery>(generalQuery);
    const res = await fetchAnime();
    return extractMedia(res).map(mapAnime);
  };
  const getCarouselAnime = async (
    perPage: number,
    page: number,
  ): Promise<AnimeCarousel[]> => {
    const carouselQuery = `
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
    const fetchCarouselAnime = () => anilist<AnimeCarouselQuery>(carouselQuery);
    const res = await fetchCarouselAnime();
    return extractMedia(res).map(mapAnimeCarousel);
  };
  const getTopAnime = async (
    perPage: number,
    page: number,
  ): Promise<AnimeTop[]> => {
    const topQuery = `
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
    const fetchTopAnime = () => anilist<AnimeTopQuery>(topQuery);
    const res = await fetchTopAnime();
    return extractMedia(res).map(mapAnimeTop);
  };

  return {
    getAnime,
    getCarouselAnime,
    getTopAnime,
    getByIdAnime,
  };
};
