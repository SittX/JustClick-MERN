import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loading } from "react-loading-dot/lib";
import { Link } from "react-router-dom";
import { v4 } from "uuid";
import fetchMovies from "../redux/actions/fetchMovies";

import { Button, Search, Movie, MoviesContainer } from "./styles";
import {
  Container,
  PageBanner,
  MoviesWrapper,
  Pagination,
  Page,
} from "./styles/Movies.styled";

const Movies = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [input, setInput] = useState("");
  const [pages, setPages] = useState(1);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      fetchMovies(`https://justclick-mern.herokuapp.com/search/movie/${input}`)
    );
  };
  //PAGINATION
  const nextPage = async (page) => {
    dispatch(
      fetchMovies(
        `https://justclick-mern.herokuapp.com/search/movie/${input}/${page}`
      )
    );
  };
  //Can't use for loop inside of the  return function.So,loop through the total page numbers and pushed it to the 'pages_count' to create an array.So,we can use 'map' func for the total_pages
  const pages_count = [];
  if (state.movies) {
    if (state.movies.total_pages < 7) {
      for (let i = 1; i <= state.movies.total_pages; i++) {
        pages_count.push(i);
      }
    } else {
      for (let i = 1; i <= 7; i++) {
        pages_count.push(i);
      }
    }
  }
  return (
    <Container>
      {state.movies ? (
        <PageBanner
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${state.movies.results[1].backdrop_path})`,
          }}
        ></PageBanner>
      ) : (
        state.trending && (
          <PageBanner
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${state.trending.results[1].backdrop_path})`,
            }}
          ></PageBanner>
        )
      )}
      <Search onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search..."
        />
        <Button type="submit">Search</Button>
      </Search>
      {state.loading ? (
        <Loading />
      ) : state.movies ? (
        <MoviesWrapper>
          <h3>Search result</h3>
          <MoviesContainer>
            {state.movies.results.map((post) => {
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
          <Pagination>
            {pages_count.map((page) => {
              return (
                <div key={v4()}>
                  <button onClick={() => nextPage(page)}>{page}</button>
                </div>
              );
            })}
          </Pagination>
        </MoviesWrapper>
      ) : (
        <MoviesWrapper>
          <h3>Popular movies & TV shows</h3>
          <MoviesContainer>
            {state.loading ? (
              <Loading />
            ) : (
              state.trending.results.map((post) => {
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
      )}
    </Container>
  );
};
export default Movies;
