import styled from "styled-components";
export const Container = styled.div`
  padding: 0;
  margin: 0;
  box-sizing: border-box;
`;
export const PostsContainer = styled.div`
  padding: 20px;
  margin: 10px;
  display: grid;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  grid-column-gap: 5%;
  grid-row-gap: 20px;
  text-align: center;
  a {
    text-decoration: none;
  }
  @media (max-width: 648px) {
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 25px;
    grid-column-gap: 10px;
  }
`;
export const MoviesContainer = styled(PostsContainer)``;
export const AnimeContainer = styled(PostsContainer)``;
export const Post = styled.div`
  img {
    width: 70%;
    height: 280px;
    border-radius: 5px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    transition-duration: 0.25s;
    transition-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
  }
  h4 {
    text-align: center;
    margin: 10px 0;
  }
  &:hover {
    img {
      opacity: 40%;
    }
  }
  @media (max-width: 768px) {
    h4 {
      display: none;
    }
    img {
      width: 80%;
      height: 200px;
      margin-left: 20px;
    }
  }
`;
export const Movie = styled(Post)``;
export const Series = styled(Post)``;

//Searchbar
export const Button = styled.button`
  position: absolute;
  right: 0;
  border: none;
  height: 36px;
  border-radius: 0 10px 10px 0;
  width: 90px;
  font-size: 20px;
  padding: 4px;
  background-color: rgb(234, 51, 35);
  color: black;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    color: rgb(222, 23, 98);
  }
  @media (max-width: 768px) {
    border-radius: 0 10px 10px 0;
    padding: 0;
    width: 70px;
    font-size: 18px;
  }
`;
export const Search = styled.form`
  position: relative;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  width: 618px;
  height: 40px;
  & input {
    padding: 0 15px 0 10px;
    border-radius: 10px;
    border: none;
    height: 36px;
    width: 100%;
    font-size: 20px;
    &:focus {
      outline: none;
    }
  }
  @media (max-width: 768px) {
    width: 80%;
    input {
      width: 100%;
      font-size: 15px;
    }
  }
`;
