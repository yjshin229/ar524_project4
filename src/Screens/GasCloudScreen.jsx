import React, { useState } from "react";
import styled from "styled-components";
import gasCloud from "../assets/Gas_cloud.gif";
import TypeWriter from "../components/TypeWriter";
import { Link } from "react-router-dom";

const GasCloudScreen = () => {
  const [firstDone, setFirstDone] = useState(false);

  const handleFirstComplete = () => {
    setFirstDone(true);
  };

  return (
    <GasCloudContainer>
      <TypeWriter type={"subTitle"} stringArr={["Stellar Nebula"]} />
      <GasCloud src={gasCloud} />
      <Description>
        <TypeWriter
          type={"body"}
          stringArr={[
            "All stars initially form from a cloud of dust and hydrogen gas.",
            "Gravity over millions of years causes the dust and gas to spiral together.",
            "The particles move faster and eventually reach temperature of millions of degrees.",
            "Then creates a mass of hydrogen...",
          ]}
          onComplete={handleFirstComplete}
          fadeOut
        />
      </Description>
      {firstDone && (
        <Next to={"/protostar"}>
          <TypeWriter type={"body"} stringArr={["Next ->"]} />
        </Next>
      )}
    </GasCloudContainer>
  );
};

export default GasCloudScreen;

const GasCloudContainer = styled.section`
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const GasCloud = styled.img`
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
  &:hover {
    cursor: pointer;
    font-size: 1.2em;
  }
`;
