import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useAppDispatch } from "../../hooks/useAppDispatch.ts";
import { appActions } from "../../app/app.slice.ts";
import { useSelector } from "react-redux";
import { selectFilterByDuration } from "../../app/app.select.ts";

const FilterByDuration = () => {
  const dispatch = useAppDispatch();
  const filterByDuration = useSelector(selectFilterByDuration);

  const handleChange = (event: SelectChangeEvent) => {
    const value = event.target.value as string;
    dispatch(appActions.setFilter({ value: +value }));
  };
  return (
    <FormControl style={{ minWidth: "180px", height: "40px" }}>
      <InputLabel style={{ top: "-8px" }} id="demo-simple-select-label">
        Filter by duration
      </InputLabel>
      <Select
        style={{ height: "40px" }}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={filterByDuration ? String(filterByDuration) : ""}
        label="Filter by duration"
        onChange={handleChange}
      >
        <MenuItem value={89}>Less than 90 min</MenuItem>
        <MenuItem value={90}>More than 90 min</MenuItem>
      </Select>
    </FormControl>
  );
};

export default FilterByDuration;
