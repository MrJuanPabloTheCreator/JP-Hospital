"use client"

import { ChangeEvent, useState } from "react";

const UpdateComponent: React.FC = () => {
  // Constant state
  const [isConstantTrue, setIsConstantTrue] = useState<boolean>(false);

  // Form field state
  const [formFieldValue, setFormFieldValue] = useState<string>('');

  // Function to handle form field change
  const handleFormFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormFieldValue(value);
  };

  // Function to toggle the state of the constant
  const toggleConstantState = () => {
    setIsConstantTrue((prev) => !prev);
  };

  return (
    <div>
      <button onClick={toggleConstantState}>
        Toggle Constant State: {isConstantTrue ? "True" : "False"}
      </button>

      <form>
        <label>
          Form Field:
          <input
            type="text"
            value={isConstantTrue ? "Constant is True" : formFieldValue}
            onChange={handleFormFieldChange}
          />
        </label>
      </form>
    </div>
  );
};

export default UpdateComponent;