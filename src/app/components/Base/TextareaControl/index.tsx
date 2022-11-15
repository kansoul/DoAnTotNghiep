import { TextareaHTMLAttributes } from 'react'
import { Controller } from 'react-hook-form'
import { FormTextarea } from '../FormTextarea'

interface TextareaControlProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: any
  control?: any
  label?: string
  defaultValue?: any
  textColor?: 'black' | string
}

export function TextareaControl(props: TextareaControlProps) {
  const { name, control, defaultValue, ...restProps } = props

  return control ? (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <FormTextarea error={error} {...field} {...restProps} />
      )}
    />
  ) : (
    <FormTextarea name={name} defaultValue={defaultValue} {...restProps} />
  )
}

TextareaControl.defaultProps = {
  control: false,
  label: '',
  defaultValue: '',
  textColor: 'black',
}
