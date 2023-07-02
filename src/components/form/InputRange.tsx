import { useTranslations } from "next-intl";
import Input from "./Input";

export type MinMaxValue = {
  min: number;
  max: number;
};

type Props = {
  values: MinMaxValue;
  onChange: (values: MinMaxValue) => void;
};

const InputRange: React.FC<Props> = ({ values, onChange }) => {
  const t = useTranslations("ux.input");

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value) {
      onChange({ ...values, min: value });
    }
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value) {
      onChange({ ...values, max: value });
    }
  };

  return (
    <div className="flex gap-4 justify-between items-center w-full">
      <Input
        label={t("min")}
        name="min"
        type="number"
        value={values.min}
        onChange={handleMinChange}
      />
      <span>-</span>
      <Input
        label={t("max")}
        name="max"
        type="number"
        value={values.max}
        onChange={handleMaxChange}
      />
    </div>
  );
};

export default InputRange;
