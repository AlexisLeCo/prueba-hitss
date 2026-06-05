import { useState } from "react";

import WizardLayout from "../components/Layout/WizardLayout";
import StepSidebar from "../components/Sidebar/StepSidebar";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import OptionCard from "../components/Cards/OptionCard";

function Step3({ nextStep, prevStep }) {
  const [selectedOption, setSelectedOption] =
    useState("");

  return (
    <WizardLayout
      sidebar={
        <StepSidebar
          step={3}
          title="Activa a tu familia con Bolívar y Claro"
          description="Dependiendo del tipo de línea de tu familiar, elige una de las siguientes opciones."
        />
      }
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <OptionCard
          title="Línea Nueva"
          description="Si deseas un nuevo número y recibir una nueva SIM Card."
          selected={
            selectedOption === "nueva"
          }
          onClick={() =>
            setSelectedOption("nueva")
          }
        />

        <OptionCard
          title="Inclusión Claro"
          description="Si eres usuario actual de Claro."
          selected={
            selectedOption === "claro"
          }
          onClick={() =>
            setSelectedOption("claro")
          }
        />

        <OptionCard
          title="Portabilidad"
          description="Si deseas conservar tu número."
          selected={
            selectedOption === "portabilidad"
          }
          onClick={() =>
            setSelectedOption("portabilidad")
          }
        />
      </div>

      <div className="buttons">
        <PrimaryButton onClick={prevStep}>
          Regresar
        </PrimaryButton>

        <PrimaryButton onClick={nextStep}>
          Siguiente
        </PrimaryButton>
      </div>
    </WizardLayout>
  );
}

export default Step3;