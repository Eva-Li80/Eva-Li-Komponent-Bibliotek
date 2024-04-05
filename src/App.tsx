import React from 'react';
import "./Sass/main.scss"
import Stepper, { Step } from './Components/Stepper/Stepper';

const App: React.FC = () => {
  const start: Step = {title: "Start", content: "1. start stepper"}
  const midle: Step = {title: "Midle", content: "2. in the process"}
  const finish: Step = {title: "Finish", content: "3. finish process"}


  return (
    <div>
      <Stepper startStep={start} midleStep={midle} finishStep={finish}/>
    </div>
  );
};

export default App;
