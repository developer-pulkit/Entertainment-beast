const useGenres = (selectedGenres) => {
  if (selectedGenres.length < 1) {
    return "";
  } else {
    const genreId = selectedGenres.map((genre) => genre.id);
    return genreId.reduce((acc, curr) => acc + "," + curr);
  }
};

export default useGenres;
