import { collection, getDocs } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { v4 } from "uuid";
import firestore from "../firebaseConfig";
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
  return (
    <div>
      <h1>watchLater</h1>
      <div className="favourite_movies_grid_container">
        {movies.map((movie) => {
          return (
            <Link
              key={v4()}
              to={{
                pathname: movie.title
                  ? `/details/${movie.title}`
                  : `/details/${movie.original_name}`,
                state: { ...movie },
              }}
              className="movies_container"
            >
              <div className="favourite_movies">
                <img
                  className="favourite_movies_poster"
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  alt=""
                />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default WatchLater;
