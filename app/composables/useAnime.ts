import type { Anime } from "~/types/anime";
export const useAnime = () => {
  const config = useRuntimeConfig();
  const jikan = $fetch.create({
    baseURL: config.public.apiJikanUrl,
  });

  const mapAnime = (a: any): Anime => {
    const images = {
      small:
        a.images?.webp?.small_image_url ??
        a.images?.jpg?.small_image_url ??
        null,
      medium: a.images?.webp?.image_url ?? a.images?.jpg?.image_url ?? null,
      large:
        a.images?.webp?.large_image_url ??
        a.images?.jpg?.large_image_url ??
        null,
    };
    const title = (
      a.title_english ??
      a.title ??
      a.title_japanese ??
      "Unknown"
    ).trim();

    return {
      id: a.mal_id,
      title,
      images,
      episodes: a.episodes ?? null,
      type: a.type ?? null,
      genres: a.genres?.map((g: any) => g.name) ?? [],
      status: a.status ?? null,
      synopsis: a.synopsis ?? null,
      rating: a.rating ?? null,
      aired: a.aired?.string ?? null,
    };
  };

  const getAnime = async (): Promise<Anime[]> => {
    // const res: any = await $fetch(`${config.public.apiJikanUrl}/anime`);  OLD WAY
    const res: any = await jikan("/anime?page=1&limit=12");
    return res.data.map(mapAnime);
  };
  const getAnimeById = async (id: number): Promise<Anime> => {
    const res: any = await jikan(`/anime/${id}`);
    return res.data.map(mapAnime);
  };
  const getGenreAnime = async (genre: string): Promise<Anime[]> => {
    const res: any = await jikan(`/anime/genres/anime/${genre}`);
    return res.data.map(mapAnime);
  };
  const getRecommendedAnime = async (): Promise<Anime[]> => {
    const res: any = await jikan("/anime?page=12&limit=6");
    return res.data.map(mapAnime);
  };
  const getSearchAnime = async (searchValue: string): Promise<Anime[]> => {
    const res: any = await jikan(`/anime?q=${searchValue}&limit=25`);
    return res.data.map(mapAnime);
  };
  const getTopAnime = async (): Promise<Anime[]> => {
    const res: any = await jikan("/top/anime?page=1&limit=10");
    return res.data.map(mapAnime);
  };
  return {
    getAnime,
    getAnimeById,
    getGenreAnime,
    getRecommendedAnime,
    getSearchAnime,
    getTopAnime,
  };
};
