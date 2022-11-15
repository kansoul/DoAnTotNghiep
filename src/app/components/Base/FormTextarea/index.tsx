import { forwardRef, LegacyRef, TextareaHTMLAttributes } from 'react'

interface FormTextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  name?: string
  error?: any
  textColor?: 'black' | string
  onChange?: (e: any) => void
}

export const FormTextarea = forwardRef(
  (props: FormTextareaProps, ref: LegacyRef<HTMLTextAreaElement>) => {
    const {
      label,
      name,
      error,
      textColor,
      className,
      onChange,
      ...textareaProps
    } = props

    const handleChange = (e: any) => {
      const changeEvent = {
        target: {
          name: e.target.name,
          value: e.target.value,
        },
      }
      onChange?.(changeEvent)
    }

    return (
      <div
        className={`w-full mb-2 ${
          error ? 'is-invalid' : ''
        } text-[${textColor}]`}
      >
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor={name}
        >
          {label}
        </label>
        <textarea
          ref={ref}
          className={className}
          id={name}
          name={name}
          onChange={handleChange}
          {...textareaProps}
        />
        {error && (
          <div className="mt-1 text-sm text-red-700 min-h-[20px]">
            {error.message}
          </div>
        )}
      </div>
    )
  },
)

FormTextarea.defaultProps = {
  label: '',
  name: '',
  error: null,
  textColor: 'black',
  onChange: () => null,
}
