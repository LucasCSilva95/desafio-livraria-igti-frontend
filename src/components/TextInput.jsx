import { getNewId } from "../services/idService";

export default function TextInput({
  labelDescription = "Label description",
  inputValue = "Input value",
  onInputChange = null,
  id = getNewId(),
  autoFocus = false,
}) {
  function handleInputChange({ currentTarget }) {
    if (onInputChange) {
      const newValue = currentTarget.value;
      onInputChange(newValue);
    }
  }
  return (
    <div className="flex flex-col my-2">
      <label className="text-sm mb-1" htmlFor={id}>
        {labelDescription}
      </label>
      <input
        autoFocus={autoFocus}
        id={id}
        className="border p-1"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
}
