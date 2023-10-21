import { Button } from "@mui/material";
import Comments from "./Comments.tsx";
import { useState } from "react";
import { CommentType } from "../../data/films.ts";
import { ModalAddComment } from "./ModalAddComment.tsx";
import { useAppDispatch } from "../../hooks/useAppDispatch.ts";
import { appActions } from "../../app/app.slice.ts";

type Props = {
  filmId: string;
  comments: CommentType[];
};
const CommentsBlock = ({ comments, filmId }: Props) => {
  const [isShowComments, setIsShowComments] = useState(false);
  const [isShowModalComment, setIsShowModalComment] = useState(false);
  const dispatch = useAppDispatch();
  const hideComments = () => {
    setIsShowComments(false);
  };
  const showComments = () => {
    setIsShowComments(true);
  };
  const hideModalComment = () => {
    setIsShowModalComment(false);
  };
  const showModalComment = () => {
    setIsShowModalComment(true);
  };

  const addComment = (comment: CommentType) => {
    dispatch(appActions.addNewComment({ id: filmId, comment }));
  };

  return (
    <div>
      {!isShowComments && (
        <Button onClick={showComments} variant="outlined">
          Show comments
        </Button>
      )}
      {isShowComments && (
        <Button onClick={hideComments} variant="outlined">
          Hide comments
        </Button>
      )}
      {isShowComments && <Comments comments={comments} />}
      {isShowComments && (
        <Button onClick={showModalComment} style={{ marginTop: "10px" }} variant="contained">
          Add comment
        </Button>
      )}
      {isShowModalComment && (
        <ModalAddComment addComment={addComment} hideModalAddComment={hideModalComment} />
      )}
    </div>
  );
};

export default CommentsBlock;
