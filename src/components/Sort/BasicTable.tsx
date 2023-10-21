import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useSelector } from "react-redux";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import s from "./BasicTable.module.scss";
import { selectSortBy } from "../../app/app.select.ts";
import { useAppDispatch } from "../../hooks/useAppDispatch.ts";
import { appActions } from "../../app/app.slice.ts";

export const BasicTable = () => {
  const sortBy = useSelector(selectSortBy);
  const dispatch = useAppDispatch();

  const sortItems = (name: string) => {
    if (sortBy.sortType === null) {
      dispatch(appActions.sortFilms({ name: name, sortType: -1 }));
      return;
    }
    if (sortBy.sortType === -1) {
      dispatch(appActions.sortFilms({ name: name, sortType: 1 }));
      return;
    }
    if (sortBy.sortType === 1) {
      dispatch(appActions.sortFilms({ name: name, sortType: -1 }));
      return;
    }
  };

  return (
    <Table sx={{ maxWidth: 400 }}>
      <TableHead>
        <TableRow>
          <TableCell
            size={"small"}
            onClick={() => sortItems("title")}
            style={{ cursor: "pointer" }}
          >
            <div className={s.sortBy}>
              <span>Title</span>
              <span className={s.arrow}>
                {sortBy.name === "title" && sortBy.sortType === -1 && <ArrowDropDownIcon />}
                {sortBy.name === "title" && sortBy.sortType === 1 && <ArrowDropUpIcon />}
              </span>
            </div>
          </TableCell>
          <TableCell
            size={"small"}
            onClick={() => sortItems("rating")}
            style={{ cursor: "pointer" }}
          >
            <div className={s.sortBy}>
              <span>Rating</span>
              <span className={s.arrow}>
                {sortBy.name === "rating" && sortBy.sortType === -1 && <ArrowDropDownIcon />}
                {sortBy.name === "rating" && sortBy.sortType === 1 && <ArrowDropUpIcon />}
              </span>
            </div>
          </TableCell>
          <TableCell size={"small"} onClick={() => sortItems("year")} style={{ cursor: "pointer" }}>
            <div className={s.sortBy}>
              <span>Year</span>
              <span className={s.arrow}>
                {sortBy.name === "year" && sortBy.sortType === -1 && <ArrowDropDownIcon />}
                {sortBy.name === "year" && sortBy.sortType === 1 && <ArrowDropUpIcon />}
              </span>
            </div>
          </TableCell>
        </TableRow>
      </TableHead>
    </Table>
  );
};
