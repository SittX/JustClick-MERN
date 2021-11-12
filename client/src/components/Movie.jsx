import useFetch from "../useFetch";
import { Link } from "react-router-dom";
import { v4 } from "uuid";
import { useState } from "react";
import { Loading } from "react-loading-dot/lib";
const Movie = () => {
  const [pages, setPages] = useState(0);
  const { data, isLoading, setIsLoading } = useFetch(
    `http://localhost:3001/movie`
  );

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
    setPages(data.total_pages);
    setResultPosts(posts);
  };

  //PAGINATION FOR Movie page
  const nextPage = async (page) => {
    setIsLoading(true);
    const response = await fetch(
      `http://localhost:3001/search/movie/${input}/${page}`
    );
    const data = await response.json();
    setResultPosts(data.results);
    setIsLoading(false);
  };
  //Can't use for loop inside of the  return function.So,loop through the total page numbers and pushed it to the 'pages_count' to create an array.So,we can use 'map' func for the total_pages
  const pages_count = [];
  for (let i = 1; i <= pages; i++) {
    pages_count.push(i);
  }
  return (
    <div>
      {resultPosts == null ? (
        data && (
          <div
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${
                data.results[Math.round(Math.random() * 5)].backdrop_path
              })`,
            }}
            className="page_banner"
          ></div>
        )
      ) : (
        <div
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${
              resultPosts[Math.round(Math.random() * 5)].backdrop_path
            })`,
          }}
          className="page_banner"
        ></div>
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
                        ? `/details/${post.title}`
                        : `/details/${post.original_name}`,
                      state: { ...post },
                    }}
                    className="movie_container"
                  >
                    <div className="grid-items">
                      <img
                        className="poster"
                        src={`https://image.tmdb.org/t/p/original/${post.poster_path}`}
                        alt=""
                      />
                      <h4 className="movie_title">
                        {post.title ? post.title : post.original_name}
                      </h4>
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
                      ? `/details/${post.title}`
                      : `/details/${post.original_name}`,
                    state: { ...post },
                  }}
                  className="movie_container"
                >
                  <div className="grid-items">
                    <img
                      className="poster"
                      src={`https://image.tmdb.org/t/p/original/${post.poster_path}`}
                      alt=""
                    />
                    <h4 className="movie_title">
                      {post.title ? post.title : post.original_name}
                    </h4>
                  </div>
                </Link>
              );
            })}
          </div>
          {pages_count.map((page) => {
            return (
              <div key={v4()}>
                <button onClick={() => nextPage(page)}>{page}</button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default Movie;
