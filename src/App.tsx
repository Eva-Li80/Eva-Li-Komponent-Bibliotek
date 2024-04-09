import React, { useState } from "react";
import "./Sass/main.scss";
import Stepper, { Step } from "./Components/Stepper/Stepper";
import Pagination from "./Components/Pagination/Pagination";

const App: React.FC = () => {
  const [currentPage1, setPage1] = useState(1);
  function handlePageChange(value: number) {
    setPage1(value);
  }

  const start: Step = { title: "Start", content: "1. start stepper" };
  const midle: Step = { title: "Midle", content: "2. in the process" };
  const finish: Step = { title: "Finish", content: "3. finish process" };

  return (
    <div>
      <Stepper startStep={start} midleStep={midle} finishStep={finish} />
      <Pagination
        currentPage={currentPage1}
        count={10}
        onChange={handlePageChange}
        variant="square"
        color="primary"
      />
    </div>
  );
};

export default App;
