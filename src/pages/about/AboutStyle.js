import styled from "styled-components";
export const AboutContainer = styled.div`
  display: flex;
  background-image: linear-gradient(to top, #48c6ef 0%, #6f86d6 100%);
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 80px);
  line-height: 1.2;
  text-align: center;

  span {
    color: white;
    font-family: "Girassol", sans-serif;
    font-size: 3rem;
    letter-spacing: 5px;
  }
`;
export const InfoContainer = styled.div`
  text-align: center;
  margin: 0 50px 20px;
  max-width: 1000px;
  border: 1px solid white;
  padding: 25px;

  border-radius: 5px;
  a {
    color: white;
  }
`;
export const HeaderContainer = styled.div``;
export const StyledImage = styled.img`
  width: 500px;
  margin-bottom: 1rem;
`;
