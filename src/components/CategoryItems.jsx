import React from "react";
import styled from "styled-components";

function CategoryItems({ items }) {
  return (
    <Container>
      <Image src={items.img} />
      <Info>
        <Title>{items.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
}

export default CategoryItems;

const Container = styled.div`
  height: 75vh;
  flex: 1;
  margin: 6px;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  margin-top: 24px;
  font-size: 32px;
  color: white;
  font-weight: 600;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 8px;
  border: none;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    background: black;
    color: yellow;
    transform: rotate(360deg);
    scale: 1.2;
  }
`;
