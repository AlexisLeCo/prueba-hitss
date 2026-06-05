import "./Step2.css";

import WizardLayout from "../components/Layout/WizardLayout";
import StepSidebar from "../components/Sidebar/StepSidebar";
import InputField from "../components/Forms/InputField";
import SelectField from "../components/Forms/SelectField";
import WizardNavigation from "../components/Navigation/WizardNavigation";

function Step2({ nextStep, prevStep }) {
  return (
    <div className="wizard-wrapper">
      <WizardLayout
        sidebar={
          <StepSidebar
            step={2}
            title="Datos Personales"
            description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
          />
        }
      >
        <div className="form-grid">
          <InputField label="Nombre" placeholder="Lorem Ipsum is simply" />

          <InputField
            label="Número de Celular"
            placeholder="Lorem Ipsum is simply"
          />

          <SelectField
            label="Tipo de Documento"
            options={["Lorem Ipsum is simply", "CC", "CE", "Pasaporte"]}
          />

          <InputField
            label="Número de Documento"
            placeholder="Lorem Ipsum is simply"
          />

          <InputField
            label="Correo Electrónico Corporativo"
            placeholder="Lorem Ipsum is simply"
          />

          <InputField
            label="Fecha de Nacimiento"
            placeholder="00 / 00 / 0000"
          />

          <div className="form-section-title">
            Domicilio
          </div>

          <div />

          <InputField
            label="Dirección de Residencia"
            placeholder="Lorem Ipsum is simply"
          />

          <InputField
            label="Ciudad / Municipio"
            placeholder="Lorem Ipsum is simply"
          />

          <SelectField
            label="Departamento"
            options={["Lorem Ipsum is simply", "Bogotá", "Antioquia", "Valle"]}
          />

          <InputField label="Barrio" placeholder="Lorem Ipsum is simply" />
        </div>
      </WizardLayout>

      <div className="wizard-actions">
        <WizardNavigation onBack={prevStep} onNext={nextStep} />
      </div>
    </div>
  );
}

export default Step2;