import React, { useEffect } from "react";
import axios from "axios";
import { Chip } from "@mui/material";

function Genres({
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  type,
  setPage,
}) {
  const handleAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id));
    setPage(1);
  };

  const handleRemove = (genre) => {
    setSelectedGenres(
      selectedGenres.filter((selected) => selected.id !== genre.id)
    );
    setGenres([...genres, genre]);
    setPage(1);
  };

  const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setGenres(data.genres);
  };

  useEffect(() => {
    fetchGenres();
    return () => {
      setGenres({});
    };
  }, []);
  return (
    <div style={{ padding: "6px 0" }}>
      {selectedGenres &&
        Array.from(selectedGenres).map((genre) => (
          <Chip
            label={genre.name}
            style={{ margin: 2 }}
            size="small"
            key={genre.id}
            color="primary"
            onDelete={() => handleRemove(genre)}
            clickable
          />
        ))}
      {genres &&
        Array.from(genres).map((genre) => (
          <Chip
            label={genre.name}
            style={{ margin: 2, color: "black", backgroundColor: "white" }}
            size="small"
            key={genre.id}
            onClick={() => handleAdd(genre)}
            clickable
          />
        ))}
    </div>
  );
}

export default Genres;
