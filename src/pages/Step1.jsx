import WizardLayout from "../components/Layout/WizardLayout";
import StepSidebar from "../components/Sidebar/StepSidebar";

function Step1() {
  return (
    <WizardLayout sidebar={<StepSidebar />}>
      <h2>Contenido Paso 1</h2>
    </WizardLayout>
  );
}

export default Step1;