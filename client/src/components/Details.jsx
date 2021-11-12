import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import firestore from "../firebaseConfig";
import { collection, getDocs, addDoc } from "firebase/firestore";
const Details = () => {
  const location = useLocation();
  const data = location.state;

  //add votes to the firestore
  const collectionRef = collection(firestore, "movie_votes");
  const [movies, setMovies] = useState([]);
  //movie obj
  // useEffect(() => {
  //   const addMovie = async () => {
  //     const response = await addDoc(collectionRef, {
  //       poster: `https://image.tmdb.org/t/p/original/${data.poster_path}`,
  //       title: data.title ? data.title : data.original_name,
  //       up_votes: 0,
  //       down_votes: 0,
  //     });
  //   };
  //   addMovie();
  //   const getMovie = async () => {
  //     const data = await getDocs(collectionRef);
  //     setMovies(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   };
  //   getMovie();
  // }, []);
  // console.log(movies);
  const handle_votes = () => {
    console.log(handle_votes);
  };

  //add to watchLater collection
  const favouriteCollection = collection(firestore, "favouriteMovies");
  const addWatchLater = async () => {
    const response = await addDoc(favouriteCollection, data);
    console.log(response);
  };
  return (
    <div>
      <Link to="/">Home</Link>
      <img
        className="poster_banner"
        src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
      />

      <div className="card">
        <div className="details_page_container">
          <img
            className="details_poster"
            src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
            alt=""
          />
          <article className="details">
            <h3 className="movie_title">
              {data.title ? data.title : data.original_name}
            </h3>
            <p className="overview">{data.overview}</p>
            {data.first_air_date && (
              <p>First air date : {data.first_air_date}</p>
            )}
            <h3>Average : {data.vote_average}</h3>
          </article>
        </div>
        <button onClick={addWatchLater}>Add to favourite</button>
        <button className="vote_btn" onClick={handle_votes}>
          ⇧
        </button>
        <button className="vote_btn" onClick={handle_votes}>
          ⇩
        </button>
      </div>
    </div>
  );
};
export default Details;
