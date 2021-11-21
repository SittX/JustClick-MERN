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

export const Button = styled.button`
  position: absolute;
  right: 0;
  border: none;
  border-radius: 0 15px 15px 0;
  height: 36px;
  width: 90px;
  font-size: 20px;
  padding: 4px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    color: rgb(222, 23, 98);
  }
`;
export const Form = styled.form`
  position: relative;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  width: 618px;
  height: 40px;
  & input {
    padding: 0 15px 0 25px;
    border-radius: 15px;
    border: none;
    height: 36px;
    width: 100%;
    font-size: 20px;
    &:focus {
      outline: none;
    }
  }
`;

export const MoviesWrapper = styled.div`
  & h3 {
    margin: 20px 0 20px 30px;
    font-size: 24px;
    font-weight: 400;
  }
`;
