import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default function Movie({ id, title, genres, summary, coverImg }) {
  return (
    <li>
      <Link to={`/movie/${id}`}>
        <div>
          <h4>{title}</h4>
          <img src={coverImg} alt={title} />
          {summary ? <p>{summary}</p> : null}
          {genres.map((x) => (
            <p>{x}</p>
          ))}
        </div>
      </Link>
    </li>
  );
}

Movie.ptopTypes = {
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string),
};

/**
 * 

{
  "id": 64088,
  "url": "https://yts.mx/movies/his-and-hers-2024",
  "imdb_code": "tt33242029",
  "title": "His and Hers",
  "title_english": "His and Hers",
  "title_long": "His and Hers (2024)",
  "slug": "his-and-hers-2024",
  "year": 2024,
  "rating": 0,
  "runtime": 4,
  "genres": [
      "Animation"
  ],
  "summary": "",
  "description_full": "",
  "synopsis": "",
  "yt_trailer_code": "",
  "language": "en",
  "mpa_rating": "",
  "background_image": "https://yts.mx/assets/images/movies/his_and_hers_2024/background.jpg",
  "background_image_original": "https://yts.mx/assets/images/movies/his_and_hers_2024/background.jpg",
  "small_cover_image": "https://yts.mx/assets/images/movies/his_and_hers_2024/small-cover.jpg",
  "medium_cover_image": "https://yts.mx/assets/images/movies/his_and_hers_2024/medium-cover.jpg",
  "large_cover_image": "https://yts.mx/assets/images/movies/his_and_hers_2024/large-cover.jpg",
  "state": "ok",
  "torrents": [
      {
          "url": "https://yts.mx/torrent/download/77E2E98D23DA2D32E5ADB1E9852BFE9889165B14",
          "hash": "77E2E98D23DA2D32E5ADB1E9852BFE9889165B14",
          "quality": "720p",
          "type": "web",
          "is_repack": "0",
          "video_codec": "x264",
          "bit_depth": "8",
          "audio_channels": "2.0",
          "seeds": 74,
          "peers": 23,
          "size": "776.41 MB",
          "size_bytes": 814124892,
          "date_uploaded": "2024-09-22 13:42:19",
          "date_uploaded_unix": 1727005339
      }
  ],
  "date_uploaded": "2024-09-22 13:42:19",
  "date_uploaded_unix": 1727005339
}
 */
