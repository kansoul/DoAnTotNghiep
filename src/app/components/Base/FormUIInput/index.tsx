import { forwardRef, InputHTMLAttributes } from "react";

interface FormUIInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name?: string;
  error?: any;
  fixedHeight?: boolean;
  customBorder?: string;
  className?: string;
}

/* eslint-disable @typescript-eslint/no-unused-vars */
export const FormUIInput = forwardRef((props: FormUIInputProps, ref) => {
  const {
    label,
    name,
    error,
    fixedHeight,
    customBorder,
    className,
    ...inputProps
  } = props;

  return (
    <div className={`${error ? "is-invalid" : ""}`}>
      <label className="block text-sm font-medium text-gray-700" htmlFor={name}>
        {label}
      </label>
      <div>
        <input className={className} id={name} name={name} {...inputProps} />
        <div>{error?.message}</div>
      </div>
    </div>
  );
});

FormUIInput.defaultProps = {
  label: "",
  name: "",
  error: null,
  fixedHeight: true,
  customBorder: "",
};
