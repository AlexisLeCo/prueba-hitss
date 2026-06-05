import "./SelectField.css";

function SelectField({
  label,
  options = [],
}) {
  return (
    <div className="select-group">
      <label>{label}</label>

      <select>
        {options.map((option) => (
          <option
            key={option}
            value={option}
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectField;