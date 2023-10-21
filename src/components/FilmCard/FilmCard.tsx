import s from "./FilmCard.module.scss";
import plug from "../../assets/images/plug.jpeg";
import { FilmType } from "../../data/films.ts";
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";
import CommentsBlock from "../Comments/CommentsBlock.tsx";
import { useAppDispatch } from "../../hooks/useAppDispatch.ts";
import { appActions } from "../../app/app.slice.ts";

type Props = {
  film: FilmType;
};
const FilmCard = ({ film }: Props) => {
  const dispatch = useAppDispatch();

  const setValueRating = (value: number | null) => {
    dispatch(appActions.setRating({ id: film.id, rating: value }));
  };
  return (
    <div className={s.card}>
      <Link to={`/film?id=${film.id}`}>
        <div className={s.img}>
          <img src={film.posters ? film.posters : plug} alt="Poster" />
        </div>
      </Link>
      <div className={s.info}>
        <span className={s.title}>Title: {film.title}</span>
        <p className={s.description}>Description: {film.description}</p>
        <span>Duration: {film.duration} min.</span>
        <span className={s.rating}>
          Rating:
          <Rating
            name="simple-controlled"
            value={film.rating}
            onChange={(_, value) => {
              setValueRating(value);
            }}
          />
        </span>
        <span>Year: {film.year}</span>
        <CommentsBlock filmId={film.id} comments={film.comments} />
      </div>
    </div>
  );
};

export default FilmCard;
