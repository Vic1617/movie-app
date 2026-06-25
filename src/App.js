import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import MovieDescription from "./components/MovieDescription";

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Interstellar",
      description:
        "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      posterURL:
        "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800",
      rating: 9,
      trailer:
        "https://www.youtube.com/embed/zSWdZVtXT7E",
    },

    {
      id: 2,
      title: "Inception",
      description:
        "A thief who steals corporate secrets through dream-sharing technology is given an impossible task.",
      posterURL:
        "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=800",
      rating: 8,
      trailer:
        "https://www.youtube.com/embed/YoHD9XEInc0",
    },

    {
      id: 3,
      title: "The Dark Knight",
      description:
        "Batman faces his greatest challenge as the Joker creates chaos throughout Gotham.",
      posterURL:
        "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800",
      rating: 9,
      trailer:
        "https://www.youtube.com/embed/EXeTwQWrcwY",
    },
  ]);

  const [searchTitle, setSearchTitle] =
    useState("");

  const [searchRating, setSearchRating] =
    useState("");

  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: "",
    trailer: "",
  });

  const addMovie = () => {
    const movieToAdd = {
      ...newMovie,
      id: movies.length + 1,
    };

    setMovies([...movies, movieToAdd]);

    setNewMovie({
      title: "",
      description: "",
      posterURL: "",
      rating: "",
      trailer: "",
    });
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title
        .toLowerCase()
        .includes(searchTitle.toLowerCase()) &&
      movie.rating >= searchRating
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div
              style={{
                minHeight: "100vh",
                background:
                  "linear-gradient(to right, #eef2ff, #f8fafc)",
                padding: "40px",
              }}
            >
              <h1
                style={{
                  textAlign: "center",
                  marginBottom: "40px",
                  color: "#1f2937",
                }}
              >
                Movie Library
              </h1>

              <Filter
                searchTitle={searchTitle}
                setSearchTitle={setSearchTitle}
                searchRating={searchRating}
                setSearchRating={setSearchRating}
              />

              <div
                style={{
                  background: "#ffffff",
                  padding: "25px",
                  borderRadius: "16px",
                  maxWidth: "700px",
                  margin: "30px auto",
                  boxShadow:
                    "0 8px 20px rgba(0,0,0,0.08)",
                }}
              >
                <h2>Add Movie</h2>

                <input
                  placeholder="Title"
                  value={newMovie.title}
                  onChange={(e) =>
                    setNewMovie({
                      ...newMovie,
                      title: e.target.value,
                    })
                  }
                  style={{
                    width: "100%",
                    padding: "12px",
                    marginBottom: "10px",
                  }}
                />

                <input
                  placeholder="Description"
                  value={newMovie.description}
                  onChange={(e) =>
                    setNewMovie({
                      ...newMovie,
                      description: e.target.value,
                    })
                  }
                  style={{
                    width: "100%",
                    padding: "12px",
                    marginBottom: "10px",
                  }}
                />

                <input
                  placeholder="Poster URL"
                  value={newMovie.posterURL}
                  onChange={(e) =>
                    setNewMovie({
                      ...newMovie,
                      posterURL: e.target.value,
                    })
                  }
                  style={{
                    width: "100%",
                    padding: "12px",
                    marginBottom: "10px",
                  }}
                />

                <input
                  placeholder="Trailer URL"
                  value={newMovie.trailer}
                  onChange={(e) =>
                    setNewMovie({
                      ...newMovie,
                      trailer: e.target.value,
                    })
                  }
                  style={{
                    width: "100%",
                    padding: "12px",
                    marginBottom: "10px",
                  }}
                />

                <input
                  type="number"
                  placeholder="Rating"
                  value={newMovie.rating}
                  onChange={(e) =>
                    setNewMovie({
                      ...newMovie,
                      rating: Number(
                        e.target.value
                      ),
                    })
                  }
                  style={{
                    width: "100%",
                    padding: "12px",
                    marginBottom: "15px",
                  }}
                />

                <button
                  onClick={addMovie}
                  style={{
                    width: "100%",
                    padding: "12px",
                    backgroundColor:
                      "#4f46e5",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                  }}
                >
                  Add Movie
                </button>
              </div>

              <MovieList
                movies={filteredMovies}
              />
            </div>
          }
        />

        <Route
          path="/movie/:id"
          element={
            <MovieDescription
              movies={movies}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;