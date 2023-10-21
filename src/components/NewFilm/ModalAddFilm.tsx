import { FC, useState } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import { v1 } from "uuid";

import { useForm } from "react-hook-form";
import CloseIcon from "@mui/icons-material/Close";
import s from "./Modal.module.scss";
import { InputTypeFile } from "./InputTypeFile.tsx";
import { useAppDispatch } from "../../hooks/useAppDispatch.ts";
import { appActions } from "../../app/app.slice.ts";

type PropsType = {
  hideModalAddCard: () => void;
};

type FormType = {
  title: string;
  description: string;
  rating: string;
  duration: string;
  year: string;
};
export const ModalAddFilm: FC<PropsType> = ({ hideModalAddCard }) => {
  const dispatch = useAppDispatch();
  const [rating, setRating] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setRating(event.target.value as string);
  };

  const [imgFilm, setImgFilm] = useState("");

  const setImgHandler = (value: string) => {
    setImgFilm(value);
  };

  const { register, handleSubmit } = useForm<FormType>({
    defaultValues: {
      title: "",
      description: "",
      rating: "",
      duration: "",
      year: "",
    },
    mode: "onChange",
  });
  const onSubmit = (data: FormType) => {
    const film = {
      id: v1(),
      title: data.title,
      description: data.description,
      posters: imgFilm,
      rating: +data.rating,
      duration: +data.duration,
      comments: [],
      year: +data.year,
    };
    dispatch(appActions.addNewFilm({ film }));
    hideModalAddCard();
  };

  return (
    <div className={s.modalWrapper}>
      <Paper
        elevation={3}
        sx={{
          maxWidth: "350px",
          width: "100%",
        }}
      >
        <div className={s.modal}>
          <div className={s.title}>
            <Typography component="p" sx={{ fontSize: "18px" }}>
              Add new Film
            </Typography>
            <button onClick={hideModalAddCard}>
              <CloseIcon />
            </button>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
            <InputTypeFile
              title={""}
              nameButton={"Add Poster Film"}
              callback={setImgHandler}
              cover={imgFilm}
            />
            <TextField
              {...register("title", {
                required: "Required field",
              })}
              fullWidth
              id="title"
              label="Title"
              name="title"
            />
            <TextField
              {...register("description", {
                required: "Required field",
              })}
              fullWidth
              id="description"
              label="Description"
              name="description"
            />
            <TextField
              {...register("duration", {
                required: "Required field",
              })}
              type={"number"}
              fullWidth
              id="duration"
              label="Duration"
              name="duration"
            />
            <TextField
              {...register("year", {
                required: "Required field",
              })}
              type={"number"}
              fullWidth
              id="year"
              label="Year"
              name="year"
            />

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Rating</InputLabel>
              <Select
                {...register("rating", {
                  required: "Required field",
                })}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={rating}
                label="Rating"
                onChange={handleChange}
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
              </Select>
            </FormControl>

            <div className={s.modalButtons}>
              <Button onClick={hideModalAddCard} variant="outlined" sx={{ mt: 3, mb: 2 }}>
                Cancel
              </Button>
              <Button type="submit" color={"primary"} variant="contained" sx={{ mt: 3, mb: 2 }}>
                Save
              </Button>
            </div>
          </form>
        </div>
      </Paper>
    </div>
  );
};
