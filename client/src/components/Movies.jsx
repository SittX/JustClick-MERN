import useFetch from "../useFetch";
import { Link } from "react-router-dom";
import { v4 } from "uuid";
import { useState } from "react";
import { Loading } from "react-loading-dot/lib";
import { Movie, MoviesContainer } from "./styles";
import { Button, Search } from "./styles";
import { Container, PageBanner, MoviesWrapper } from "./styles/Movies.styled";
const Movies = () => {
  const [pages, setPages] = useState(0);
  const { data, isLoading, setIsLoading } = useFetch(
    `https://justclick-mern.herokuapp.com/movie`
  );

  //state and funcs for the search movies
  const [input, setInput] = useState("");
  const [resultPosts, setResultPosts] = useState(null);
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `https://justclick-mern.herokuapp.com/search/movie/${input}`
    );
    const data = await response.json();
    const posts = data.results;
    setPages(data.total_pages);
    setResultPosts(posts);
  };

  //PAGINATION FOR Movie page
  const nextPage = async (page) => {
    setIsLoading(true);
    const response = await fetch(
      `https://justclick-mern.herokuapp.com/search/movie/${input}/${page}`
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
    <Container>
      {resultPosts == null ? (
        data && (
          <PageBanner
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${data.results[1].backdrop_path})`,
            }}
          ></PageBanner>
        )
      ) : (
        <PageBanner
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${resultPosts[1].backdrop_path})`,
          }}
        ></PageBanner>
      )}

      <Search onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={input}
          onChange={handleChange}
          placeholder="Search..."
        />
        <Button type="submit">Search</Button>
      </Search>

      {resultPosts == null ? (
        <MoviesWrapper>
          <h3>Popular movies & TV shows</h3>
          <MoviesContainer>
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
                  >
                    <Movie>
                      <img
                        className="poster"
                        src={`https://image.tmdb.org/t/p/original/${post.poster_path}`}
                        alt=""
                      />
                      <h4 className="movie_title">
                        {post.title ? post.title : post.original_name}
                      </h4>
                    </Movie>
                  </Link>
                );
              })
            )}
          </MoviesContainer>
        </MoviesWrapper>
      ) : (
        <MoviesWrapper>
          <h3>Search result</h3>
          <MoviesContainer>
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
                >
                  <Movie>
                    <img
                      className="poster"
                      src={`https://image.tmdb.org/t/p/original/${post.poster_path}`}
                      alt=""
                    />
                    <h4 className="movie_title">
                      {post.title ? post.title : post.original_name}
                    </h4>
                  </Movie>
                </Link>
              );
            })}
          </MoviesContainer>
          {pages_count.map((page) => {
            return (
              <div key={v4()}>
                <button onClick={() => nextPage(page)}>{page}</button>
              </div>
            );
          })}
        </MoviesWrapper>
      )}
    </Container>
  );
};
export default Movies;
