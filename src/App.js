import { BrowserRouter } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section from "./components/Section";
import PlayerBar from './components/PlayerBar';
import FAQ from './components/FAQ';

function App() {
  const [topAlbums, setTopAlbums] = useState([]);

  useEffect(() => {
    const fetchTopAlbums = async () => {
      try {
        const res = await axios.get(
          "https://qtify-backend.labs.crio.do/albums/top"
        );
        setTopAlbums(res.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTopAlbums();
  }, []);

  return (
    <BrowserRouter>
      <div>
        <Navbar topAlbums={topAlbums} />
        <Hero />

        <Section
          title="Top Albums"
          apiUrl="https://qtify-backend.labs.crio.do/albums/top"
        />

        <Section
          title="New Albums"
          apiUrl="https://qtify-backend.labs.crio.do/albums/new"
        />

        <Section
          title="Songs"
          apiUrl="https://qtify-backend.labs.crio.do/songs"
          genresUrl="https://qtify-backend.labs.crio.do/genres"
          type="song"
        />
        <FAQ />
      <PlayerBar />
    </div>
    </BrowserRouter>
  );
}

export default App;