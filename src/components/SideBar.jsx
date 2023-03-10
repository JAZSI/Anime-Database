import React from "react";

function SideBar({ topAnime }) {
  return (
    <aside>
      <nav>
        <h3>Top Animes</h3>
        {topAnime.map((anime) => (
          <a
            href={anime.url}
            target="_blank"
            key={anime.mal_id}
            rel="noreferrer"
          >
            {anime.title}
          </a>
        ))}
      </nav>
    </aside>
  );
}

export default SideBar;
