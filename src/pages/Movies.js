import { useEffect, useState } from "react";
import Movie from "../components/Movie";

export default function Movies() {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getList = async () => {
    const movieList = await (
      await fetch("https://yts.mx/api/v2/list_movies.json")
    ).json();
    console.log(movieList.data.movies);
    setMovies(movieList.data.movies);
    setIsLoading(false);
  };
  useEffect(() => {
    getList();
  }, []);
  return (
    <>
      {isLoading ? <>Loading..</> : null}
      <ul>
        {movies.map((movie) => (
          <Movie
            key={movie.key}
            id={movie.id}
            title={movie.title}
            summary={movie.summary}
            genres={movie.genres}
            coverImg={movie.medium_cover_image}
          />
        ))}
      </ul>
    </>
  );
}
