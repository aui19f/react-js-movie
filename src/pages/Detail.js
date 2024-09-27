import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";
import Loading from "../components/Loading";
import noneImg from "../images/image.png";

export default function Detail() {
  let { id } = useParams();
  const [movieData, setMovieData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const movieDetail = async () => {
    const responseData = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovieData(responseData.data.movie);
    console.log(responseData.data.movie);
    setIsLoading(false);
  };
  useEffect(() => {
    movieDetail();
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className={styles.moviedetail}>
          <div className={styles.movieInfo}>
            {movieData.medium_cover_image ? (
              <img src={movieData.medium_cover_image} alt={movieData.title} />
            ) : (
              <img className={styles.noneImage} src={noneImg} />
            )}

            <div className="txt">
              <div>
                <h2>{movieData.title}</h2>
                <p className={styles.subTitle}>{movieData.title_english}</p>
                <p>⭐️ {movieData.rating}</p>
              </div>

              <div className={styles.listData}>
                <p>개봉: {movieData.year}</p>
                <div>
                  <p>장르: </p>

                  <div>
                    {movieData.genres.map((genre) => (
                      <span>{genre} </span>
                    ))}
                  </div>
                </div>
                <p>런타임: {movieData.runtime}</p>
              </div>

              <div className={styles.buttons}>
                <button>예매하기</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
