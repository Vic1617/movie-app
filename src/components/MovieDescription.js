import React from "react";
import { useParams, Link } from "react-router-dom";

function MovieDescription({ movies }) {
  const { id } = useParams();

  const movie = movies.find(
    (movie) => movie.id === Number(id)
  );

  return (
    <div
      style={{
        padding: "30px",
        textAlign: "center"
      }}
    >
      <h1>{movie.title}</h1>

      <p>{movie.description}</p>

      <iframe
        width="700"
        height="400"
        src={movie.trailer}
        title={movie.title}
        frameBorder="0"
        allowFullScreen
      ></iframe>

      <br />
      <br />

      <Link to="/">
        <button>Back Home</button>
      </Link>
    </div>
  );
}

export default MovieDescription;