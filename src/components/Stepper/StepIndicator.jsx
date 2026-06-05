import "./StepIndicator.css";

function StepIndicator({ currentStep }) {
  return (
    <div className="step-indicator">
      {[1, 2, 3, 4, 5].map((step) => (
        <div
          key={step}
          className={
            step <= currentStep
              ? "step active"
              : "step"
          }
        />
      ))}
    </div>
  );
}

export default StepIndicator;