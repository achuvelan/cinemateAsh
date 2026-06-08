import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Cards from "../components/Card";
const Search = ({ darkMode }) => {
  const { query } = useParams();
  const [movies, setmovies] = useState([]);
  const [error, setError] = useState(null);

  console.log("search darkMode", darkMode);

  useEffect(() => {
    const fetchQuery = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=b987721a4b9d703c883d78c32d1f2a58&language=en-US&page=1&query=${query}`,
        );

        // https://api.themoviedb.org/3/search/movie?
        // api_key=b987721a4b9d703c883d78c32d1f2a58&language=en-US&page=1&query=barbie

        if (!response.ok) {
          throw new Error("Unable to fetch Movies");
        }

        const data = await response.json();

        setmovies(data.results);
      } catch (err) {
        setError(err.message);
      }
    };
    if (query) {
      fetchQuery();
    }
  }, [query]);
  if (error) {
    return <h1>{error}</h1>;
  }

  if (movies.length === 0) {
    return (
      <div className="p-8 pt-12 pl-16">
        <h1 className="text-3xl text-left">No results found for '{query}'</h1>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-[#0f172a] text-white" : "bg-white text-black"
      }`}
    >
      <div className="max-w-7xl mx-auto p-8">
        <h1 className="text-3xl  mb-12">Results for '{query}' </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {movies.map((movie) => (
            <Cards key={movie.id} movie={movie} darkMode={darkMode} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
