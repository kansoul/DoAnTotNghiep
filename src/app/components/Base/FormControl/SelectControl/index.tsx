import { SelectHTMLAttributes } from "react";
import { Controller } from "react-hook-form";
import { FormUISelect } from "../../FormUISelect";

interface SelectControlProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name?: any;
  control?: any;
  options: any;
  label: string;
  bgSelect?: string;
  onHandleChange?: (e: any) => void;
}

export function SelectControl(props: SelectControlProps) {
  const { name, control, options, bgSelect, ...restProps } = props;

  return control ? (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        return (
          <FormUISelect
            error={error}
            options={options}
            {...field}
            {...restProps}
          />
        );
      }}
    />
  ) : (
    <FormUISelect options={options} bgSelect={bgSelect} {...restProps} />
  );
}

SelectControl.defaultProps = {
  name: "",
  bgSelect: "",
  control: false,
  onHandleChange: () => null,
};
