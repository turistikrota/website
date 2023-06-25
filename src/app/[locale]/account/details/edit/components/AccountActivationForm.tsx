"use client";

import { useState } from "react";
import ToggleButton from "~/components/form/Toggle";

export default function AccountActivationForm() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="bg-second p-4">
      <ToggleButton defaultChecked={false}></ToggleButton>
    </div>
  );
}
