import { useLocation } from "react-router-dom";
import {
  Content,
  Container,
  UpperInfo,
  Info,
  Title,
  MoreInfo,
  Date,
  Airing,
  Poster,
} from "./styles/AnimeDetails.styled";
const AnimeDetails = () => {
  const location = useLocation();
  const data = location.state;
  return (
    <Container>
      <UpperInfo>
        <Poster src={data.image_url} />
        <Info>
          <Title>{data.title}</Title>
          <Airing> Airing : {data.Airing ? data.airing : "False"}</Airing>
          <Date start>
            Start Date :<span> {data.start_date}</span>{" "}
          </Date>
          <Date>
            End Date : <span>{data.end_date}</span>
          </Date>
        </Info>
      </UpperInfo>
      <Content>{data.synopsis}</Content>
      <MoreInfo>
        You can find more about this anime by visiting to this
        <a href={data.url}>Link</a>
      </MoreInfo>
    </Container>
  );
};
export default AnimeDetails;
