import "./OptionCard.css";

function OptionCard({
  title,
  description,
  selected,
  onClick,
}) {
  return (
    <div
      className={`option-card ${
        selected ? "selected" : ""
      }`}
      onClick={onClick}
    >
      <input
        type="radio"
        checked={selected}
        readOnly
      />

      <div className="option-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default OptionCard;