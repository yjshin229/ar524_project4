import background from "./assets/space_background.png";
import "./App.css";
import styled from "styled-components";

import { Route, Routes } from "react-router-dom";
import TitleScreen from "./Screens/TitleScreen";
import GasCloudScreen from "./Screens/GasCloudScreen";
import ProtostarScreen from "./Screens/ProtostarScreen";
import BigStarScreen from "./Screens/BigStarScreen";
import SmallStarScreen from "./Screens/SmallStarScreen";
import RedGiantScreen from "./Screens/RedGiantScreen";
import RedSuperGiantScreen from "./Screens/RedSuperGiantScreen";
import PlanetaryNebula from "./Screens/PlanetaryNebula";
import WhiteDwarfScreen from "./Screens/WhiteDwarfScreen";
import BlackDwarfScreen from "./Screens/BlackDwarfScreen";
import SupernovaScreen from "./Screens/SupernovaScreen";
import BlackholeScreen from "./Screens/BlackholeScreen";
import NeutronStarScreen from "./Screens/NeutronStarScreen";
import ProgressBar from "./components/ProgressBar";

function App() {
  return (
    <AppContainer className="App">
      <BackgroundImage src={background} alt="background" />
      <ProgressBar />
      <Routes>
        <Route path="/" element={<TitleScreen />} />
        <Route path="/gas-cloud" element={<GasCloudScreen />} />
        <Route path="/protostar" element={<ProtostarScreen />} />
        <Route path="/big-star" element={<BigStarScreen />} />
        <Route path="/small-star" element={<SmallStarScreen />} />
        <Route path="/red-giant" element={<RedGiantScreen />} />
        <Route path="/red-super-giant" element={<RedSuperGiantScreen />} />
        <Route path="/planetary-nebula" element={<PlanetaryNebula />} />
        <Route path="/white-dwarf" element={<WhiteDwarfScreen />} />
        <Route path="/black-dwarf" element={<BlackDwarfScreen />} />
        <Route path="/supernova" element={<SupernovaScreen />} />
        <Route path="/black-hole" element={<BlackholeScreen />} />
        <Route path="/neutron-star" element={<NeutronStarScreen />} />
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
