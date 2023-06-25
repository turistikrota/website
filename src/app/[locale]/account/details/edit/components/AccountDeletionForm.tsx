"use client";

import { useState } from "react";
import LineForm from "~/components/form/LineForm";
import ToggleButton from "~/components/form/Toggle";

export default function AccountDeletionForm() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <LineForm className="bg-second p-4 rounded-md">
      <LineForm.Left>
        <LineForm.Left.Title>Hesabımı Sil</LineForm.Left.Title>
        <LineForm.Left.Description>
          Yandaki kutucuğu işaretleyerek hesabınızı silebilirsiniz.
        </LineForm.Left.Description>
      </LineForm.Left>
      <LineForm.Right>
        <ToggleButton defaultChecked={false} variant="error"></ToggleButton>
      </LineForm.Right>
    </LineForm>
  );
}
