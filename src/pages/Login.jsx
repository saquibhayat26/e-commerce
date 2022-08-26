import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" required />
          <Input placeholder="password" required />
          <Button>LOGIN</Button>
          <Link>FORGOT PASSWORD?</Link>
          <Link>CREATE AN ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(
      to bottom,
      rgba(245, 246, 252, 0.52),
      rgba(117, 19, 93, 0.73)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  background-color: white;
  width: 35%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 32px;
`;

const Title = styled.h1`
  font-weight: 500;
  margin-bottom: 12px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  height: 100%;
`;

const Input = styled.input`
  margin-bottom: 12px;
  padding: 8px;
  flex: 1;
  min-width: 40%;
`;

const Button = styled.button`
  margin-bottom: 18px;
  cursor: pointer;
  padding: 8px;
  background-color: teal;
  width: 40%;
  border: none;
  color: white;
`;

const Link = styled.a`
  font-size: 14px;
  text-decoration: underline;
  margin-bottom: 12px;
  cursor: pointer;
`;
