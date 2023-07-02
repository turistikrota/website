import { useTranslations } from "next-intl";
import Input, { Size } from "./Input";

export type MinMaxValue = {
  min: number;
  max: number;
};

type Props = {
  values: MinMaxValue;
  onChange: (values: MinMaxValue) => void;
  min?: number;
  max?: number;
  size?: Size;
};

const InputRange: React.FC<Props> = ({
  values,
  onChange,
  min = 0,
  max,
  size,
}) => {
  const t = useTranslations("ux.input");

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      onChange({ ...values, min: value });
    }
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      onChange({ ...values, max: value });
    }
  };

  return (
    <>
      <div className="flex gap-4 justify-between items-center w-full">
        <Input
          label={t("min")}
          name="min"
          type="number"
          value={values.min}
          onChange={handleMinChange}
          size={size}
          min={min}
          max={values.max > 0 ? values.max : max}
        />
        <span className="lg:hidden">-</span>
        <Input
          label={t("max")}
          name="max"
          type="number"
          value={values.max}
          size={size}
          onChange={handleMaxChange}
          min={values.min > 0 ? values.min : min}
          max={max}
        />
      </div>
    </>
  );
};

export default InputRange;
