import React from "react";

function AnimeCard({ anime }) {
  return (
    <article className="anime-card">
      <a href={anime.url} target="_blank" rel="noreferrer">
        <figure>
          <img src={anime.images.jpg.image_url} alt={anime.title} />
        </figure>
        <div className="tooltip">
          <h3>{anime.title}</h3>
          <p>Type: {anime.type}</p>
          <p>Status: {anime.status}</p>
          <p>Rating: {anime.rating}</p>
          <p>Year: {anime.year}</p>
          <p>Synopsis: {anime.synopsis}</p>
          <p>Background: {anime.background}</p>
        </div>
      </a>
    </article>
  );
}

export default AnimeCard;
