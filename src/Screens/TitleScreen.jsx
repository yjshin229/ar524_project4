import React, { useState } from "react";
import styled from "styled-components";
import TypeWriter from "../components/TypeWriter";
import { Link } from "react-router-dom";

const TitleScreen = () => {
  const [firstDone, setFirstDone] = useState(false);

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
      <Explore to={"/gas-cloud"}>
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
  &:hover {
    cursor: pointer;
    font-size: 1.2em;
  }
`;
