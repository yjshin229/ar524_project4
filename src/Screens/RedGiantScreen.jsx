import React, { useState } from "react";
import styled from "styled-components";
import redGiant from "../assets/Red_giant_super_giant.gif";
import TypeWriter from "../components/TypeWriter";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setProgress } from "../redux/actions";

const RedGiantScreen = () => {
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
      <TypeWriter type={"subTitle"} stringArr={["Red Giant"]} />
      <ImgContainer src={redGiant} />
      <Description>
        <TypeWriter
          type={"body"}
          stringArr={[
            "A red giant is exactly what it sounds like. RED and GIANT",
            "It burns red because it's outside layer has a lower temperature around 5000 kelvin.",
            "Whereas a low mass star could burn as hot as 40,000 kelvin.",
            "The red giant will slowly get bigger as it burns helium.",
            "After about 10 billion years, the red giant will become unstable and the core will no longer to be able to hold the outer shells of the star.",
            "The outer shells will separate from the core of the star ...",
          ]}
          onComplete={handleFirstComplete}
          fadeOut
        />
      </Description>
      {firstDone && (
        <Next to={"/planetary-nebula"} onClick={() => updateProgress("death")}>
          <TypeWriter type={"body"} stringArr={["Next ->"]} />
        </Next>
      )}
    </ScreenContainer>
  );
};

export default RedGiantScreen;

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
