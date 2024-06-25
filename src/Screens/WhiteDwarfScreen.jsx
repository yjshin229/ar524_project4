import React, { useState } from "react";
import styled from "styled-components";
import whiteDwarf from "../assets/White_dwarf.gif";
import TypeWriter from "../components/TypeWriter";
import { Link } from "react-router-dom";

const WhiteDwarfScreen = () => {
  const [firstDone, setFirstDone] = useState(false);

  const handleFirstComplete = () => {
    setFirstDone(true);
  };

  return (
    <ScreenContainer>
      <TypeWriter type={"subTitle"} stringArr={["White Dwarf"]} />
      <ImgContainer src={whiteDwarf} />
      <Description>
        <TypeWriter
          type={"body"}
          stringArr={[
            "The white dwarf will burn for billions of years.",
            "It will eventually cool down...",
          ]}
          onComplete={handleFirstComplete}
          fadeOut
        />
      </Description>
      {firstDone && (
        <Next to={"/black-dwarf"}>
          <TypeWriter type={"body"} stringArr={["Next ->"]} />
        </Next>
      )}
    </ScreenContainer>
  );
};

export default WhiteDwarfScreen;

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
