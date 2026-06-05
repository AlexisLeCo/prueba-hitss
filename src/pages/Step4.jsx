import WizardLayout from "../components/Layout/WizardLayout";
import StepSidebar from "../components/Sidebar/StepSidebar";

import InputField from "../components/Forms/InputField";
import SelectField from "../components/Forms/SelectField";

import WizardNavigation from "../components/Navigation/WizardNavigation";

function Step4({
  nextStep,
  prevStep,
}) {
  return (
    <WizardLayout
      sidebar={
        <StepSidebar
          step={4}
          title="Portabilidad Claro"
          description="Recuerda: si eres usuario de otro operador y deseas portar tu número."
        />
      }
    >
      <div className="form-grid">
        <SelectField
          label="Operador Actual"
          options={[
            "Seleccionar",
            "Movistar",
            "Tigo",
            "AT&T",
          ]}
        />

        <InputField
          label="Número de Celular"
          placeholder="3001234567"
        />

        <SelectField
          label="Entidad"
          options={[
            "Seleccionar",
            "Empresa A",
            "Empresa B",
          ]}
        />
      </div>

      <p
        style={{
          marginTop: "24px",
          color: "#666",
        }}
      >
        Enviaremos al domicilio registrado la nueva SIM Card.
      </p>

      <WizardNavigation
        onBack={prevStep}
        onNext={nextStep}
      />
    </WizardLayout>
  );
}

export default Step4;