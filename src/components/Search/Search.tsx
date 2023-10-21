import { ChangeEvent } from "react";
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useAppDispatch } from "../../hooks/useAppDispatch.ts";
import { appActions } from "../../app/app.slice.ts";
import { useSelector } from "react-redux";
import { selectSearchValue } from "../../app/app.select.ts";

export const Search = () => {
  const searchValue = useSelector(selectSearchValue);
  const dispatch = useAppDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    dispatch(appActions.searchFilm({ value }));
  };

  return (
    <div>
      <TextField
        onChange={handleChange}
        value={searchValue}
        sx={{ minWidth: "250px" }}
        // size={"small"}
        id="search"
        name="search"
        placeholder={"Provide your text"}
        InputProps={{
          style: { height: "40px" },
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};
