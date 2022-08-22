import React from "react";
import styled from "styled-components";

function Annoucement() {
  return (
    <Container>Annoucement: Flat 15% off on Friday on all items</Container>
  );
}

export default Annoucement;

const Container = styled.div`
  height: 30px;
  background-color: #076b6b;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: bolder;
`;
