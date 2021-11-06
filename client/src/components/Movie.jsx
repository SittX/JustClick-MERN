import useFetch from "../useFetch";
import { Link } from "react-router-dom";
import { v4 } from "uuid";
import { useState } from "react";
import { Loading } from "react-loading-dot/lib";
const Movie = () => {
  //put the input form in a separate component to reduce code repetition
  const [page, setPage] = useState(1);
  const { data, isLoading } = useFetch(`http://localhost:3001/movie/${page}`);

  //state and funcs for the search movies
  const [input, setInput] = useState("");
  const [resultPosts, setResultPosts] = useState(null);
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:3001/search/movie/${input}`);
    const data = await response.json();
    const posts = data.results;
    const page = data.page;
    setResultPosts(posts);
  };
  return (
    <div>
      {data && (
        <div
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${data.results[0].backdrop_path})`,
          }}
          className="page_banner"
        >
          <p
            style={{
              marginLeft: "2rem",
              marginRight: "5rem",
              marginTop: "15rem",
              position: "absolute",
              padding: "20px",
              backdropFilter: "blur(20px)",
            }}
          >
            {data.results[0].overview}
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="input-form">
        <input
          type="text"
          name="title"
          value={input}
          className="form-control"
          onChange={handleChange}
          placeholder="Search..."
        />
        <button type="submit" className="btn btn-danger">
          Search
        </button>
      </form>

      {resultPosts == null ? (
        <div className="popular_movies">
          <h3>Popular movies & TV shows</h3>
          <div className="trending-posts-container">
            {isLoading ? (
              <Loading />
            ) : (
              data.results.map((post) => {
                return (
                  <Link
                    key={v4()}
                    to={{
                      pathname: post.title
                        ? `/${post.title}`
                        : `${post.original_name}`,
                      state: { ...post },
                    }}
                  >
                    <div className="grid-items">
                      <img
                        className="poster"
                        src={`https://image.tmdb.org/t/p/original/${post.poster_path}`}
                        alt=""
                      />
                      <h4>{post.title ? post.title : post.original_name}</h4>
                    </div>
                  </Link>
                );
              })
            )}
          </div>
        </div>
      ) : (
        <div className="search_result">
          <h3>Search result</h3>
          <div className="trending-posts-container">
            {resultPosts.map((post) => {
              return (
                <Link
                  key={v4()}
                  to={{
                    pathname: post.title
                      ? `/${post.title}`
                      : `${post.original_name}`,
                    state: { ...post },
                  }}
                >
                  <div className="grid-items">
                    <img
                      className="poster"
                      src={`https://image.tmdb.org/t/p/original/${post.poster_path}`}
                      alt=""
                    />
                    <h4>{post.title ? post.title : post.original_name}</h4>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
      <button onClick={() => setPage(2)}>More</button>
    </div>
  );
};
export default Movie;
