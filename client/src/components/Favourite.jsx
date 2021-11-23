import { collection, deleteDoc, doc, getDocs } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { v4 } from "uuid";
import firestore from "../firebaseConfig";
import { Movie, MoviesContainer } from "./styles";
import { Poster, Container, Button } from "./styles/Favourite.styled";
const WatchLater = () => {
  const favouriteCollection = collection(firestore, "favouriteMovies");
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getMovies = async () => {
      const data = await getDocs(favouriteCollection);
      setMovies(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getMovies();
  }, []);
  const removeMovies = async (id) => {
    console.log(id);
    const movie = await doc(favouriteCollection, id);
    const response = await deleteDoc(movie);
    console.log(response);
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
                  onClick={() => removeMovies(movie.id)}
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
