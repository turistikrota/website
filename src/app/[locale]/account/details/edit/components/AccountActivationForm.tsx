"use client";

import { useState } from "react";
import LineForm from "~/components/form/LineForm";
import ToggleButton from "~/components/form/Toggle";

export default function AccountActivationForm() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <LineForm className="bg-second p-4 rounded-md">
      <LineForm.Left>
        <LineForm.Left.Title>Hesap Durumu</LineForm.Left.Title>
        <LineForm.Left.Description></LineForm.Left.Description>
      </LineForm.Left>
      <LineForm.Right>
        <ToggleButton defaultChecked={false} variant="success"></ToggleButton>
      </LineForm.Right>
    </LineForm>
  );
}
