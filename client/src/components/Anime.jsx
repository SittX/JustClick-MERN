import { useState } from "react";
import { v4 } from "uuid";
import { Loading } from "react-loading-dot";
import { Container, AnimeContainer, Series, Button, Search } from "./styles";
import { Link } from "react-router-dom";
const Anime = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await fetch(
      `https://justclick-mern.herokuapp.com/anime/search/${input}`
    );
    const data = await response.json();
    setData(data);
    setLoading(false);
  };
  return (
    <Container>
      <Search onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleChange} />
        <Button type="submit">Search</Button>
      </Search>
      <AnimeContainer>
        {loading ? (
          <Loading />
        ) : (
          data &&
          data.map((show) => {
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
