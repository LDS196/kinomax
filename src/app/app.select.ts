import { RootState } from "./store.ts";

export const selectFilms = (state: RootState) => state.app.films;
export const selectSearchValue = (state: RootState) => state.app.searchValue;
export const selectSortBy = (state: RootState) => state.app.sortBy;
export const selectFilterByDuration = (state: RootState) => state.app.filterByDuration;
