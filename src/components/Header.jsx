import {
  Search,
  ShoppingBagOutlined,
  ShoppingCartCheckoutOutlined,
} from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>English</Language>
          <SearchContainer>
            <Input></Input>
            <Search style={{ color: "grey", fontSize: 18 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>LOGO.</Logo>
        </Center>
        <Right>
          <MenuItems>REGISTER</MenuItems>
          <MenuItems>SIGN IN</MenuItems>
          <MenuItems>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartCheckoutOutlined />
            </Badge>
          </MenuItems>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  height: 60px;
  border: 1px solid black;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  margin-left: 24px;
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
  font-weight: bold;
  text-align: center;
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
