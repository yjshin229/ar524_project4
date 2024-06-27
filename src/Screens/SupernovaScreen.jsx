import React, { useState } from "react";
import styled from "styled-components";
import superNova from "../assets/Supernova.gif";
import TypeWriter from "../components/TypeWriter";
import { Link } from "react-router-dom";

const SupernovaScreen = () => {
  const [firstDone, setFirstDone] = useState(false);

  const handleFirstComplete = () => {
    setFirstDone(true);
  };

  return (
    <ScreenContainer>
      <TypeWriter type={"subTitle"} stringArr={["Supernova"]} />
      <ImgContainer src={superNova} />
      <Description>
        <TypeWriter
          type={"body"}
          stringArr={[
            "The explosion creates a supernova.",
            "When the red super giant explodes, it releases most of the star's mass into space.",
            "Only the core of the star is left...",
            "How heavy is your star's core?",
          ]}
          onComplete={handleFirstComplete}
          fadeOut
        />
      </Description>
      {firstDone && (
        <Options>
          <Option to={"/neutron-star"}>
            <TypeWriter
              type={"body"}
              stringArr={["less than 1.4 times the Sun's mass ->"]}
            />
          </Option>
          <Option to={"/black-hole"}>
            <TypeWriter
              type={"body"}
              stringArr={["greater than 2-3 times the Sun's mass ->"]}
            />
          </Option>
        </Options>
      )}
    </ScreenContainer>
  );
};

export default SupernovaScreen;

const ScreenContainer = styled.section`
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImgContainer = styled.img`
  margin-top: 2rem;
  height: 25%;
  width: 25%;
`;

const Description = styled.div`
  width: 50%;
  margin-top: 2rem;
`;

const Options = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 5rem;
  width: 50%;
  height: 1.2em;
`;

const Option = styled(Link)`
  text-decoration: none;
  width: 30%;

  &:hover {
    cursor: pointer;
    font-size: 1.2em;
  }
`;
