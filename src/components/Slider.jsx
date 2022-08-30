import React, { useState } from "react";
import styled from "styled-components";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Link } from "react-router-dom";

function Slider({ sliderItems }) {
  const [sliderIndex, setSliderIndex] = useState(0);

  function handleLeftClick() {
    const isFirstSlide = sliderIndex === 0;
    const index = isFirstSlide ? sliderItems.length - 1 : sliderIndex - 1;
    setSliderIndex(index);
  }

  function handleRightClick() {
    const isLastSlide = sliderIndex === sliderItems.length - 1;
    const index = isLastSlide ? 0 : sliderIndex + 1;
    setSliderIndex(index);
  }

  return (
    <Container>
      <Arrow direction="left" onClick={handleLeftClick}>
        <ArrowLeftIcon />
      </Arrow>
      <Wrapper>
        <Slide>
          <ImgContainer>
            <Image src={sliderItems[sliderIndex].img} />
          </ImgContainer>
          <InfoContainer>
            <Title>{sliderItems[sliderIndex].title}</Title>
            <Desc>{sliderItems[sliderIndex].desc}</Desc>

            <Button>EXPLORE</Button>
          </InfoContainer>
        </Slide>
        <Dot>
          {sliderItems.map((item, index) => {
            return (
              <span
                onClick={() => setSliderIndex(index)}
                key={index}
                style={{
                  margin: 8,
                  fontSize: 42,
                  cursor: "pointer",
                }}
              >
                .
              </span>
            );
          })}
        </Dot>
      </Wrapper>
      <Arrow direction="right" onClick={handleRightClick}>
        <ArrowRightIcon />
      </Arrow>
    </Container>
  );
}

export default Slider;

const Container = styled.div`
  width: 100%;
  height: 85vh;
  object-fit: cover;
  overflow: hidden;
  position: relative;
  transition: all 2s ease;
`;

const Arrow = styled.div`
  background-color: #000000;
  color: #fffafa;
  border-radius: 50%;
  height: 42px;
  width: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;

  &:hover {
    color: #030000;
    background-color: #f7f7f7;
  }
`;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Dot = styled.div`
  display: flex;
`;

const Slide = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const ImgContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  height: 100%;
  margin-left: 3.5rem;
`;

const Image = styled.img`
  height: 90% !important;
  width: 100%;
  object-fit: contain;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  margin-right: 3.5rem;
  margin-left: 1rem;
`;

const Title = styled.h1`
  margin-top: -2rem;
  font-size: 2.5rem;
  border: 1px solid lightgray;
  padding: 8px;
  letter-spacing: 2px;
  text-align: center;
`;

const Desc = styled.p`
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 2rem;
  letter-spacing: 3px;
  font-size: 18px;
`;

const Button = styled.button`
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  margin-top: 5px;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  max-width: 70%;
  cursor: pointer;
  letter-spacing: 2px;
  &:hover {
    background: transparent;
    color: #eb0c0c;
    font-weight: 600;
    rotate: 180deg;
  }
`;
