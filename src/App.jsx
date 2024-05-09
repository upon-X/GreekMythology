import "./App.css";
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { LanguageProvider } from "./components/LanguageChange";
import CharactersContainer from "./components/Characters/CharactersContainer";
import Regions from "./components/Regions/Regions";
import ScrollToTop from "./components/ScrollToTop";
import PageNotFound from "./components/PageNotFound/PageNotFound";

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
          <Route path="/regions" element={<Regions />} />
        </Routes>
        <Footer />
      </LanguageProvider>
    </>
  );
}

export default App;
