import styled from "styled-components";
export const LoginContainer = styled.div`
  background-image: url("https://picsum.photos/1600/900");
  background-repeat: no-repeat;
  height: 100vh;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FormContainer = styled.div`
  width: 600px;
  min-width: 600px;
  height: 700px;
  background-image: linear-gradient(to top, #48c6ef 0%, #6f86d6 100%);
  border-radius: 50%;
  border: 5px solid #e1f1dd;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.8);
`;
export const Header = styled.h1`
  color: white;
  font-size: 3.2rem;
`;
export const StyledInput = styled.input`
  height: 50px;
  font-size: 2rem;
  width: 250px;
  border-radius: 20px;
  background-color: white;
  border: none;
  color: black;
  margin: 0.5rem;
  text-indent: 20px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.8);
`;
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;
export const StyledButton = styled.button`
  font-size: 2rem;
  border-radius: 20px;
  background-image: linear-gradient(to top, #48c6ef 0%, #6f86d6 100%);
  color: white;
  border: none;
  cursor: pointer;
  margin: 1rem;
  padding: 15px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3);
  &:hover {
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.8);
  }
`;
export const StyledImg = styled.img`
  width: 200px;
  border-radius: 50%;
  margin: 3rem 0 0;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.8);
`;
