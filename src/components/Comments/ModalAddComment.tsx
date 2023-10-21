import { FC } from "react";
import { Button, Paper, TextField, Typography } from "@mui/material";
import { v1 } from "uuid";
import { useForm } from "react-hook-form";
import CloseIcon from "@mui/icons-material/Close";
import s from "../NewFilm/Modal.module.scss";
import { CommentType } from "../../data/films.ts";

type PropsType = {
  hideModalAddComment: () => void;
  addComment: (comment: CommentType) => void;
};

type FormType = {
  author: string;
  content: string;
};
export const ModalAddComment: FC<PropsType> = ({ hideModalAddComment, addComment }) => {
  const { register, handleSubmit } = useForm<FormType>({
    defaultValues: {
      author: "",
      content: "",
    },
    mode: "onChange",
  });
  const onSubmit = (data: FormType) => {
    const comment = {
      id: v1(),
      content: data.content,
      author: data.author,
    };
    addComment(comment);
    hideModalAddComment();
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
              Add new comment
            </Typography>
            <button onClick={hideModalAddComment}>
              <CloseIcon />
            </button>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
            <TextField
              {...register("author", {
                required: "Required field",
              })}
              fullWidth
              id="author"
              label="Author"
              name="author"
            />
            <TextField
              {...register("content", {
                required: "Required field",
              })}
              fullWidth
              id="content"
              label="Content"
              name="content"
            />

            <div className={s.modalButtons}>
              <Button onClick={hideModalAddComment} variant="outlined" sx={{ mt: 3, mb: 2 }}>
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
