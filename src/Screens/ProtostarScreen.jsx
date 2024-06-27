import React, { useState } from "react";
import styled from "styled-components";
import protostar from "../assets/Protostar.gif";
import TypeWriter from "../components/TypeWriter";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setProgress } from "../redux/actions";

const ProtostarScreen = () => {
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
      <TypeWriter type={"subTitle"} stringArr={["Protostar"]} />
      <ImgContainer src={protostar} />
      <Description>
        <TypeWriter
          type={"body"}
          stringArr={[
            "The center mass of hydrogen is the protostar.",
            "The protostar will start burning hydrogen to make helium.",
            "How fast will you burn the hydrogen?",
          ]}
          onComplete={handleFirstComplete}
          fadeOut
        />
      </Description>
      {firstDone && (
        <Options>
          <Option
            to={"/small-star"}
            onClick={() => updateProgress("main_sequence")}
          >
            <TypeWriter type={"body"} stringArr={["Slow ->"]} />
          </Option>
          <Option
            to={"/big-star"}
            onClick={() => updateProgress("main_sequence")}
          >
            <TypeWriter type={"body"} stringArr={["Fast ->"]} />
          </Option>
        </Options>
      )}
    </ScreenContainer>
  );
};

export default ProtostarScreen;

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
