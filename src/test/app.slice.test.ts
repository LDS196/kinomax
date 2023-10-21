import { appActions, AppInitialStateType, appReducer } from "../app/app.slice.ts";
import { FilmType } from "../data/films.ts";

let filmsData: FilmType[];
const comment = {
  id: "5",
  author: "Tom",
  content: "life",
};
const film = {
  id: "3",
  title: "3",
  description: "33",
  posters: "",
  rating: 1,
  duration: 5,
  comments: [{ id: "1", author: "mother", content: "mother" }],
  year: 203,
};
let startState: AppInitialStateType;
beforeEach(() => {
  filmsData = [
    {
      id: "1",
      title: "1",
      description: "11",
      posters: "",
      rating: 3,
      duration: 10,
      comments: [{ id: "1", author: "mother", content: "mother" }],
      year: 2000,
    },
    {
      id: "2",
      title: "2",
      description: "22",
      posters: "",
      rating: 5,
      duration: 10,
      comments: [{ id: "1", author: "mother", content: "mother" }],
      year: 2000,
    },
  ];
  startState = {
    filterByDuration: null,
    searchValue: "",
    films: filmsData,
    sortBy: {
      name: "",
      sortType: null,
    },
  };
});

test("must be add new film", () => {
  const endState = appReducer(startState, appActions.addNewFilm({ film }));
  expect(endState.films[0].title).toBe("3");
});
test("must be set correct rating", () => {
  const endState = appReducer(startState, appActions.setRating({ id: "1", rating: 5 }));
  expect(endState.films[0].rating).toBe(5);
});
test("must be add new comment in correct film", () => {
  const endState = appReducer(startState, appActions.addNewComment({ id: "1", comment }));
  expect(endState.films[0].comments[0].author).toBe("Tom");
  expect(endState.films[0].comments.length).toBe(2);
});
