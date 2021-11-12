import firestore from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
const MoviesVotes = () => {
  const collectionRef = collection(firestore, "movie_votes");
  const [movies, setMovies] = useState([]);
  //getMovieVotes data from firestore
  useEffect(() => {
    const getVotes = async () => {
      const data = await getDocs(collectionRef);
      setMovies(
        data.docs.map((doc) => {
          return doc.data();
        })
      );
    };
    getVotes();
  }, []);

  return (
    <div>
      {movies.map((movie) => {
        return (
          <div key={movie.title}>
            {/* <img src={movie.poster} className="movie-votes-poster" /> */}
            <h1>{movie.title}</h1>
            <h4>Up votes : {movie.up_votes}</h4>
            <h4>Down votes : {movie.down_votes}</h4>
          </div>
        );
      })}
    </div>
  );
};
export default MoviesVotes;
