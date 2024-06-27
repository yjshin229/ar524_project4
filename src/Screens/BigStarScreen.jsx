import React, { useState } from "react";
import styled from "styled-components";
import bigStar from "../assets/Big_star.gif";
import TypeWriter from "../components/TypeWriter";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setProgress } from "../redux/actions";

const BigStarScreen = () => {
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
      <TypeWriter type={"subTitle"} stringArr={["High Mass Star"]} />
      <ImgContainer src={bigStar} />
      <Description>
        <TypeWriter
          type={"body"}
          stringArr={[
            "High mass stars burn much hotter and brighter giving the star a more blue appearance.",
            "The star will spend most of its life burning hydrogen in its core.",
            "After billions of years the core is hot enough to fuse hydrogen into helium on the outer shell of the core",
            "The star is expanding...",
          ]}
          onComplete={handleFirstComplete}
          fadeOut
        />
      </Description>
      {firstDone && (
        <Next to={"/red-super-giant"} onClick={() => updateProgress("old_age")}>
          <TypeWriter type={"body"} stringArr={["Next ->"]} />
        </Next>
      )}
    </ScreenContainer>
  );
};

export default BigStarScreen;

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
