import React, { useState } from "react";
import styled from "styled-components";
import neutronStar from "../assets/Neutron_star.gif";
import TypeWriter from "../components/TypeWriter";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setProgress } from "../redux/actions";

const NeutronStarScreen = () => {
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
      <TypeWriter type={"subTitle"} stringArr={["Neutron Star"]} />
      <ImgContainer src={neutronStar} />
      <Description>
        <TypeWriter
          type={"body"}
          stringArr={[
            "A neutron star is a small but extremely dense star.",
            "The neutron star has no fusion left and no longer generates energy and does not emit light.",
            "Therefore, could not be seen with a naked eye.",
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

export default NeutronStarScreen;

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
