import React from "react";
import styled from "styled-components";
import Annoucement from "./../components/Annoucement";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function Checkout() {
  return (
    <Container>
      <Header />
      <Annoucement />
      <Wrapper>
        <Top>
          <Title>YOUR BAG</Title>
        </Top>
        <Center>
          <Button color="yellow" textColor="black" fontWeight="600">
            CONTINUE SHOPPING
          </Button>
          <AmountContainer>
            <Span decoration="underline">Shopping Bag (2)</Span>
            <Span decoration="underline">Your Wishlist (0)</Span>
          </AmountContainer>
          <Button color="teal" textColor="white">
            CHECKOUT NOW
          </Button>
        </Center>
        <Bottom>
          <CheckoutItemContainer>
            <CheckoutProduct>
              <ProductImg src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />

              <ProductDetail>
                <ProductName>
                  <b>Product</b>: JESSIE THUNDER SHOES
                </ProductName>
                <ProductId>
                  <b>ID</b>: 95859658
                </ProductId>
                <ProductColor color="black" />
                <ProductSize>
                  <b>Size</b>: 37.5
                </ProductSize>
              </ProductDetail>
              <ProductAmountContainer>
                <ProdcutAmount>
                  <AddIcon />
                  <span>2</span>
                  <RemoveIcon />
                </ProdcutAmount>
                <ProductPrice>
                  <span>$ 30</span>
                </ProductPrice>
              </ProductAmountContainer>
            </CheckoutProduct>

            <Hr />

            <CheckoutProduct>
              <ProductImg src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
              <ProductDetail>
                <ProductName>
                  <b>Product</b>: HAKURA T-SHIRT
                </ProductName>
                <ProductId>
                  <b>ID</b>: 9585966558
                </ProductId>
                <ProductColor color="gray" />
                <ProductSize>
                  <b>Size</b>: M
                </ProductSize>
              </ProductDetail>

              <ProductAmountContainer>
                <ProdcutAmount>
                  <AddIcon />
                  <span>2</span>
                  <RemoveIcon />
                </ProdcutAmount>
                <ProductPrice>
                  <span>$ 30</span>
                </ProductPrice>
              </ProductAmountContainer>
            </CheckoutProduct>
          </CheckoutItemContainer>

          <OrderSummaryContainer>
            <Title>ORDER SUMMARY</Title>
            <SummaryDetail>
              <Span>Subtotal</Span>
              <Span>$ 80.0</Span>
            </SummaryDetail>
            <SummaryDetail>
              <Span>Estimated Shipping</Span>
              <Span>$ 5.90</Span>
            </SummaryDetail>
            <SummaryDetail>
              <Span>Shopping Discount</Span>
              <Span>-$ 5.90</Span>
            </SummaryDetail>
            <SummaryDetail>
              <Span>Total</Span>
              <Span>$ 80.0</Span>
            </SummaryDetail>
            <Button color="teal" textColor="white">
              CHECKOUT NOW
            </Button>
          </OrderSummaryContainer>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
}

export default Checkout;

const Container = styled.div``;
const Wrapper = styled.div`
  height: 95%;
  width: auto;
  padding: 12px 32px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Top = styled.div``;
const Title = styled.h1`
  margin-bottom: 32px;
  font-weight: 500;
`;

const Center = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const Button = styled.button`
  padding: 8px;
  border: none;
  cursor: pointer;
  background-color: ${(props) => props.color};
  color: ${(props) => props.textColor};
  font-weight: ${(props) => props.fontWeight};
  letter-spacing: 2px;
`;
const AmountContainer = styled.div``;
const Span = styled.span`
  margin: 8px;
  text-decoration: ${(props) => props.decoration};
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
`;
const CheckoutItemContainer = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
`;

const CheckoutProduct = styled.div`
  display: flex;
  align-items: center;
`;
const ProductImg = styled.img`
  width: 24%;
`;
const ProductDetail = styled.div`
  flex: 7;
  margin-left: 24px;
`;
const ProductName = styled.div`
  margin-bottom: 14px;
`;
const ProductId = styled.div`
  margin-bottom: 14px;
`;
const ProductColor = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin-bottom: 14px;
`;
const ProductSize = styled.div``;

const ProductAmountContainer = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ProdcutAmount = styled.div`
  font-size: 24px;
  font-weight: 600;
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  cursor: pointer;
`;
const ProductPrice = styled.div`
  font-size: 36px;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const OrderSummaryContainer = styled.div`
  border: 1px solid lightgray;
  width: 30%;
  padding: 18px;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
`;
const SummaryDetail = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;
