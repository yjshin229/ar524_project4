import React, { useState } from "react";
import styled from "styled-components";
import smallStar from "../assets/Small_star.gif";
import TypeWriter from "../components/TypeWriter";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setProgress } from "../redux/actions";

const SmallStarScreen = () => {
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
      <TypeWriter type={"subTitle"} stringArr={["Low Mass Star"]} />
      <ImgContainer src={smallStar} />
      <Description>
        <TypeWriter
          type={"body"}
          stringArr={[
            "Low mass stars are generally cooler and shine less brightly giving the star a more red appearance.",
            "The sun we know is a low mass star.",
            "After billions years, the star will start burning its helium.",
            "When the star is out of hydrogen to burn...",
          ]}
          onComplete={handleFirstComplete}
          fadeOut
        />
      </Description>
      {firstDone && (
        <Next to={"/red-giant"} onClick={() => updateProgress("old_age")}>
          <TypeWriter type={"body"} stringArr={["Next ->"]} />
        </Next>
      )}
    </ScreenContainer>
  );
};

export default SmallStarScreen;

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
