const Input = ({ type, ...props }) => {
  return (
    <div className="w-full">
      <input type={type} className="p-2 w-full bg-gray-50" {...props} />
    </div>
  )
}

Input.defaultProps = {
  type: 'text',
}

export default Input
