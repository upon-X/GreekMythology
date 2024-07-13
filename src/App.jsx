import "./App.css";
import Home from "./pages/home/Home";
import CharactersContainer from "./pages/characters/CharactersContainer";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { LanguageProvider } from "./components/LanguageChange";
import ScrollToTop from "./components/ScrollToTop";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Battles from "./pages/battles/Battles";

function App() {
  return (
    <>
      <LanguageProvider>
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<CharactersContainer />} />
          <Route path="/battles" element={<Battles />} />
        </Routes>
        <Footer />
      </LanguageProvider>
    </>
  );
}

export default App;
