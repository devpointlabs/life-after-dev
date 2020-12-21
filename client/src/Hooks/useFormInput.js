import { useState } from "react";

// setting default values for label and required
export const useFormInput = (initialValue, label = "", required = true) => {
  const [value, setValue] = useState(initialValue);

  // we are returning a plain js object that will be spread out in Form.input
  // see example below
  return {
    required,
    label,
    placeholder: `Enter ${label}`,
    value,
    onChange: (e) => setValue(e.target.value),
  };
};