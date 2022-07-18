import { useState } from "react";
import Button from "./Button";
import EmailInput from "./EmailInput";
import TextInput from "./TextInput";

export default function Author({
  createMode = false,
  inputId = "Author's ID",
  inputName = "Author's name",
  inputEmail = "Author's e-mail",
  inputPhone = "Author's phone",
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  function handleNameChange(newName) {
    setName(newName);
  }

  function handleEmailChange(newEmail) {
    setEmail(newEmail);
  }

  function handlePhoneChange(newPhone) {
    setPhone(newPhone);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
  }

  return (
    <form className="border flex flex-col p-2 m-2" onSubmit={handleFormSubmit}>
      <TextInput
        labelDescription="Name"
        inputValue={name || inputName}
        onInputChange={handleNameChange}
      />
      <EmailInput
        labelDescription="E-mail"
        inputValue={email || inputEmail}
        onInputChange={handleEmailChange}
      />
      <TextInput
        labelDescription="Phone"
        inputValue={phone || inputPhone}
        onInputChange={handlePhoneChange}
      />
      <div className="flex items-center justify-end">
        <Button
          labelDescription="Save"
          colorClass="bg-green-200"
          type="submit"
        />
        <Button labelDescription="Delete" colorClass="bg-red-200" />
      </div>
    </form>
  );
}
