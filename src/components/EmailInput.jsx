import { useState } from "react";
import { validateEmail } from "../helpers/emailHelper";
import { getNewId } from "../services/idService";

export default function EmailInput({
  labelDescription = "Label description",
  inputValue = "Input value",
  onInputChange = null,
  id = getNewId(),
  autoFocus = false,
}) {
  const [error, setError] = useState(false);

  function handleInputChange({ currentTarget }) {
    if (onInputChange) {
      const newValue = currentTarget.value;
      emailError(newValue);
      onInputChange(newValue);
    }
  }

  function emailError(email) {
    if (validateEmail(email)) {
      setError(false);
    } else {
      setError(true);
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
        className={`outline-none border p-1 ${error ? `border-red-500` : ``}`}
        type="email"
        value={inputValue}
        onChange={handleInputChange}
      />
      {error ? (
        <span className="text-right text-red-500">Invalid e-mail</span>
      ) : (
        <></>
      )}
    </div>
  );
}
