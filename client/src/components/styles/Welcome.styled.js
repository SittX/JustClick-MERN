import styled from "styled-components";

export const IntroBg = styled.div`
  width: 100%;
  height: 50vh;
  background-image: url(/img/netflixBg.jpeg);
  background-size: cover;
  background-clip: border-box;
  background-attachment: fixed;
`;

export const WebsiteShowCase = styled.div`
  text-align: center;
  padding: 10px 15px;
  h3 {
    font-size: 34px;
  }
  p {
    font-size: 24px;
    line-break: loose;
    font-weight: 300;
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 24px;
    }
    p {
      font-size: 18px;
      font-weight: 200;
    }
  }
`;

export const Span = styled.span`
  color: ${(props) => (props.red ? "red" : "blue")};
`;

export const TrendingNow = styled.h2`
  font-size: 34px;
  margin-left: 25px;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 24px;
    font-weight: 400;
  }
`;

export const Button = styled.button`
  display: block;
  margin-left: auto;
  margin-right: 30px;
  width: 90px;
  height: 30px;
  border: none;
  border-radius: 25px;
  font-size: 18px;
  font-weight: 500;
  &:hover {
    background-color: rgb(0, 75, 206);
    color: whitesmoke;
  }
`;
