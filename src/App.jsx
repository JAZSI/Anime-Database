import { useState, useEffect } from "react";

import SideBar from "./components/SideBar";
import AnimeCard from "./components/AnimeCard";

function App() {
  const [animeList, SetAnimeList] = useState([]);
  const [topAnime, SetTopAnime] = useState([]);
  const [search, SetSearch] = useState("");

  const SeasonalAnime = async (page) => {
    const response = await fetch(
      `https://api.jikan.moe/v4/seasons/now?page=${page}`
    );
    const data = await response.json();
    SetAnimeList(data.data);
  };

  const GetTopAnime = async () => {
    const response = await fetch(
      "https://api.jikan.moe/v4/top/anime?page=1&filter=bypopularity"
    );
    const data = await response.json();
    SetTopAnime(data.data.slice(0, 20));
  };

  const HandleSearch = (e) => {
    e.preventDefault();
    FetchAnime(search);
  };

  const FetchAnime = async (query) => {
    const response = await fetch(
      `https://api.jikan.moe/v4/anime?q=${query}&order_by=title&sort=asc&limit=20`
    );
    const data = await response.json();
    SetAnimeList(data.data);
  };

  useEffect(() => {
    GetTopAnime();
    SeasonalAnime(1);
  }, []);

  return (
    <div className="App">
      <header>
        <h1>
          The<strong>Anime</strong>Database
        </h1>
      </header>
      <div className="content-wrap">
        <SideBar topAnime={topAnime} />
        <main>
          <div className="main-head">
            <form className="search-box" onSubmit={HandleSearch}>
              <input
                type="search"
                placeholder="Search for an anime..."
                required
                value={search}
                onChange={(e) => SetSearch(e.target.value)}
              />
            </form>
          </div>
          <div className="anime-list">
            {animeList.map((anime) => (
              <AnimeCard anime={anime} key={anime.mal_id} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
