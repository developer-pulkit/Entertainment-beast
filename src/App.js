import { Container } from "@mui/material";
import { Nav } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/NavBar/NavBar";
import Trending from "./pages/Trending/Trending";
import Movies from "./pages/Movies/Movies";
import TvSeries from "./pages/TvSeries/TvSeries";
import Search from "./pages/Search/Search";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        {" "}
        <Container>
          <Routes>
            <Route path="/" element={<Trending />} exact />
            <Route path="movies" element={<Movies />} />
            <Route path="tvSeries" element={<TvSeries />} />
            <Route path="search" element={<Search />} />
          </Routes>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
