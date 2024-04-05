import { useState } from "react";

export type Stepp = {
  title: string;
  content?: string;
};

export type StepperProps = {
  startStepp: Stepp;
  midleStepp: Stepp;
  finishStepp: Stepp;
};

const Stepper = ({ startStepp, midleStepp, finishStepp }: StepperProps) => {
  const [step, setStep] = useState<"start" | "midle" | "finish">("start");

  const handleSteps = () => {
    if (step === "start") {
      setStep("midle");
    } else if (step === "midle") {
      setStep("finish");
    }
  };

  const handleStepStyle = (currentStep: string) => {
    switch (currentStep) {
      case "start":
        return step === "start" ? " start-stepper " : "not-active";

      case "midle":
        return step === "midle" ? " midle-stepper " : "not-active";

      case "finish":
        return step === "finish" ? " finish-stepper " : "not-active";

      default:
        return "";
    }
  };

  return (
    <div className="stepper-container">
      <div className="stepper">
        <p className="content">{startStepp.content}</p>
        <div className={`all ${handleStepStyle("start")}`}>
          <p>{startStepp.title}</p>
        </div>
        <p className="content">{midleStepp.content}</p>
        <div className={`all ${handleStepStyle("midle")}`}>
          <p>{midleStepp.title}</p>
        </div>
        <p className="content">{finishStepp.content}</p>
        <div className={`all ${handleStepStyle("finish")}`}>
          <p>{finishStepp.title}</p>
        </div>
      </div>
      <div className="btn-container">
        {step && (
          <button className="btn" onClick={handleSteps}>
            Click next
          </button>
        )}
      </div>
    </div>
  );
};
export default Stepper;
