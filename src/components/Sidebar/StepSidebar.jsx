import StepIndicator from "../Stepper/StepIndicator";


function StepSidebar({
  step,
  title,
  description,
}) {
  return (
    <>
      <h3>Paso {step}</h3>

      <h2>{title}</h2>

      <p>{description}</p>

      <StepIndicator currentStep={step} />
    </>
  );
}

export default StepSidebar;