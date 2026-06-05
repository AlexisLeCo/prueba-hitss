import { useState } from "react";

import WizardLayout from "../components/Layout/WizardLayout";
import StepSidebar from "../components/Sidebar/StepSidebar";
import OptionCard from "../components/Cards/OptionCard";
import WizardNavigation from "../components/Navigation/WizardNavigation";

function Step3({ nextStep, prevStep }) {
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div className="wizard-wrapper">
      <WizardLayout
        sidebar={
          <StepSidebar
            step={3}
            title="¡Activa a tu familia con Bolívar y Claro!"
            description="Dependiendo del tipo de línea de tu familiar, elige una de las siguientes opciones."
          />
        }
      >
        <div className="option-list">
          <OptionCard
            title="Línea Nueva"
            description="Si deseas un nuevo número y recibir una nueva SIM Card, elige esta opción."
            selected={selectedOption === "nueva"}
            onClick={() => setSelectedOption("nueva")}
          />

          <OptionCard
            title="Inclusión Claro"
            description="Si eres usuario actual de Claro y quieres cambiar tu plan, elige esta opción."
            selected={selectedOption === "claro"}
            onClick={() => setSelectedOption("claro")}
          />

          <OptionCard
            title="Portabilidad"
            description="Si eres usuario de otro operador y deseas conservar tu número, elige esta opción."
            selected={selectedOption === "portabilidad"}
            onClick={() => setSelectedOption("portabilidad")}
          />
        </div>
      </WizardLayout>

      <div className="wizard-actions">
        <WizardNavigation onBack={prevStep} onNext={nextStep} />
      </div>
    </div>
  );
}

export default Step3;