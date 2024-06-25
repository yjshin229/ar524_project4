import background from "./assets/space_background.png";
import "./App.css";
import styled, { createGlobalStyle } from "styled-components";
import TypeWriter from "./components/TypeWriter";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import TitleScreen from "./Screens/TitleScreen";
import GasCloudScreen from "./Screens/GasCloudScreen";
import ProtostarScreen from "./Screens/ProtostarScreen";
import BigStarScreen from "./Screens/BigStarScreen";
import SmallStarScreen from "./Screens/SmallStarScreen";

function App() {
  return (
    <AppContainer className="App">
      <BackgroundImage src={background} alt="background" />
      <Routes>
        <Route path="/" element={<TitleScreen />} />
        <Route path="/gas-cloud" element={<GasCloudScreen />} />
        <Route path="/protostar" element={<ProtostarScreen />} />
        <Route path="/bigstar" element={<BigStarScreen />} />
        <Route path="/smallstar" element={<SmallStarScreen />} />
      </Routes>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  font-family: "Kode Mono", monospace;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  background-color: black;
  height: 100vh;
  justify-content: center;
  display: flex;
  align-items: center;
  color: white;
`;

const BackgroundImage = styled.img`
  height: 100%;
  width: 100%;
  z-index: 0;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: fill;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Explore = styled.div`
  display: flex;
`;
