import "./CheckboxField.css";

function CheckboxField({
  label,
  checked,
  onChange,
}) {
  return (
    <label className="checkbox-field">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />

      <span>{label}</span>
    </label>
  );
}

export default CheckboxField;