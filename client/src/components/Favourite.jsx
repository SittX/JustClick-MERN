import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { v4 } from "uuid";
import { Movie, MoviesContainer } from "./styles";
import { Poster, Container, Button } from "./styles/Favourite.styled";
import axios from "axios";
const WatchLater = () => {
  const [movies, setMovies] = useState([]);
  let [reRender, setReRender] = useState(0); //This state is setted for the useEffect to reRender everytime, the movie is deleted from the list

  useEffect(() => {
    const getMovies = async () => {
      const response = await axios.get(
        "https://justclick-mern.herokuapp.com/favourite"
      );
      setMovies(response.data);
    };
    getMovies();
  }, [reRender]);

  const removeMovies = (id) => {
    fetch("https://justclick-mern.herokuapp.com/favourite", {
      method: "DELETE",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ id }),
    })
      .then((res) => res.json())
      .then(() => setReRender(++reRender));
  };
  return (
    <Container>
      <h1>Favourite</h1>
      {movies.length === 0 ? (
        <h4>There is no favourite movies</h4>
      ) : (
        <MoviesContainer>
          {movies.map((movie) => {
            return (
              <Movie key={v4()}>
                <Link
                  to={{
                    pathname: movie.title
                      ? `/details/${movie.title}`
                      : `/details/${movie.original_name}`,
                    state: { ...movie },
                  }}
                >
                  <Poster
                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    alt=""
                  />
                </Link>
                <Button
                  className="btn btn-danger mt-10px"
                  onClick={() => removeMovies(movie._id)}
                >
                  Remove
                </Button>
              </Movie>
            );
          })}
        </MoviesContainer>
      )}
    </Container>
  );
};
export default WatchLater;
