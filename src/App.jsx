import { useState } from "react";

import Step1 from "./pages/Step1";
import Step2 from "./pages/Step2";
import Step3 from "./pages/Step3";
import Step4 from "./pages/Step4";
import Step5 from "./pages/Step5";
import Success from "./pages/Success";

function App() {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const restart = () => {
  setCurrentStep(1);
};

  switch (currentStep) {
    case 1:
      return <Step1 nextStep={nextStep} />;

    case 2:
      return <Step2 nextStep={nextStep} prevStep={prevStep} />;
    case 3:
      return <Step3 nextStep={nextStep} prevStep={prevStep} />;

    case 4:
      return <Step4 nextStep={nextStep} prevStep={prevStep} />;

    case 5:
      return <Step5 nextStep={nextStep} prevStep={prevStep} />;

    case 6:
      return <Success restart={restart} />;

    default:
      return <Step1 nextStep={nextStep} />;
  }
}

export default App;
