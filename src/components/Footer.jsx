import React from "react";
import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import EmailIcon from "@mui/icons-material/Email";
import PaymentIcon from "@mui/icons-material/Payment";

function Footer() {
  return (
    <Container>
      <Left>
        <Logo>HAYAT FASHION</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non facilis
          rem voluptates animi vero. Iure aliquam quod dolorem nobis, veniam
          doloribus nesciunt ea velit quia nihil sequi quidem aperiam assumenda.
        </Desc>
        <SocialIconContainer>
          <SocialIcon color="blue">
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color="pink">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color="cyan">
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon color="red">
            <PinterestIcon />
          </SocialIcon>
        </SocialIconContainer>
      </Left>

      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Mens Section</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Women Section</ListItem>
          <ListItem>MyAccount</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>

      <Right>
        <Title>Contact</Title>
        <ContactContainer>
          <LocationOnIcon
            style={{
              marginRight: 8,
            }}
          />
          123 Cross Road, India
        </ContactContainer>
        <ContactContainer>
          <PhoneInTalkIcon
            style={{
              marginRight: 8,
            }}
          />
          +91-1234567890
        </ContactContainer>
        <ContactContainer>
          <EmailIcon
            style={{
              marginRight: 8,
            }}
          />
          contact@hayat.fashion
        </ContactContainer>
        <PaymentContainer>
          <PaymentIcons>
            <PaymentIcon />
          </PaymentIcons>
          <PaymentIcons>
            <PaymentIcon />
          </PaymentIcons>
          <PaymentIcons>
            <PaymentIcon />
          </PaymentIcons>
          <PaymentIcons>
            <PaymentIcon />
          </PaymentIcons>
        </PaymentContainer>
      </Right>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  height: 50vh;
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  margin: 12px 8px 8px 24px;
`;
const Logo = styled.h1`
  letter-spacing: 2px;
  margin-bottom: 18px;
`;
const Desc = styled.p`
  font-size: 12px;
  line-height: 18px;
  margin-bottom: 32px;
`;
const SocialIconContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  height: 42px;
  width: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.color};
  color: white;
  border-radius: 50%;
  margin: 12px 12px;
  cursor: pointer;
`;

const Center = styled.div`
  flex: 1;

  margin: 32px 8px 12px 64px;
`;
const Title = styled.h3`
  text-align: left;
  margin-bottom: 40px;
`;
const List = styled.ul`
  list-style: none;
  display: grid;
  grid-gap: 12px;
  grid-template-columns: auto auto;
  grid-column-gap: 60px;
`;
const ListItem = styled.li`
  cursor: pointer;
  &:hover {
    color: blue;
  }
`;

const Right = styled.div`
  flex: 1;
  margin: 32px 8px 12px 64px;
`;
const ContactContainer = styled.div`
  display: flex;
  margin-bottom: 18px;
`;
const PaymentContainer = styled.div`
  display: flex;
`;
const PaymentIcons = styled.div`
  height: 20px;
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0a0505;
  color: white;
  border-radius: 50%;
  margin: 4px;
  cursor: pointer;
`;
