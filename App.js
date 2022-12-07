import * as React from 'react';
import MainContainer from './navigation/MainContainer';
import { FitnessContext } from "./Context";

function App() {
  return (
    <FitnessContext>
      <MainContainer/>
    </FitnessContext>
  );
}

export default App;