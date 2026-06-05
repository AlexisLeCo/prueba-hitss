import "./PlanCard.css";

function PlanCard({ title, description }) {
  return (
    <div className="plan-card">
      <h3>{title}</h3>

      <p>Incluye:</p>

      <p>{description}</p>
    </div>
  );
}

export default PlanCard;