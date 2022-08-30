import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AddIcon from "@mui/icons-material/Add";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Product({ product }) {
  return (
    <Container>
      <Image src={product.img} />
      <Info>
        <Link
          to="/product"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          {" "}
          <Icon>
            <SearchOutlinedIcon />
          </Icon>
        </Link>

        <Icon>
          <AddIcon />
        </Icon>
        <Icon>
          {" "}
          <FavoriteBorderOutlinedIcon />
        </Icon>
      </Info>
    </Container>
  );
}

export default Product;

const Info = styled.div`
  position: absolute;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.5s ease;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  padding: 20px;
  background-color: #fafdff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;

  &:hover ${Info} {
    opacity: 1;
  }
`;

const Image = styled.img`
  background-color: #382b44;
  border-radius: 50%;
  height: 250px;
  width: 250px;
  object-fit: contain;
  position: relative;
  z-index: 1;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 50%;
  margin: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease;
  cursor: pointer;

  &:hover {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: aliceblue;
    transform: scale(1.1);
  }
`;
