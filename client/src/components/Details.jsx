import { useLocation } from "react-router";
import { Link } from "react-router-dom";
const Details = () => {
  const location = useLocation();
  const data = location.state;
  console.log(data);
  return (
    <div>
      <Link to="/">Home</Link>
      <img
        className="poster_banner"
        src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
      />

      <div className="card">
        <div className="details_page_container">
          <img
            className="details_poster"
            src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
            alt=""
          />
          <article className="details">
            <h3 className="movie_title">
              {data.title ? data.title : data.original_name}
            </h3>
            <p className="overview">{data.overview}</p>
            {data.first_air_date && (
              <p>First air date : {data.first_air_date}</p>
            )}
            <h3>Average : {data.vote_average}</h3>
          </article>
        </div>
      </div>
    </div>
  );
};
export default Details;
