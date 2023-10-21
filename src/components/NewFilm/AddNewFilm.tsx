import { Button } from "@mui/material";
import { useState } from "react";
import { ModalAddFilm } from "./ModalAddFilm.tsx";

const AddNewFilm = () => {
  const [isShow, setIsShow] = useState(false);
  const showModalAddCard = () => {
    setIsShow(true);
  };
  const hideModalAddCard = () => {
    setIsShow(false);
  };
  return (
    <div>
      <Button sx={{ height: 40 }} onClick={showModalAddCard} variant="contained">
        Add new film
      </Button>
      {isShow && <ModalAddFilm hideModalAddCard={hideModalAddCard} />}
    </div>
  );
};

export default AddNewFilm;
