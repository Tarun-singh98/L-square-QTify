import "./App.css";
import AlbumSection from "./components/Album-section/AlbumSection";
import Hero from "./components/Hero-section/Hero";
import Navbar from "./components/Navbar/Navbar";
import {
  fetchTopSongs,
  fetchNewSongs,
  fetchSongs,
  fetchFilters,
} from "./api/api.js";
import FAQ from "./components/FAQ/FAQ";
import { StyledEngineProvider } from "@mui/material/styles";

function App() {
  return (
    <>
      <StyledEngineProvider injectFirst>
        <Navbar />
        <Hero />
        <AlbumSection
          title={"Top Albums"}
          type={"album"}
          dataSource={fetchTopSongs}
        />
        <AlbumSection
          title={"New Albums"}
          type={"album"}
          dataSource={fetchNewSongs}
        />
        <AlbumSection
          title={"Songs"}
          type={"song"}
          dataSource={fetchSongs}
          filterSource={fetchFilters}
        />
        <FAQ />
      </StyledEngineProvider>
    </>
  );
}

export default App;
