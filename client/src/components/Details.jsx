import { useLocation } from "react-router";
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
const Details = () => {
  const location = useLocation();
  const data = location.state;

  const handle_votes = () => {
    console.log(handle_votes);
  };
  //add to favourite collection
  const addToFavourite = () => {
    const movie = {
      poster_path: data.poster_path,
      title: data.title ? data.title : data.original_name,
      overview: data.overview,
      first_air_date: data.first_air_date,
      vote_average: data.vote_average,
    };
    fetch("https://justclick-mern.herokuapp.com/addToFavourite", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(movie),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
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
