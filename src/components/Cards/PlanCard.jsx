import "./PlanCard.css";

function PlanCard({ title, description, selected, onClick }) {
  return (
    <button
      className={`plan-card ${selected ? "selected" : ""}`}
      onClick={onClick}
      type="button"
    >
      <span className="plan-radio" />

      <div className="plan-info">
        <h3>{title}</h3>

        <strong>Incluye:</strong>

        <p>{description}</p>
      </div>
    </button>
  );
}

export default PlanCard;