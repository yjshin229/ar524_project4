import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const ProgressBar = () => {
  const progress = useSelector((state) => state.progress);

  let currentProgress;
  let currentStage;
  switch (progress) {
    case "birth":
      currentProgress = "25%";
      currentStage = "Birth";
      break;
    case "main_sequence":
      currentProgress = "50%";
      currentStage = "Main Sequence";
      break;
    case "old_age":
      currentProgress = "75%";
      currentStage = "Old Age";
      break;
    case "death":
      currentProgress = "100%";
      currentStage = "Death & Remnants";
      break;
    default:
      currentProgress = "0%";
      currentStage = "";
  }
  return (
    <ProgressBarContainer>
      <Bar>
        <Progress width={currentProgress}>
          <span>{currentStage}</span>
        </Progress>
      </Bar>
    </ProgressBarContainer>
  );
};

export default ProgressBar;

const ProgressBarContainer = styled.div`
  display: flex;
  z-index: 1;
  position: absolute;
  width: 95%;
  top: 2rem;
`;

const Bar = styled.div`
  background-color: #7b89c08e;
  width: 100%;
  height: 1em;
  border-radius: 1rem;
`;

const Progress = styled.div`
  background-color: #8799e3dd;
  width: ${(props) => props.width};
  height: 100%;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: end;
  padding-right: 10px;
`;
