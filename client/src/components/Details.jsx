import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import firestore from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import {
  Container,
  PageBanner,
  Card,
  DetailsWrapper,
  Poster,
  Article,
  MovieTitle,
  Overview,
  AirDate,
  Rating,
  Button,
} from "./styles/Details.styled";
import { FaHome } from "react-icons/fa";
const Details = () => {
  const location = useLocation();
  const data = location.state;

  //add votes to the firestore
  // const collectionRef = collection(firestore, "movie_votes");
  // const [movies, setMovies] = useState([]);
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
  const addToFavourite = async () => {
    const response = await addDoc(favouriteCollection, data);
    console.log(response);
  };
  return (
    <Container>
      <PageBanner
        src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
      ></PageBanner>

      <Card>
        <DetailsWrapper>
          <Poster
            src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
            alt=""
          ></Poster>
          <Article>
            <MovieTitle>
              {data.title ? data.title : data.original_name}
            </MovieTitle>
            <Overview>{data.overview}</Overview>
            {data.first_air_date && (
              <AirDate>First air date : {data.first_air_date}</AirDate>
            )}
            <Rating>Average : {data.vote_average}</Rating>
          </Article>
        </DetailsWrapper>
        <Button onClick={addToFavourite}>Add to favourite</Button>
        <Button onClick={handle_votes}>⇧</Button>
        <Button onClick={handle_votes}>⇩</Button>
      </Card>
    </Container>
  );
};
export default Details;
