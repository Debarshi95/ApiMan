import cn from 'clsx'
import { useState } from 'react'

const Input = ({ type, onChange, className, error, ...props }) => {
  const [input, setInput] = useState('')

  const handleChange = (e) => {
    const { value } = e.target
    setInput(value)
    onChange(value)
  }

  return (
    <div className="w-full">
      <input
        type={type}
        value={props.value || input}
        onChange={handleChange}
        className={cn('p-2 w-full bg-gray-50 outline-none', className, {
          'border border-red-600': error && input,
        })}
        {...props}
      />
    </div>
  )
}

Input.defaultProps = {
  type: 'text',
  onChange: () => null,
  error: false,
}

export default Input
