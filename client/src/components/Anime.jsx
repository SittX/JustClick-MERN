import { useState } from "react";
import Input from "./Input";
import { v4 } from "uuid";
import { Loading } from "react-loading-dot/lib";
const Anime = () => {
  const [input, setInput] = useState("");
  const [animeShows, setAnimeShows] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await fetch(`http://localhost:3001/anime/search/${input}`);
    const data = await response.json();
    setAnimeShows(data);
    setLoading(false);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
      {loading ? (
        <Loading />
      ) : (
        animeShows &&
        animeShows.map((anime) => {
          return (
            <div className="row" id="grid-items" key={v4()}>
              <div className="col-lg-3">
                <h4 style={{ textAlign: "center" }}>{anime.title}</h4>
                <img src={`${anime.image_url}`} className="poster" />
              </div>
              <div className="col-lg-9">
                <p style={{ fontSize: "20px" }}>{anime.synopsis}</p>
                <br />
                <h5>
                  <span style={{ color: " green" }}>Start Date</span>:{" "}
                  {anime.start_date}
                </h5>
                <h5>
                  <span style={{ color: "red" }}>End Date </span>:{" "}
                  {anime.end_date}
                </h5>
                <h5>
                  Rating: <span style={{ color: " red" }}>{anime.rated}</span>
                </h5>
                <h5>For more informations,visit the link down below⬇︎⬇︎</h5>
                <a
                  href={`${anime.url}`}
                  target="_blank"
                  style={{ wordWrap: "break-word" }}
                >
                  {anime.url}
                </a>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};
export default Anime;
