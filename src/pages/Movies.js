import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import Loading from "../components/Loading";
import styles from "./Movies.module.css";
import { gql, useQuery } from "@apollo/client";

const GET_ALL_DATA = gql`
  query {
    allMovies {
      id
      title
      summary
      genres
      medium_cover_image
      year
      rating
    }
  }
`;

export default function Movies() {
  const { loading, data, error } = useQuery(GET_ALL_DATA);

  const { allMovies = [] } = data || {};

  if (loading) {
    return <h3>Loading..</h3>;
  }
  if (error) {
    return <p>Not fetch</p>;
  }
  return (
    <div className={styles.movieList}>
      <div className={styles.header}>
        <h2>무비차트</h2>
      </div>
      <div className={styles.list}>
        <ul>
          {allMovies.map((movie, index) => (
            <Movie
              key={movie.id}
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
  );
}
