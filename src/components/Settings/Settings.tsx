import AddNewFilm from "../NewFilm/AddNewFilm.tsx";
import s from "./Settings.module.scss";
import { Search } from "../Search/Search.tsx";
import { BasicTable } from "../Sort/BasicTable.tsx";
import FilterByDuration from "../Filter/FilterByDuration.tsx";
import { Button } from "@mui/material";
import { useAppDispatch } from "../../hooks/useAppDispatch.ts";
import { appActions } from "../../app/app.slice.ts";

const Settings = () => {
  const dispatch = useAppDispatch();

  const clearFilter = () => {
    dispatch(appActions.clearAllFilters());
  };
  return (
    <div className={s.settings}>
      <AddNewFilm />
      <Search />
      <BasicTable />
      <FilterByDuration />
      <Button sx={{ height: 40 }} onClick={clearFilter} variant="contained">
        Reset filter
      </Button>
    </div>
  );
};

export default Settings;
