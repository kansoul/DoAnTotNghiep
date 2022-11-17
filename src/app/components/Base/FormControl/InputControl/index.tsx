import { InputHTMLAttributes } from "react";
import { Controller } from "react-hook-form";
import { FormUIInput } from "../../FormUIInput";

interface InputControlProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: any;
  control?: any;
  label?: string;
  defaultValue?: any;
  fixedHeight?: boolean;
  maxLength?: number;
  className?: string;
}

export function InputControl(props: InputControlProps) {
  const {
    name,
    control,
    fixedHeight,
    defaultValue,
    className,
    onChange,
    onBlur,
    ...restProps
  } = props;

  return control ? (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <FormUIInput
          error={error}
          fixedHeight={fixedHeight}
          className={className}
          {...field}
          {...restProps}
          onChange={(e) => {
            onChange?.(e);
            field.onChange(e);
          }}
          onBlur={(e) => {
            onBlur?.(e);
            field.onBlur();
          }}
        />
      )}
    />
  ) : (
    <FormUIInput
      name={name}
      defaultValue={defaultValue}
      className={className}
      {...restProps}
    />
  );
}

InputControl.defaultProps = {
  name: "",
  control: false,
  label: "",
  defaultValue: "",
  fixedHeight: true,
  maxLength: "",
};
