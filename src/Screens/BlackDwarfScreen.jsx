import React, { useState } from "react";
import styled from "styled-components";
import blackDwarf from "../assets/Black_dwarf.gif";
import TypeWriter from "../components/TypeWriter";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setProgress } from "../redux/actions";

const WhiteDwarfScreen = () => {
  const [firstDone, setFirstDone] = useState(false);

  const handleFirstComplete = () => {
    setFirstDone(true);
  };

  const dispatch = useDispatch();

  const updateProgress = (newProgress) => {
    dispatch(setProgress(newProgress));
  };

  return (
    <ScreenContainer>
      <TypeWriter type={"subTitle"} stringArr={["Black Dwarf"]} />
      <ImgContainer src={blackDwarf} />
      <Description>
        <TypeWriter
          type={"body"}
          stringArr={[
            "A black dwarf doesn't emit light or energy.",
            "This is the theory we have for now.",
            "Scientists do not know 100% of the black dwarf because we have never discovered one yet.",
          ]}
          onComplete={handleFirstComplete}
          fadeOut
        />
      </Description>
      {firstDone && (
        <Next to={"/"} onClick={() => updateProgress("")}>
          <TypeWriter type={"body"} stringArr={["Start over ->"]} />
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
  width: 50%;
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
