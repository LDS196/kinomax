import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CommentType, filmsData, FilmType } from "../data/films.ts";

const initialState = {
  filterByDuration: null as null | number,
  searchValue: "",
  films: filmsData,
  sortBy: {
    name: "",
    sortType: null as null | number,
  },
};
export type AppInitialStateType = typeof initialState;
const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    clearAllFilters: (state) => {
      state.filterByDuration = null;
      state.sortBy.sortType = null;
      state.sortBy.name = "";
      state.searchValue = "";
    },
    addNewFilm: (state, action: PayloadAction<{ film: FilmType }>) => {
      state.films.unshift(action.payload.film);
    },
    setFilter: (state, action: PayloadAction<{ value: number }>) => {
      state.filterByDuration = action.payload.value;
    },

    sortFilms: (state, action: PayloadAction<{ name: string; sortType: number }>) => {
      state.sortBy = action.payload;
    },
    searchFilm: (state, action: PayloadAction<{ value: string }>) => {
      state.searchValue = action.payload.value;
    },
    setRating: (state, action: PayloadAction<{ id: string; rating: number | null }>) => {
      const film = state.films.find((f) => f.id === action.payload.id);
      if (film) {
        film.rating = action.payload.rating;
      }
    },
    addNewComment: (state, action: PayloadAction<{ id: string; comment: CommentType }>) => {
      const film = state.films.find((f) => f.id === action.payload.id);
      if (film) {
        film.comments.unshift(action.payload.comment);
      }
    },
  },
});
export const appActions = slice.actions;
export const appReducer = slice.reducer;
