import { useState } from "react";
import { v4 } from "uuid";
import { Loading } from "react-loading-dot";
import { Container, AnimeContainer, Series, Button, Search } from "./styles";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import fetchAnime from "../redux/actions/fetchAnime";
const Anime = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(
      fetchAnime(`https://justclick-mern.herokuapp.com/anime/search/${input}`)
    );
  };
  return (
    <Container>
      <Search onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button type="submit">Search</Button>
      </Search>
      <AnimeContainer>
        {state.loading ? (
          <Loading />
        ) : (
          state.anime &&
          state.anime.map((show) => {
            return (
              <Link
                key={v4()}
                to={{
                  pathname: `/details/anime/${show.title}`,
                  state: { ...show },
                }}
              >
                <Series>
                  <h4>{show.title}</h4>
                  <img src={show.image_url} alt="" />
                </Series>
              </Link>
            );
          })
        )}
      </AnimeContainer>
    </Container>
  );
};
export default Anime;
