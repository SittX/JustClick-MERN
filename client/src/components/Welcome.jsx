import useFetch from "../useFetch";
import { useEffect, useState } from "react";
import { Link, Route } from "react-router-dom";
import { Loading } from "react-loading-dot";
import { v4 } from "uuid";
const Welcome = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useFetch(
    `http://localhost:3001/getTrending/${page}`
  );
  //add new data to the previous array and rerender all the prev one and current one
  // const [posts, setPosts] = useState([]);
  // useEffect(() => {
  //   if (data !== "") setPosts([...posts, data]);
  // }, [data]);

  return (
    <div>
      <div className="wrapper">
        <div className="introBg"></div>
        <div
          className="container"
          style={{ marginTop: "15px", lineHeight: "1.5rem" }}
        >
          <div
            className="container"
            style={{ lineHeight: "2.5rem", fontSize: "25px" }}
          >
            <h2 style={{ textAlign: "center" }}>
              What is <span className="text-primary">Just</span>
              <span style={{ color: "red" }}>Click</span> ?
            </h2>
            <p>
              JustClick is a website for those who want to find informations of
              a movie or a TV show with just a few
              <span style={{ color: "red" }}>"Clicks"</span>. We arranged all of
              the different movies and TV shows data that are available on the
              internet in one place. So, that you don't have to go to any
              trouble of finding it from a ton of websites. We believe that it
              would save up a ton of your time.
            </p>
          </div>
          <h3>Trending now</h3>
          <div className="trending-posts-container">
            {isLoading ? (
              <Loading />
            ) : (
              data !== "" &&
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
          {page < 2 ? <button onClick={() => setPage(2)}>More</button> : ""}
        </div>
      </div>
    </div>
  );
};
export default Welcome;
