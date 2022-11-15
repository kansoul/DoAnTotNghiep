import { forwardRef } from "react";

interface FormSelectProps {
  options: any[];
  label?: string;
  error?: any;
  name?: string;
  bgSelect?: string;
  onChange?: (e: any) => void;
  onHandleChange?: (e: any) => void;
}

/* eslint-disable @typescript-eslint/no-unused-vars */
export const FormUISelect = forwardRef((props: FormSelectProps, ref) => {
  const {
    options,
    label,
    error,
    name,
    bgSelect,
    onChange,
    onHandleChange,
    ...restProps
  } = props;

  const handleSelectedOptionChange = (e: any) => {
    const changeEvent = {
      target: {
        name: e.target.name,
        value: e.target.value,
      },
    };
    onChange?.(changeEvent);
    onHandleChange?.(e);
  };
  const buttonClass =
    "border border-gray-300 px-3 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 disabled:cursor-not-allowed disabled";

  return (
    <div className={`w-full mb-2 ${error ? "is-invalid" : ""}`}>
      <label className="block text-sm font-medium text-gray-700" htmlFor={name}>
        {label}
      </label>
      <>
        <img
          className="absolute w-3 h-auto -translate-y-1/2 top-1/2 right-2"
          src="/arrow-down.png"
          alt=""
        />
        <select
          className={`${buttonClass} ${bgSelect}`}
          id={name}
          {...restProps}
          onChange={handleSelectedOptionChange}
        >
          {options &&
            options.map(
              (item: { value: string; label: string }, index: number) => (
                <option value={item.value} key={index}>
                  {item.label}
                </option>
              )
            )}
        </select>
      </>
      <div className="feedback mt-1 text-sm text-red-700 min-h-[18px]">
        {error?.message}
      </div>
    </div>
  );
});

FormUISelect.defaultProps = {
  label: "",
  error: null,
  name: "",
  bgSelect: "bg-[#EFF1F5]",
  onChange: () => null,
  onHandleChange: () => null,
};
