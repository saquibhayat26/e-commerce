import React from "react";
import styled from "styled-components";
import Product from "./Product";
import { popularProducts } from "../data";

function Products() {
  return (
    <Container>
      {popularProducts.map((product) => {
        return <Product product={product} key={product.id} />;
      })}
    </Container>
  );
}

export default Products;

const Container = styled.div`
  background-color: #e4d8c2;
  margin: 6px 12px;
  padding: 6px;
  display: grid;
  grid-template-columns: auto auto auto auto;
`;
