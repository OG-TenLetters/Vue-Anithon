import type {
  AnimeBase,
  Anime,
  AnimeCarousel,
  AnimeInfo,
} from "~/types/animeFromAnilist";

import type {
  AnimeCardResponse,
  GraphQLRequest,
  GraphQLResponse,
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


  const mapAnimeBase = (a: any): AnimeBase => {
    const title = {
      native: a.title?.native ?? null,
      english: a.title?.english ?? null,
      romaji: a.title?.romaji ?? null,
    };
    const startDate = {
      year: a.startDate?.year ?? null,
      month: a.startDate?.month ?? null,
      day: a.startDate?.day ?? null,
    };
    const endDate = {
      year: a.endDate?.year ?? null,
      month: a.endDate?.month ?? null,
      day: a.endDate?.day ?? null,
    };

    return {
      id: a.id ?? 0,
      idMal: a.idMal ?? 0,
      title,
      description: a.description ?? null,
      format: a.format ?? null,
      episodes: a.episodes ?? null,
      genres: a.genres ?? [],
      status: a.status ?? null,
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
    };
  };

  const mapAnimeInfo = (a: any): AnimeInfo => {
    const coverImage = {
      medium: a.coverImage?.medium ?? null,
      large: a.coverImage?.large ?? null,
      extraLarge: a.coverImage?.extraLarge ?? null,
    };
    const mapName = (n: any) => ({
      native: n?.native ?? null,
      full: n?.full ?? null,
    });

    const staff = a.staff?.nodes?.map((s: any) => ({
      name: mapName(s.name),
      image: s.image?.medium ?? null,
    }));

    const characters = a.characters?.nodes?.map((c: any) => ({
      name: mapName(c.name),
      image: c.image?.medium ?? null,
    }));

    const mapStreamingEpisodes = (sE: any) => ({
      url: sE?.url ?? null,
      site: sE?.site ?? null,
    });

    const streamingEpisodes =
      a.streamingEpisodes?.map(mapStreamingEpisodes) ?? [];

    return {
      ...mapAnimeBase(a),
      duration: a.duration ?? null,
      coverImage,
      staff,
      characters,
      streamingEpisodes,
    };
  };

  const getAnime = async (): Promise<Anime[]> => {
    const query = `
    query {
  Page(perPage: 12, page: 3) {
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
  const getAnimeById = async (id: number): Promise<Anime> => {
    const res: any = await anilist(`/anime/${id}`);
    return res.data.map(mapAnimeInfo);
  };

  return {
    getAnime,
  }
};
