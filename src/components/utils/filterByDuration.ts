import { FilmType } from "../../data/films.ts";

export function filterFilmsByDuration(films: FilmType[], filterDuration: number | null) {
  const middleDuration = 90;
  if (filterDuration) {
    if (filterDuration >= middleDuration) {
      return films.filter((f) => f.duration >= filterDuration);
    } else {
      return films.filter((f) => f.duration < filterDuration);
    }
  }
  return films;
}
