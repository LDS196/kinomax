import s from "./comments.module.scss";

import CommentItem from "./CommentItem/CommentItem";
import { CommentType } from "../../data/films.ts";

type Props = {
  comments: CommentType[];
};
const Comments = ({ comments }: Props) => {
  const commentsForRender = comments.map((c) => <CommentItem key={c.id} comment={c} />);

  return <div className={s.container}>{commentsForRender}</div>;
};

export default Comments;
