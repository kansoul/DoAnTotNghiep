import { forwardRef, InputHTMLAttributes } from 'react'

interface FormUIInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  name?: string
  error?: any
  fixedHeight?: boolean
  customBorder?: string
}

/* eslint-disable @typescript-eslint/no-unused-vars */
export const FormUIInput = forwardRef((props: FormUIInputProps, ref) => {
  const { label, name, error, fixedHeight, customBorder, ...inputProps } = props

  return (
    <div className={`w-full ${error ? 'is-invalid' : ''}`}>
      <label className="block text-sm font-medium text-gray-700" htmlFor={name}>
        {label}
      </label>
      <div className="mt-1">
        <input
          className={`appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none sm:text-sm ${customBorder}`}
          id={name}
          name={name}
          {...inputProps}
        />
        <div
          className={`feedback mt-1 text-sm text-red-700 whitespace-pre-wrap ${
            fixedHeight ? (
              <>${error?.message.length > 0 ? ' min-h-[20px]' : 'invisible'}</>
            ) : (
              ' min-h-[20px]'
            )
          }  `}
        >
          {error?.message}
        </div>
      </div>
    </div>
  )
})

FormUIInput.defaultProps = {
  label: '',
  name: '',
  error: null,
  fixedHeight: true,
  customBorder: '',
}
