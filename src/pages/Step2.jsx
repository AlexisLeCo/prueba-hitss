import WizardLayout from "../components/Layout/WizardLayout";
import StepSidebar from "../components/Sidebar/StepSidebar";
import PrimaryButton from "../components/Buttons/PrimaryButton";

function Step2({ prevStep }) {
  return (
    <WizardLayout
      sidebar={
        <StepSidebar
          step={2}
          title="Datos Personales"
          description="Ingresa tu información personal."
        />
      }
    >
      <h2>Paso 2</h2>

      <PrimaryButton onClick={prevStep}>
        Regresar
      </PrimaryButton>
    </WizardLayout>
  );
}

export default Step2;