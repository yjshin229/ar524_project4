import React, { useState } from "react";
import styled from "styled-components";
import blackhole from "../assets/Blackhole.gif";
import TypeWriter from "../components/TypeWriter";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setProgress } from "../redux/actions";

const BlackholeScreen = () => {
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
      <TypeWriter type={"subTitle"} stringArr={["Black Hole"]} />
      <ImgContainer src={blackhole} />
      <Description>
        <TypeWriter
          type={"body"}
          stringArr={[
            "A black hole is a region of space having a gravitational field that is extremely intense.",
            "It is so intense that no matter or radiation can escape.",
            "A black hole appears as a dark region in space.",
            "It is surrounded by an event horizon with a disk emitting high-energy radiation if material is falling in.",
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

export default BlackholeScreen;

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
