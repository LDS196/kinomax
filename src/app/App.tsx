import "./App.css";
import { Route, Routes } from "react-router-dom";
import Films from "../components/Films/Films.tsx";
import FilmPage from "../components/FilmPage/FilmPage.tsx";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path={"/"} element={<Films />} />
        <Route path={"/film"} element={<FilmPage />} />
        {/*<Route path={"*"} element={<NotFound />} />*/}
      </Routes>
    </div>
  );
}

export default App;
