import { Link, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectFilms } from "../../app/app.select.ts";
import FilmCard from "../FilmCard/FilmCard.tsx";
import { Button } from "@mui/material";

const FilmPage = () => {
  const [searchParams] = useSearchParams();
  const films = useSelector(selectFilms);
  const filmId = searchParams.get("id");
  const film = films.find((f) => f.id === filmId);
  return (
    <div>
      {film ? <FilmCard film={film} /> : "not found"}
      <Link to={"/"}>
        <Button variant="contained">Go to main</Button>
      </Link>
    </div>
  );
};

export default FilmPage;
