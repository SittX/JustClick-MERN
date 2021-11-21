import styled from "styled-components";
export const Container = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;
export const PageBanner = styled.img`
  width: 100%;
  height: 98vh;
  filter: opacity(35%);
`;
export const Card = styled.div`
  width: 90%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: -500px;
  z-index: 1000;
  filter: opacity(100%);
  text-align: center;
  padding: 15px;
  border: 2px solid black;
  border-radius: 8px;
`;
export const DetailsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Poster = styled.img`
  width: 200px;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const Article = styled.article``;
export const MovieTitle = styled.h3`
  font-weight: 500;
  @media (max-width: 468px) {
    font-size: 15px;
    font-weight: 300;
  }
`;
export const Overview = styled.p`
  font-size: 20px;
  font-weight: 300;
`;
export const AirDate = styled.p``;
export const Rating = styled.p`
  font-size: 22px;
  font-weight: 400;
`;
export const Button = styled.button`
  display: inline-block;
  border: 1px solid black;
  margin: 5px;
  border-radius: 5px;
  &:hover {
    opacity: 80%;
    cursor: pointer;
  }
`;
