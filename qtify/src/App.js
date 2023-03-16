import React from "react";
import "./App.css";
import AlbumSection from "./components/Album-section/AlbumSection";
import Hero from "./components/Hero-section/Hero";
import Navbar from "./components/Navbar/Navbar";
import { fetchTopSongs } from "./api/api.js";
import FAQ from "./components/FAQ/FAQ";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AlbumSection title={"Top Albums"} dataSource={fetchTopSongs} />
      <FAQ/>
    </div>
  );
}

export default App;
