import { Controller } from 'react-hook-form'
import { FormTextarea } from '../../FormTextarea'

interface TextareaControlProps {
  name?: any
  control?: any
  label?: string
  placeholder?: string
  onHandleChange?: (e: any) => void
}

export function TextareaControl(props: TextareaControlProps) {
  const { name, control, placeholder, ...restProps } = props

  return control ? (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        return <FormTextarea error={error} {...field} {...restProps} />
      }}
    />
  ) : (
    <FormTextarea name={name} placeholder={placeholder} {...restProps} />
  )
}

TextareaControl.defaultProps = {
  name: '',
  control: false,
  label: '',
  placeholder: '',
  onHandleChange: () => null,
}
