import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=b987721a4b9d703c883d78c32d1f2a58&language=en-US`,
        );
        if (!response.ok) {
          throw new Error("Movie not available");
        }
        const data = await response.json();
        console.log(data);
        setMovie(data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchMovie();
  }, [id]);

  if (error) {
    return <h1>{error}</h1>;
  }

  if (!movie) {
    return <h1>Loading...</h1>;
  }

  const imgUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  return (
    <div className="w-full max-w-7xl mx-auto p-8  text-black-700">
      <div className="flex flex-col md:flex-row  gap-10">
        <img
          src={imgUrl}
          alt={movie.title}
          className="w-full md:w-96  rounded-lg shadow-lg"
        />
        <div className="flex-1 mt-6 md:mt-0">
          <h1 className="text-4xl font-bold mb-6">{movie.title}</h1>
          <p className="mb-6 leading-6 text-lg max-w-2xl">{movie.overview}</p>
          <p className="mb-6">
            {movie.genres.map((genre) => (
              <span key={genre.id} className="border px-3 py-1 rounded mr-2">
                {genre.name}
              </span>
            ))}
          </p>
          <p className="mb-6">
            ⭐ {movie.vote_average} . {movie.vote_count}
          </p>
          <p className="mb-6">
            <strong>Runtime: </strong>
            {movie.runtime}
          </p>
          <p className="mb-6">
            {" "}
            <strong>Budget: </strong>
            {movie.budget}
          </p>
          <p className="mb-6">
            {" "}
            <strong> Revenue: </strong>
            {movie.revenue}
          </p>
          <p className="mb-6">
            <strong>Release Date: </strong>
            {movie.release_date}
          </p>
          <p className="mb-6">
            <strong>IMDB Code: </strong>
            {movie.imdb_id}
          </p>
        </div>
        {/* <h1 className = "text-4xl font-bold">Movie Details </h1>
  <p>Movie ID: {id} </p> */}
      </div>
    </div>
  );
};

export default MovieDetails;
