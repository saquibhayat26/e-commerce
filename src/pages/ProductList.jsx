import React from "react";
import styled from "styled-components";
import Annoucement from "./../components/Annoucement";
import Header from "./../components/Header";
import Products from "./../components/Products";
import NewsLetter from "./../components/NewsLetter";
import Footer from "./../components/Footer";

function ProductList() {
  return (
    <Container>
      <Header />
      <Annoucement />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>Blue</Option>
            <Option>Red</Option>
            <Option>Green</Option>
            <Option>Black</Option>
            <Option>Brown</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
            <Option>XXL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>By High</Option>
            <Option>By Low</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <NewsLetter />
      <Footer />
    </Container>
  );
}

export default ProductList;

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
  letter-spacing: 1px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
`;
const FilterText = styled.span`
  font-size: 16px;
  font-weight: 600;
`;
const Select = styled.select`
  padding: 6px;
  margin: 4px 8px;
`;
const Option = styled.option``;
