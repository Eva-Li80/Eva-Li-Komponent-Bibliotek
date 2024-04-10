import React, { useState } from "react";
import "./Sass/main.scss";
import Stepper, { Step } from "./Components/Stepper/Stepper";
import Pagination from "./Components/Pagination/Pagination";
import HamburgerMenu from "./Components/HamburgerMenu/HamburgerMenu";
import "./Sass/Colors/stepperColors.scss";

const App: React.FC = () => {
  const [currentPage1, setPage1] = useState(1);
  function handlePageChange(value: number) {
    setPage1(value);
  }

  const start: Step = { title: "Start", content: "1. start stepper" };
  const midle: Step = { title: "Midle", content: "2. in the process" };
  const finish: Step = { title: "Finish", content: "3. finish process" };
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { label: "Home" },
    { label: "About" },
    { label: "Contact" },
    { label: "Blog" },
    { label: "Careers" },
  ];

  return (
    <div>
      <>
        <HamburgerMenu
          isOpen={isOpen}
          toggleMenu={toggleMenu}
          menuItems={menuItems} // Look menu above
          menuSize={2} // Rem
          iconSize={2} // Rem
          lineHeight={3}
          color="black"
          menuBackgroundColor="lightgrey"
          position="start" // "start" | "center" | "end"
        />
      </>
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
