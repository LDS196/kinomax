import { FilmType } from "../data/films.ts";

export function sortByNameAndDirection(
  array: FilmType[],
  sortBy: { name: string; sortType: number | null },
) {
  if (sortBy.name && sortBy.sortType) {
    const key = sortBy.name;
    const sortDirection = sortBy.sortType;
    const newArr = [...array];
    return newArr.sort((a, b) => {
      if (key !== "title") {
        // проверка, если рейтинг равен null, тогда он равен 0
        if (!a[key]) return (0 - b[key]) * sortDirection;
        if (!b[key]) return (a[key] - 0) * sortDirection;
        else return (a[key] - b[key]) * sortDirection;
      }
      if (a[key].toLowerCase() < b[key].toLowerCase()) return -1 * sortDirection;
      if (a[key].toLowerCase() > b[key].toLowerCase()) return sortDirection;
      return 0;
    });
  }
  return array;
}
