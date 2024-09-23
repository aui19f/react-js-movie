import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Detail() {
  let { id } = useParams();
  const [movieData, setMovieData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  // console.log("id", id);
  const movieDetail = async () => {
    const responseData = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    // console.log(movie.data.movie);
    setMovieData(responseData.data.movie);
    setIsLoading(false);
  };
  useEffect(() => {
    movieDetail();
  }, []);

  return (
    <>
      {isLoading || (
        <div>
          <img src={movieData.medium_cover_image} alt={movieData.title} />
          <h1>{movieData.title}</h1>
          <p>
            {movieData.year} | {movieData.rating}/10 | {movieData.runtime}M
          </p>
          {movieData.genres.map((genre) => (
            <span>{genre} </span>
          ))}
        </div>
      )}
    </>
  );
}
