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
  @media (max-width: 768px) {
    position: relative;
    left: 8%;
    grid-template-columns: repeat(2, 200px);
    grid-row-gap: 20px;
  }
  @media (max-width: 468px) {
    position: relative;
    left: 0;
    grid-template-columns: repeat(2, 200px);
    grid-row-gap: 20px;
  }
`;
export const MoviesContainer = styled(PostsContainer)``;
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
