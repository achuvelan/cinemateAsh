import { Link } from "react-router-dom";
const Card = ({ movie, darkMode }) => {
  console.log("Card darkMode =", darkMode);
  const imageUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  return (
    <Link to={`/movie/${movie.id}`}>
      <div
        className={`rounded-lg overflow-hidden shadow-lg border ${darkMode ? "bg-black border-gray-700" : "bg-white border-gray-200"}`}
      >
        <img
          src={imageUrl}
          alt={movie.title}
          className="w-full h-[400px] object-cover"
        />
        <div className="p-4">
          <h2 className="font-bold text-lg h-16 overflow-hidden">
            {movie.title}
          </h2>
          <p className="text-sm h-24 overflow-hidden ">
            {movie.overview.slice(0, 200)}
          </p>

          <p className="mt-5 mb-5">⭐ {movie.vote_average}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
