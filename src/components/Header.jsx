import { Search, ShoppingCartCheckoutOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

function Header() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>En</Language>
          <SearchContainer>
            <Input></Input>
            <Search style={{ color: "grey", fontSize: 18 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
            <Logo>HAYAT FASHION</Logo>
          </Link>
        </Center>
        <Right>
          <Link
            to="/register"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <MenuItems>REGISTER</MenuItems>
          </Link>
          <Link
            to="/login"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <MenuItems>SIGN IN</MenuItems>
          </Link>
          <Link
            to="/checkout"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <MenuItems>
              <Badge badgeContent={0} color="primary">
                <ShoppingCartCheckoutOutlined />
              </Badge>
            </MenuItems>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  height: 52px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;
  margin-top: 4px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.div``;

const SearchContainer = styled.div`
  border: 0.5px solid black;
  padding: 4px;
  display: flex;
  align-items: center;
  margin-left: 20px;
  cursor: pointer;
`;

const Input = styled.input`
  border: none;
  padding: 4px;
`;

const Center = styled.div`
  flex: 1;
`;

const Logo = styled.h1`
  font-size: 32px;
  text-align: center;
  @media (max-width: 540px) {
    display: none;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const MenuItems = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;
