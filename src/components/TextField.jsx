import { useId } from 'react'

export function TextField({
  label,
  id,
  className = '',
  ...inputProps
}) {
  const generatedId = useId()
  const inputId = id ?? generatedId

  return (
    <div className={`field ${className}`.trim()}>
      <label className="field__label" htmlFor={inputId}>
        {label}
      </label>
      <input className="field__input" id={inputId} {...inputProps} />
    </div>
  )
}
