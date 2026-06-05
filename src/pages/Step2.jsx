import "./Step2.css";

import WizardLayout from "../components/Layout/WizardLayout";
import StepSidebar from "../components/Sidebar/StepSidebar";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import InputField from "../components/Forms/InputField";

function Step2({ nextStep, prevStep }) {
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
      <div className="form-grid">
        <InputField
          label="Nombre"
          placeholder="Ingrese su nombre"
        />

        <InputField
          label="Número de Documento"
          placeholder="Documento"
        />

        <InputField
          label="Tipo de Documento"
          placeholder="CC"
        />

        <InputField
          label="Fecha de Nacimiento"
          placeholder="00/00/0000"
        />

        <InputField
          label="Correo Electrónico"
          placeholder="correo@empresa.com"
        />

        <InputField
          label="Ciudad / Municipio"
          placeholder="Ciudad"
        />

        <InputField
          label="Domicilio"
          placeholder="Dirección"
        />

        <InputField
          label="Barrio"
          placeholder="Barrio"
        />

        <InputField
          label="Número de Celular"
          placeholder="3001234567"
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

export default Step2;