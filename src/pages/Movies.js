import { useEffect, useState } from "react";
import Movie from "../components/Movie";

import styles from "./Movies.module.css";

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
      <div className={styles.movieList}>
        <div className={styles.header}>
          <h2>무비차트</h2>
        </div>
        <div className={styles.list}>
          <ul>
            {movies.map((movie, index) => (
              <Movie
                key={movie.key}
                id={movie.id}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
                coverImg={movie.medium_cover_image}
                year={movie.year}
                rating={movie.rating}
                numbers={index}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
