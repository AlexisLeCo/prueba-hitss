import "./PrimaryButton.css";

function PrimaryButton({ children, onClick, variant = "primary" }) {
  return (
    <button className={`primary-button ${variant}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default PrimaryButton;