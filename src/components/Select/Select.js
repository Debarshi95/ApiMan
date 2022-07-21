import React, { useState } from 'react'

const Select = ({ options, defaultValue, onSelected, ...props }) => {
  const [open, setOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState(defaultValue)

  const handleOptionChange = (e) => {
    const value = e.target.textContent
    setSelectedValue(value)
    setOpen(false)
    onSelected(value)
  }
  return (
    <div className="w-36 relative text-gray-800" {...props}>
      <div role="button" aria-hidden onClick={() => setOpen(!open)} className="px-2">
        {selectedValue && <p>{selectedValue}</p>}
      </div>
      <div className="bg-green-300 absolute top-10 left-0 w-32">
        {open &&
          options.map((option, idx) => (
            <div
              role="option"
              className="py-2 px-2 hover:bg-green-600 cursor-pointer"
              aria-selected
              aria-hidden
              onClick={handleOptionChange}
            >
              <p key={idx}>{option}</p>
            </div>
          ))}
      </div>
    </div>
  )
}

Select.defaultProps = {
  options: [],
  defaultValue: '',
  onSelected: () => null,
}

export default Select
