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
  showCursor = true,
  fadeOut = false,
}) => {
  const typedProps = {
    strings: stringArr,
    typeSpeed: 40,
    backSpeed: backSpeed,
  };

  if (onComplete) {
    typedProps.onComplete = onComplete;
  }
  if (!showCursor) {
    typedProps.showCursor = false;
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
  }

  return <div>TypeWriter</div>;
};

export default TypeWriter;

const Title = styled.h1`
  color: ${(props) => props.color};
  z-index: 1;
`;
const SubTitle = styled.h3`
  color: ${(props) => props.color};
  z-index: 1;
`;
const Body = styled.span`
  color: ${(props) => props.color};
  z-index: 1;
`;
