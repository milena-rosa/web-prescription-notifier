import { ChangeEvent, FormEvent, useState } from 'react'

interface Validation {
  required?: {
    value: boolean
    message: string
  }
  pattern?: {
    value: string
    message: string
  }
  custom?: {
    isValid: (value: any) => boolean
    message: string
  }
}

type Validations<T extends {}> = Partial<Record<keyof T, Validation>>
type ErrorRecord<T> = Partial<Record<keyof T, string>>

export type FormOptions<T extends {}> = {
  validations?: Validations<T>
  initialValues?: Partial<T>
  onSubmit?: (event?: any) => void
}

export type FormReturn<T extends {}> = {
  data: T
  handleChange: <S extends unknown>(
    key: keyof T,
    sanitizeFn?: ((value: string) => S) | undefined
  ) => (event: ChangeEvent<HTMLInputElement & HTMLSelectElement & HTMLTextAreaElement>) => void
  handleSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>
  reset: () => void
  setValue: (key: keyof T, value: any) => void
  errors: Partial<Record<keyof T, string>>
}

export const useForm = <T extends Record<keyof T, any>>(options?: FormOptions<T>) => {
  const [data, setData] = useState<T>((options?.initialValues || {}) as T)
  const [errors, setErrors] = useState<ErrorRecord<T>>({})

  const handleChange =
    <S extends unknown>(key: keyof T, sanitizeFn?: (value: string) => S) =>
    (event: ChangeEvent<HTMLInputElement & HTMLSelectElement & HTMLTextAreaElement>) => {
      const value =
        event.target.type === 'checkbox'
          ? event.target.checked
          : sanitizeFn
          ? sanitizeFn(event.target.value)
          : event.target.value

      setData({
        ...data,
        [key]: value
      })
    }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event?.preventDefault()

    const validations = options?.validations
    if (validations) {
      let valid = true
      const newErrors: Partial<Record<keyof T, string>> = {}

      for (const key in validations) {
        const value = data[key]
        const validation = validations[key]

        if (validation?.required?.value && !value) {
          valid = false
          newErrors[key] = validation?.required?.message
        }

        const pattern = validation?.pattern
        if (pattern?.value && !RegExp(pattern.value).test(value)) {
          valid = false
          newErrors[key] = pattern.message
        }

        const custom = validation?.custom
        if (custom?.isValid && !custom.isValid(value)) {
          valid = false
          newErrors[key] = custom.message
        }
      }

      if (!valid) {
        setErrors(newErrors)
        return
      }
    }

    setErrors({})

    if (options?.onSubmit) {
      options.onSubmit()
    }
  }

  const reset = () => {
    setData({} as T)
    setErrors({})
  }

  const setValue = (key: keyof T, value: any) => {
    setData({
      ...data,
      [key]: value
    })
  }

  return {
    data,
    handleChange,
    handleSubmit,
    reset,
    setValue,
    errors
  }
}
