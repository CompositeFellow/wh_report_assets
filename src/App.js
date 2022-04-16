import styled from "styled-components";
import Assets from "./AssetList";
import SafteyRatingBar from "./assets/SafteyRatingBar";

const TitleBar = styled.header`
  font-size: 5rem;
  width: 100%;
  min-height: 10%;
  display: flex;
  justify-content: center;
`;

function App() {
  return (
    <div className="App">
      <TitleBar>WhiteHatDAO Security Report Visual Assets</TitleBar>
      <Assets>
        <SafteyRatingBar />
      </Assets>
    </div>
  );
}

export default App;
