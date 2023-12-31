import { ChangeEvent, FC, useState } from "react";
import { Button, Typography } from "@mui/material";

import defaultCover from "../../assets/images/plug.jpeg";
import s from "./InputTypeFile.module.scss";
import { convertFileToBase64 } from "../../utils/conver-file-to-base64.ts";

type PropsType = {
  title: string;
  nameButton: string;
  callback: (value: string) => void;
  cover: string | undefined;
};
export const InputTypeFile: FC<PropsType> = (props) => {
  const [errorImg, setErrorImg] = useState("");
  const { title, cover, nameButton, callback } = props;

  const [isAvaBroken, setIsAvaBroken] = useState(false);

  const uploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0];
      if (file.size < 100000) {
        setErrorImg("");
        convertFileToBase64(file, (file64: string) => {
          if (!isAvaBroken) {
            callback(file64);
          }
        });
      } else {
        setErrorImg("Max size of image 100kb.");
      }
    }
  };

  const errorHandler = () => {
    setIsAvaBroken(true);
    alert("Кривая картинка");
  };

  return (
    <div className={s.cover}>
      <label className={s.label}>
        <input type="file" accept="image/*" onChange={uploadHandler} style={{ display: "none" }} />
        <Button size={"small"} variant="contained" component="span">
          {nameButton}
        </Button>
        <Typography component="p" sx={{ fontSize: "16px" }}>
          {title}
        </Typography>
      </label>
      <div className={s.coverImg}>
        <img src={cover?.length !== 0 ? cover : defaultCover} onError={errorHandler} alt="ava" />
      </div>
      <div className={s.error}>{errorImg}</div>
    </div>
  );
};
