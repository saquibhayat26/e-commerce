import React from "react";
import styled from "styled-components";
import SendIcon from "@mui/icons-material/Send";

function NewsLetter() {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favourite products</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <SendIcon />
        </Button>
      </InputContainer>
    </Container>
  );
}

export default NewsLetter;

const Container = styled.div`
  height: 70vh;
  background-color: aquamarine;
  margin: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 48px;
  font-style: normal;
  letter-spacing: 2px;
`;
const Desc = styled.p`
  margin: 28px 8px 14px 8px;
  letter-spacing: 2px;
  font-weight: 500;
  font-size: 20px;
`;
const InputContainer = styled.div`
  width: 50vw;
  display: flex;
  justify-content: space-between;
`;
const Input = styled.input`
  flex: 9;
  border: 1px solid #d8d1d1;
  padding: 6px;
  padding-left: 12px;
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: #222722;
  color: white;
  padding: 4px;
  cursor: pointer;
`;
