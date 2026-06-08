import { Routes, Route } from "react-router-dom";
import { MovieList, MovieDetails, Search } from "../pages";

const AllRoutes = ({ darkMode }) => {
  console.log("all routes darkMode", darkMode);
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<MovieList category="now_playing" darkMode={darkMode} />}
        />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route
          path="/movies/popular"
          element={<MovieList category="popular" darkMode={darkMode} />}
        />
        <Route
          path="/movies/topRated"
          element={<MovieList category="top_rated" darkMode={darkMode} />}
        />
        <Route
          path="/movies/upcoming"
          element={<MovieList category="upcoming" darkMode={darkMode} />}
        />
        <Route path="/search/:query" element={<Search darkMode={darkMode} />} />
        {/* <Route path="*" element={<PageNotFound darkMode={darkMode} />} /> */}
      </Routes>
    </div>
  );
};

export default AllRoutes;
