import s from "./Films.module.scss";
import { useSelector } from "react-redux";
import {
  selectFilms,
  selectFilterByDuration,
  selectSearchValue,
  selectSortBy,
} from "../../app/app.select.ts";
import FilmCard from "../FilmCard/FilmCard.tsx";
import Settings from "../Settings/Settings.tsx";
import { sortByNameAndDirection } from "../utils/sortByNameAndDirection.ts";
import { filterFilmsByDuration } from "../utils/filterByDuration.ts";
import { useMemo } from "react";

const Films = () => {
  const searchValue = useSelector(selectSearchValue);
  const filterByDuration = useSelector(selectFilterByDuration);
  const sortBy = useSelector(selectSortBy);
  let films = useSelector(selectFilms);
  //search film, if we have some condition
  films = useMemo(() => {
    return films.filter((f) => f.title.toLowerCase().includes(searchValue.toLowerCase()));
  }, [searchValue, films]);

  //filter film, if we have some condition
  films = useMemo(() => {
    return filterFilmsByDuration(films, filterByDuration);
  }, [filterByDuration, films]);

  //sort film, if we have some condition
  films = useMemo(() => {
    return sortByNameAndDirection(films, sortBy);
  }, [sortBy, films]);

  const filmsForRender = films.map((f) => (
    <li key={f.id}>
      <FilmCard film={f} />
    </li>
  ));

  return (
    <div className={s.container}>
      <h1>Kinomax</h1>
      <div className={s.settings}>
        <Settings />
      </div>
      <ul className={s.list}>{filmsForRender}</ul>
    </div>
  );
};

export default Films;
