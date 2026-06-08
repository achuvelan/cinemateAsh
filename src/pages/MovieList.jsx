import { useEffect, useState } from "react";
import Card from "../components/Card";

const MovieList = ({ category, darkMode }) => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${category}?api_key=b987721a4b9d703c883d78c32d1f2a58&language=en-US&page=1`,
        );

        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }
        const data = await response.json();
        console.log(data);

        setMovies(data.results);
      } catch (err) {
        setError(err.message);
        console.log(err);
      }
    };

    fetchMovies();
  }, [category]);

  if (error) {
    return <h1>{error}</h1>;
  }

  console.log("MovieList darkmODE hello ashhh", { darkMode, category });
  return (
    <main>
      <div>
        {/* <h1 >MovieList</h1> */}

        <section className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {movies.map((movie) => (
              <Card key={movie.id} movie={movie} darkMode={darkMode} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default MovieList;
