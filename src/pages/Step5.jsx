import { useState } from "react";
import "./Step5.css";

import WizardLayout from "../components/Layout/WizardLayout";
import StepSidebar from "../components/Sidebar/StepSidebar";
import WizardNavigation from "../components/Navigation/WizardNavigation";
import CheckboxField from "../components/Forms/CheckboxField";

function Step5({ nextStep, prevStep }) {
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [acceptedData, setAcceptedData] = useState(false);

  return (
    <WizardLayout
      sidebar={
        <StepSidebar
          step={5}
          title="Aceptación de Términos"
          description="Revisa y acepta los términos para finalizar el proceso."
        />
      }
    >
      <section className="terms-content">
        <h3>Lorem Ipsum is not simply</h3>

        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>

        <p>
          There are many variations of passages of Lorem Ipsum available, but the
          majority have suffered alteration in some form.
        </p>

        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC.
        </p>
      </section>

      <CheckboxField
        label="Autorizo el tratamiento de mis datos personales"
        checked={acceptedTerms}
        onChange={() => setAcceptedTerms(!acceptedTerms)}
      />

      <CheckboxField
        label="Autorizo el tratamiento de mis datos personales"
        checked={acceptedData}
        onChange={() => setAcceptedData(!acceptedData)}
      />

      <WizardNavigation onBack={prevStep} onNext={nextStep} />
    </WizardLayout>
  );
}

export default Step5;