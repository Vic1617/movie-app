import React from "react";

function Filter({
  searchTitle,
  setSearchTitle,
  searchRating,
  setSearchRating,
}) {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        justifyContent: "center",
        marginBottom: "30px",
      }}
    >
      <input
        type="text"
        placeholder="Search title"
        value={searchTitle}
        onChange={(e) => setSearchTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Minimum rating"
        value={searchRating}
        onChange={(e) => setSearchRating(e.target.value)}
      />
    </div>
  );
}

export default Filter;