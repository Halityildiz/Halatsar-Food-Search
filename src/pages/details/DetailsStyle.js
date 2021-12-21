import styled from "styled-components";
export const DetailContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  background-image: linear-gradient(to top, #48c6ef 0%, #6f86d6 100%);
  min-height: calc(100vh - 50px);
  /* height: fit-content; */
`;
export const DetailPart = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  background-image: linear-gradient(to top, #6e88d7 30%, #f9d423 100%);
  border: 1px solid white;
  border-radius: 80px;
  background-color: #e1f1dd;
  max-width: 1000px;
  margin: auto;
  /* height: calc(100vh - 300px); */
  @media (max-width: 1250px) {
    background-color: red;
  }
`;
export const ImgContainer = styled.div`
  border: none;

  img {
    border-radius: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 400px;
  }
`;
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 20px;
  font-size: 2rem;
  h1 {
    font-size: 3rem;
    color: #fff;
  }
  img {
    width: 200px;
  }
`;
export const IngContainer = styled.div`
  width: 300px;
  font-size: 1.2rem;
  margin: 0rem 1rem;

  word-break: break-word;
  text-align: left;
`;
export const OtherPart = styled.div`
  width: 300px;
  text-align: center;
  font-size: 1.5rem;
  margin: 1rem 1rem;
  line-height: 0.5;
`;
