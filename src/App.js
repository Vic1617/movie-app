import React, { useState } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Interstellar",
      description: "A journey through space and time.",
      posterURL:
        "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600",
      rating: 9,
    },
    {
      title: "Inception",
      description: "Dreams within dreams.",
      posterURL:
        "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=600",
      rating: 8,
    },
  ]);

  const [searchTitle, setSearchTitle] = useState("");
  const [searchRating, setSearchRating] = useState("");

  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: "",
  });

  const addMovie = () => {
    setMovies([...movies, newMovie]);

    setNewMovie({
      title: "",
      description: "",
      posterURL: "",
      rating: "",
    });
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(searchTitle.toLowerCase()) &&
      movie.rating >= searchRating
  );

  return (
    <div
      style={{
        background: "#f5f7fb",
        minHeight: "100vh",
        padding: "30px",
      }}
    >
      <h1 style={{ textAlign: "center" }}>Movie App</h1>

      <Filter
        searchTitle={searchTitle}
        setSearchTitle={setSearchTitle}
        searchRating={searchRating}
        setSearchRating={setSearchRating}
      />

      <div
        style={{
          display: "grid",
          gap: "10px",
          maxWidth: "500px",
          margin: "0 auto 30px",
        }}
      >
        <input
          placeholder="Title"
          value={newMovie.title}
          onChange={(e) =>
            setNewMovie({ ...newMovie, title: e.target.value })
          }
        />

        <input
          placeholder="Description"
          value={newMovie.description}
          onChange={(e) =>
            setNewMovie({ ...newMovie, description: e.target.value })
          }
        />

        <input
          placeholder="Poster URL"
          value={newMovie.posterURL}
          onChange={(e) =>
            setNewMovie({ ...newMovie, posterURL: e.target.value })
          }
        />

        <input
          type="number"
          placeholder="Rating"
          value={newMovie.rating}
          onChange={(e) =>
            setNewMovie({ ...newMovie, rating: Number(e.target.value) })
          }
        />

        <button onClick={addMovie}>Add Movie</button>
      </div>

      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;