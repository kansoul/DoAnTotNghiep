import { InputHTMLAttributes } from 'react'
import { Controller } from 'react-hook-form'
import { FormUIInput } from '../../FormUIInput'

interface InputControlProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: any
  control?: any
  label?: string
  defaultValue?: any
  fixedHeight?: boolean
  customBorder?: string
  maxLength?: number
}

export function InputControl(props: InputControlProps) {
  const {
    name,
    control,
    fixedHeight,
    defaultValue,
    customBorder,
    onChange,
    onBlur,
    ...restProps
  } = props

  return control ? (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <FormUIInput
          error={error}
          fixedHeight={fixedHeight}
          customBorder={customBorder}
          {...field}
          {...restProps}
          onChange={e => {
            onChange?.(e)
            field.onChange(e)
          }}
          onBlur={e => {
            onBlur?.(e)
            field.onBlur()
          }}
        />
      )}
    />
  ) : (
    <FormUIInput name={name} defaultValue={defaultValue} {...restProps} />
  )
}

InputControl.defaultProps = {
  name: '',
  control: false,
  label: '',
  defaultValue: '',
  fixedHeight: true,
  customBorder: '',
  maxLength: '',
}
