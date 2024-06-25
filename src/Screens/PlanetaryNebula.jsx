import React, { useState } from "react";
import styled from "styled-components";
import planetaryNebula from "../assets/Planetary_nebula.gif";
import TypeWriter from "../components/TypeWriter";
import { Link } from "react-router-dom";

const PlanetaryNebula = () => {
  const [firstDone, setFirstDone] = useState(false);

  const handleFirstComplete = () => {
    setFirstDone(true);
  };

  return (
    <ScreenContainer>
      <TypeWriter type={"subTitle"} stringArr={["Planetary Nebula"]} />
      <ImgContainer src={planetaryNebula} />
      <Description>
        <TypeWriter
          type={"body"}
          stringArr={[
            "In the center of a Planetary nebula, there is a white dwarf.",
            "After a few thousand years the planetary nebula will dissipate.",
            "Then will be recycled into another nebula to restart the process.",
            "However, the white dwarf remains...",
          ]}
          onComplete={handleFirstComplete}
          fadeOut
        />
      </Description>
      {firstDone && (
        <Next to={"/white-dwarf"}>
          <TypeWriter type={"body"} stringArr={["Next ->"]} />
        </Next>
      )}
    </ScreenContainer>
  );
};

export default PlanetaryNebula;

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
  width: 60%;
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

  &:hover {
    cursor: pointer;
    font-size: 1.2em;
  }
`;

const Next = styled(Link)`
  display: flex;
  position: absolute;
  bottom: 5rem;
  text-decoration: none;
  margin-top: 2rem;
  &:hover {
    cursor: pointer;
    font-size: 1.2em;
  }
`;
