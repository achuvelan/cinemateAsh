import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.729fe42e7d23a7906fd5.png";
import { FaSearch, FaMoon, FaSun } from "react-icons/fa";

export default function Header({ darkMode, setDarkMode }) {
  const [hidden, setHidden] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const inactiveClass = darkMode
    ? "text-sm font-medium text-gray-300 hover:text-white md:p-0"
    : "text-sm font-medium text-gray-700 hover:text-black md:p-0";

  const activeClass = darkMode
    ? "text-sm font-medium text-blue-400 md:p-0"
    : "text-sm font-medium text-blue-600 md:p-0";

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      navigate(`/search/${searchTerm}`);
    }
  };

  const searchMovie = () => {
    if (!searchTerm.trim()) return;
    navigate(`/search/${searchTerm}`);
  };

  return (
    <header>
      <nav
        className={`border-b-2 ${darkMode ? "bg-black  border-gray-900" : "bg-white border-gray-300"}`}
      >
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-6 py-2">
          {/* ✅ LOGO FIXED PROPERLY */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={Logo} className="h-8 w-auto" alt="Cinemate Logo" />
            <span
              className={`text-2xl font-semibold ${darkMode ? "text - white" : "text - black"}`}
            >
              Cinemate
            </span>
          </Link>{" "}
          {/* ✅ RIGHT ICONS (same alignment preserved) */}
          <div className="flex items-center gap-2 md:order-2">
            {/* Mobile Search Toggle */}
            <button
              onClick={() => setHidden(!hidden)}
              className="md:hidden hover:text-white p-2 text-gray-400"
            >
              <FaSearch />
            </button>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 mr-1 text-gray-300 hover:text-white border-2 border-gray-300 rounded-md hover:border-gray-300"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>

            {/* Desktop Search */}
            <div className="hidden md:flex  items-center w-52">
              <div className="relative">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={handleSearch}
                  placeholder="Search movies..."
                  autoComplete="off"
                  className={`w-full ${
                    darkMode
                      ? "bg-[#1e293b] text-white placeholder-gray-400 border-gray-700"
                      : "bg-white text-black placeholder-gray-500 border-gray-300"
                  } px-4 pl-10 pr-4 py-2 rounded-md border`}
                  // className="w-full bg-[#1e293b] text-white placeholder-gray-400 px-4 pl-10 pr-4 py-2 rounded-md border border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />

                <button
                  onClick={searchMovie}
                  className="absolute left-3 top-1/2 -translate-y-1/2
                   text-gray-400"
                >
                  <FaSearch />
                </button>
              </div>
            </div>

            {/* Menu toggle */}
            <button
              onClick={() => setHidden(!hidden)}
              className="md:hidden text-gray-300 hover:bg-gray-800 p-2 rounded-lg"
            >
              ☰
            </button>
          </div>
          {/* ✅ MOBILE SEARCH (same position kept) */}
          {!hidden && (
            <div className="w-full mt-3 md:hidden">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  autoComplete="off"
                  // className="w-full bg-[#f4e562] text-white
                  //  placeholder-gray-400 px-4 py-2 pl-12
                  //  rounded-md border border-gray-700"

                  className={`w-full ${
                    darkMode
                      ? "bg-[#1e293b] text-white placeholder-gray-400 border-gray-700"
                      : "bg-white text-black placeholder-gray-500 border-gray-300"
                  } px-4 py-2 pl-12 rounded-md border`}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyDown={handleSearch}
                />

                <button
                  onClick={searchMovie}
                  className="absolute left-3 top-1/2 -translate-y-1/2
                   text-gray-400"
                >
                  <FaSearch />
                </button>
              </div>
            </div>
          )}
          {/* ✅ MENU (UNCHANGED STRUCTURE) */}
          <div
            className={`${
              hidden ? "hidden" : ""
            } items-center justify-between w-full md:flex md:w-auto md:order-1`}
          >
            <ul className="flex flex-col p-4 mt-4 border border-gray-800 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? activeClass : inactiveClass
                  }
                  end
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/movies/popular"
                  className={({ isActive }) =>
                    isActive ? activeClass : inactiveClass
                  }
                >
                  Popular
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/movies/topRated"
                  className={({ isActive }) =>
                    isActive ? activeClass : inactiveClass
                  }
                >
                  TopRated
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/movies/upcoming"
                  className={({ isActive }) =>
                    isActive ? activeClass : inactiveClass
                  }
                >
                  Upcoming
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
