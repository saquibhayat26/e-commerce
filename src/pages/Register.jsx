import React from "react";
import styled from "styled-components";

function Register() {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name" required />
          <Input placeholder="last name" required />
          <Input placeholder="username" required />
          <Input placeholder="email" required type="email" />
          <Input placeholder="password" required type="password" />
          <Input placeholder="confirm password" required type="password" />
          <Policy>
            By creating an account, i consent to the processing of my personal
            data in accordance with the <Span>PRIVACY POLICY</Span>
          </Policy>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default Register;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(
      to bottom,
      rgba(245, 246, 252, 0.52),
      rgba(108, 145, 224, 0.73)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  background-color: #fdffff;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 500;
  margin-bottom: 12px;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  margin: 12px 12px;
  padding: 12px;
  min-width: 40%;
  border: 1px solid lightgray;
`;

const Button = styled.button`
  margin-bottom: 18px;
  cursor: pointer;
  padding: 8px;
  background-color: teal;
  width: 40%;
  border: none;
  color: white;
  margin: 12px 12px;
`;

const Policy = styled.a`
  font-size: 14px;
  margin: 12px 12px;
  cursor: pointer;
`;

const Span = styled.span`
  font-weight: 600;
`;
