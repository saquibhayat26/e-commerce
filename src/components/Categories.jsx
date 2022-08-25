import React from "react";
import CategoryItems from "./CategoryItems";
import { categories } from "./../data";
import styled from "styled-components";

function Categories() {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItems items={item} key={item.id} />
      ))}
    </Container>
  );
}

export default Categories;

const Container = styled.div`
  display: flex;
  flex: 1;
  margin: 0 6px;
`;
