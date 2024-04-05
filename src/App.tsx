import React from 'react';
import "./Sass/main.scss"
import Stepper, { Stepp } from './Components/Stepper/Stepper';

const App: React.FC = () => {
  const start: Stepp = {title: "Start", content: "1. start stepper"}
  const midle: Stepp = {title: "Midle", content: "2. in the process"}
  const finish: Stepp = {title: "Finish", content: "3. finish process"}


  return (
    <div>
      <Stepper startStepp={start} midleStepp={midle} finishStepp={finish}/>
    </div>
  );
};

export default App;
