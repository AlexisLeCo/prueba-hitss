import "./WizardNavigation.css";
import PrimaryButton from "../Buttons/PrimaryButton";

function WizardNavigation({ onBack, onNext, showBack = true }) {
  return (
    <div className="wizard-navigation">
      <div>
        {showBack && (
          <PrimaryButton onClick={onBack} variant="dark">
            Regresar
          </PrimaryButton>
        )}
      </div>

      <PrimaryButton onClick={onNext}>Siguiente</PrimaryButton>
    </div>
  );
}

export default WizardNavigation;