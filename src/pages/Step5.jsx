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
    <div className="wizard-wrapper">
      <WizardLayout
        sidebar={
          <StepSidebar
            step={5}
            title="Aceptación de Términos"
            description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."
          />
        }
      >
        <section className="terms-content">
          <h3>Lorem Ipsum is not simply</h3>

          <p>
            It is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters, as opposed to using &apos;Content here, content
            here&apos;, making it look like readable English.
          </p>

          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don&apos;t look even slightly
            believable.
          </p>

          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It
            has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old.
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
      </WizardLayout>

      <div className="wizard-actions">
        <WizardNavigation onBack={prevStep} onNext={nextStep} />
      </div>
    </div>
  );
}

export default Step5;