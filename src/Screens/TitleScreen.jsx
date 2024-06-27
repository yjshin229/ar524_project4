import React, { useState } from "react";
import styled from "styled-components";
import TypeWriter from "../components/TypeWriter";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setProgress } from "../redux/actions";

const TitleScreen = () => {
  const [firstDone, setFirstDone] = useState(false);
  const dispatch = useDispatch();

  const updateProgress = (newProgress) => {
    dispatch(setProgress(newProgress));
  };

  const handleFirstComplete = () => {
    setFirstDone(true);
  };

  return (
    <TitleContainer>
      <TypeWriter
        type={"title"}
        color={"white"}
        stringArr={["Life Cycle of a Star"]}
        onComplete={handleFirstComplete}
      />
      <Explore to={"/gas-cloud"} onClick={() => updateProgress("birth")}>
        {firstDone && (
          <TypeWriter
            type={"subTitle"}
            color={"white"}
            stringArr={["Explore ->"]}
          />
        )}
      </Explore>
    </TitleContainer>
  );
};

export default TitleScreen;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Explore = styled(Link)`
  display: flex;
  text-decoration: none;
  position: absolute;
  bottom: 18rem;
  &:hover {
    cursor: pointer;
    font-size: 1.2em;
  }
`;
