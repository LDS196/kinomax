import s from "./commentItem.module.scss";
import { CommentType } from "../../../data/films.ts";

type Props = {
  comment: CommentType;
};
const CommentItem = ({ comment }: Props) => {
  const { content, author } = comment;
  return (
    <div className={s.comment}>
      <span>Author: {author}</span>
      <p>Comment: {content}</p>
    </div>
  );
};

export default CommentItem;
