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

  if (currentStep === 6) {
    return <Success restart={restart} />;
  }

  return (
    <div className="page">
      <header className="header">
        <h1>Tecnología para tu Empresa</h1>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old.
        </p>
      </header>

      {currentStep === 1 && <Step1 nextStep={nextStep} />}

      {currentStep === 2 && (
        <Step2 nextStep={nextStep} prevStep={prevStep} />
      )}

      {currentStep === 3 && (
        <Step3 nextStep={nextStep} prevStep={prevStep} />
      )}

      {currentStep === 4 && (
        <Step4 nextStep={nextStep} prevStep={prevStep} />
      )}

      {currentStep === 5 && (
        <Step5 nextStep={nextStep} prevStep={prevStep} />
      )}
    </div>
  );
}

export default App;