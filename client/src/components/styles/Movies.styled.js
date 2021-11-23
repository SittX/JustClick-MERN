import styled from "styled-components";
export const Container = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;
export const PageBanner = styled.div`
  width: 100%;
  height: 50vh;
  background-size: cover;
  background-clip: border-box;
  background-attachment: fixed;
  @media (max-width: 768px) {
    height: 30vh;
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

export const MoviesWrapper = styled.div`
  & h3 {
    margin: 20px 0 20px 30px;
    font-size: 24px;
    font-weight: 400;
  }
`;
