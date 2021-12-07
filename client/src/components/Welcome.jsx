import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Loading } from "react-loading-dot";
import { v4 } from "uuid";
import { Container, PostsContainer, Post } from "./styles";
import {
  IntroBg,
  WebsiteShowCase,
  TrendingNow,
  Span,
  Button,
} from "./styles/Welcome.styled";
import { useDispatch, useSelector } from "react-redux";
import fetchTrending from "../redux/actions/fetchTrending";
const Welcome = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  useEffect(() => {
    dispatch(
      fetchTrending(`https://justclick-mern.herokuapp.com/getTrending/${page}`)
    );
  }, [page]);
  return (
    <Container>
      <IntroBg></IntroBg>

      <WebsiteShowCase>
        <h3>
          What is <Span>Just</Span>
          <Span red>Click</Span> ?
        </h3>
        <p>
          JustClick is a website for those who want to find informations of a
          movie or a TV show with just a few
          <Span red>"Clicks"</Span>. We arranged all of the different movies and
          TV shows data that are available on the internet in one place. So,
          that you don't have to go to any trouble of finding it from a ton of
          websites. We believe that it would save up a ton of your time.
        </p>
      </WebsiteShowCase>

      <TrendingNow>Trending now</TrendingNow>
      <PostsContainer>
        {state.loading ? (
          <Loading />
        ) : (
          state.trending &&
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
                <Post>
                  <img
                    src={`https://image.tmdb.org/t/p/original/${post.poster_path}`}
                    alt=""
                  />
                  <h4 className="movie_title">
                    {post.title ? post.title : post.original_name}
                  </h4>
                </Post>
              </Link>
            );
          })
        )}
      </PostsContainer>
      {page < 2 ? <Button onClick={() => setPage(2)}>Next </Button> : ""}
      {page === 2 ? <Button onClick={() => setPage(1)}>Previous</Button> : ""}
    </Container>
  );
};
export default Welcome;
