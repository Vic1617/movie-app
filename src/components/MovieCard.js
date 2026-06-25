import React from "react";

function MovieCard({ movie }) {
  return (
    <div
      style={{
        width: "250px",
        background: "#fff",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      }}
    >
      <img
        src={movie.posterURL}
        alt={movie.title}
        style={{
          width: "100%",
          height: "350px",
          objectFit: "cover",
        }}
      />

      <div style={{ padding: "15px" }}>
        <h3>{movie.title}</h3>
        <p>{movie.description}</p>
        <strong>⭐ {movie.rating}</strong>
      </div>
    </div>
  );
}

export default MovieCard;