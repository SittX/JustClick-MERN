import styled from "styled-components";
export const Container = styled.div`
  padding: 15px 20px;
  box-sizing: border-box;
  @media (max-width: 768px) {
    padding: 5px 10px;
  }
`;
export const UpperInfo = styled.section`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-items: center;
  }
`;
export const Poster = styled.img`
  width: 400px;
  border-radius: 5px;
  @media (max-width: 768px) {
    width: 250px;
    height: 300px;
  }
`;
export const Info = styled.div`
  margin-left: 2rem;
  @media (max-width: 768px) {
    text-align: center;
  }
`;
export const Airing = styled.h5``;
export const Title = styled.h3`
  font-weight: 500;
  font-size: 36px;
  @media (max-width: 768px) {
    font-weight: 400;
    font-size: 25px;
  }
`;
export const Date = styled.h5`
  span {
    color: ${(props) => (props.start ? "green" : "red")};
  }
`;
export const Content = styled.p`
  font-size: 24px;
  font-weight: 400;
  @media (max-width: 768px) {
    font-size: 20px;
    padding: 2px;
  }
`;
export const MoreInfo = styled.div`
  font-size: 20px;
  margin: 20px 0;
  a {
    margin-left: 5px;
    text-decoration: none;
  }
  @media (max-width: 768px) {
    font-size: 18px;
    margin: 10px 0;
  }
`;
