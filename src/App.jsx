import { useState } from "react";
import AllRoutes from "./routes/AllRoutes";
import { Header, Footer } from "./components";
function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <>
      <div
        className={`min-h-screen flex flex-col ${
          darkMode ? "bg-slate-900 text-white" : "bg-white text-black"
        }`}
      >
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="flex-grow">
          <AllRoutes darkMode={darkMode} setDarkMode={setDarkMode} />
        </main>
        <Footer darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </>
  );
}

export default App;
