import React from "react";
import {
  FormContainer,
  Header,
  LoginContainer,
  StyledButton,
  StyledForm,
  StyledImg,
  StyledInput,
} from "./LoginStyle";
// import mealSvg from "../../assets/meal.svg";

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    window.location.href = "/";
  };
  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src="https://i.pinimg.com/564x/28/97/ab/2897abed43253781fa97f4f96ef1e7d5.jpg" />
        <Header>{"Halatsar"} All Recipe</Header>
        <StyledForm onSubmit={handleSubmit}>
          <StyledInput type="text" placeholder="username" required />
          <StyledInput type="password" placeholder="password" required />
          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
