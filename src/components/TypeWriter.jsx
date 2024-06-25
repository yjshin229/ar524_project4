import React from "react";
import styled from "styled-components";
import { ReactTyped } from "react-typed";

const TypeWriter = ({
  type,
  stringArr,
  color = "white",
  backSpeed = 50,
  style,
  startWhenVisible = false,
  onComplete = null,
  fadeOut = false,
}) => {
  const typedProps = {
    strings: stringArr,
    typeSpeed: 60,
    backSpeed: backSpeed,
    backDelay: 10000,
  };

  if (onComplete) {
    typedProps.onComplete = onComplete;
  }
  if (fadeOut) {
    typedProps.fadeOut = true;
  }
  if (backSpeed !== 50) {
    typedProps.backSpeed = backSpeed;
  }
  if (startWhenVisible) {
    typedProps.startWhenVisible = startWhenVisible;
  }
  switch (type) {
    case "title":
      return (
        <Title color={color} style={style}>
          <ReactTyped {...typedProps} />
        </Title>
      );
    case "subTitle":
      return (
        <SubTitle color={color} style={style}>
          <ReactTyped {...typedProps} />
        </SubTitle>
      );
    case "body":
      return (
        <Body color={color} style={style}>
          <ReactTyped {...typedProps} />
        </Body>
      );
    default:
      return (
        <Body color={color}>
          <ReactTyped {...typedProps} />
        </Body>
      );
  }
};

export default TypeWriter;

const Title = styled.h1`
  color: ${(props) => props.color};
  z-index: 1;
  background-color: black;
`;
const SubTitle = styled.h3`
  color: ${(props) => props.color};
  z-index: 1;
  background-color: black;
`;
const Body = styled.span`
  color: ${(props) => props.color};
  z-index: 1;
  background-color: black;
  font-weight: 500;
`;
