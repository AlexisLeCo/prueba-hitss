import WizardLayout from "../components/Layout/WizardLayout";
import StepSidebar from "../components/Sidebar/StepSidebar";
import InputField from "../components/Forms/InputField";
import SelectField from "../components/Forms/SelectField";
import WizardNavigation from "../components/Navigation/WizardNavigation";

function Step4({ nextStep, prevStep }) {
  return (
    <div className="wizard-wrapper">
      <WizardLayout
        sidebar={
          <StepSidebar
            step={4}
            title="Portabilidad Claro"
            description="Recuerda: si eres usuario de otro operador y deseas portar tu número, la línea debe estar a tu nombre, estar al día en tus pagos y no puede estar suspendida."
          />
        }
      >
        <div className="form-grid">
          <SelectField
            label="* Operador actual"
            options={["Seleccionar", "Movistar", "Tigo", "AT&T"]}
          />

          <InputField
            label="* Ingresa tu número de celular actual:"
            placeholder="44 5678 1234"
          />

          <SelectField
            label="* Entidad a la que perteneces"
            options={["Seleccionar", "Empresa A", "Empresa B"]}
          />
        </div>

        <div className="info-box">
          * Enviaremos al domicilio que registraste la nueva Sim Card
        </div>
      </WizardLayout>

      <div className="wizard-actions">
        <WizardNavigation onBack={prevStep} onNext={nextStep} />
      </div>
    </div>
  );
}

export default Step4;