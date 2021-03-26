import styled from "styled-components";
import AllData from "./AllData";

const MainBackground = styled.main`
  background-color: #efefef;
  height: 100vh;
`;

function App() {
  return (
    <MainBackground>
      <h1>Hellow</h1>
      <AllData />
    </MainBackground>
  );
}

export default App;
