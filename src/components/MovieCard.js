import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <Link
      to={`/movie/${movie.id}`}
      style={{
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <div
        style={{
          width: "280px",
          backgroundColor: "#ffffff",
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow: "0 8px 25px rgba(0,0,0,0.12)",
          transition: "0.3s",
          cursor: "pointer",
        }}
      >
        <img
          src={movie.posterURL}
          alt={movie.title}
          style={{
            width: "100%",
            height: "380px",
            objectFit: "cover",
          }}
        />

        <div style={{ padding: "18px" }}>
          <h2
            style={{
              marginBottom: "10px",
              color: "#222",
              fontSize: "22px",
            }}
          >
            {movie.title}
          </h2>

          <p
            style={{
              color: "#666",
              fontSize: "14px",
              lineHeight: "1.5",
            }}
          >
            {movie.description.substring(0, 70)}...
          </p>

          <div
            style={{
              marginTop: "15px",
              fontWeight: "bold",
              color: "#f5b301",
            }}
          >
            ⭐ {movie.rating}/10
          </div>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;