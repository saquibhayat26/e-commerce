import React from "react";
import styled from "styled-components";
import Annoucement from "./../components/Annoucement";
import Header from "./../components/Header";

import NewsLetter from "./../components/NewsLetter";
import Footer from "./../components/Footer";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function Product() {
  return (
    <Container>
      <Header />
      <Annoucement />
      <Wrapper>
        <ImageContainer>
          <Image src="https://sslimages.shoppersstop.com/sys-master/images/h16/hdc/27216254042142/S22TOMMIPLWA_BLUE.jpg_2000Wx3000H" />
        </ImageContainer>
        <ProductInfo>
          <Title>Pepe Jeans</Title>
          <Desc>
            Light Tone Wash Cotton Stretch Tapered Vapour Slim Fit Mens Jeans,
            Light Tone Wash Cotton Stretch Tapered Vapour Slim Fit Mens Jeans
          </Desc>
          <Price>Rs - 3039/-</Price>
          <FilterContainer>
            <FilterColor>
              <FilterText>Color</FilterText>
              <Color color="black" />
              <Color color="blue" />
              <Color color="gray" />
              <Color color="brown" />
            </FilterColor>
            <FilterSize>
              <FilterText>Size</FilterText>
              <Select>
                <Option>XS</Option>
                <Option>S</Option>
                <Option>M</Option>
                <Option>L</Option>
                <Option>XL</Option>
                <Option>XXL</Option>
              </Select>
            </FilterSize>
          </FilterContainer>
          <AddToCartContainer>
            <AmountContainer>
              <RemoveIcon
                style={{
                  fontSize: 28,
                  cursor: "pointer",
                }}
              />
              <Amount>0</Amount>
              <AddIcon
                style={{
                  fontSize: 28,
                  cursor: "pointer",
                }}
              />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddToCartContainer>
        </ProductInfo>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
}

export default Product;

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  margin: 42px;
`;

const ImageContainer = styled.div`
  flex: 1;
  width: 250px;
  height: 80vh;
`;

const Image = styled.img`
  height: 100%;
  width: 80%;
  object-fit: contain;
  float: right;
`;
const ProductInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 8px;
`;
const Title = styled.h1`
  margin-top: -35px;
  letter-spacing: 2px;
`;
const Desc = styled.p`
  margin-top: -35px;
  letter-spacing: 2px;
`;
const Price = styled.span`
  font-size: 32px;
  letter-spacing: 2px;
`;
const FilterContainer = styled.div`
  display: flex;
  align-items: center;
`;
const FilterColor = styled.div`
  display: flex;
  align-items: center;
`;
const FilterText = styled.span`
  font-size: 20px;
  margin-right: 6px;
`;
const Color = styled.div`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin-left: 3px;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  &:hover {
    border: 2px solid black;
  }
`;
const FilterSize = styled.div`
  display: flex;
  align-items: center;
  margin-left: 80px;
`;
const Select = styled.select`
  padding: 4px;
`;
const Option = styled.option``;

const AddToCartContainer = styled.div`
  display: flex;
  align-items: center;
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 60px;
`;
const Amount = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  border: 2px solid black;
  border-radius: 16px;
  height: 24px;
  width: 32px;
  margin: 6px;
`;
const Button = styled.button`
  padding: 12px;
  font-size: 20px;
  background-color: #1b3b41;
  color: white;
  border: none;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    background-color: #525b5e;
  }
`;
