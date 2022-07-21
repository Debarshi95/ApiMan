const Input = ({ type, ...props }) => {
  return (
    <div className="w-full">
      <input type={type} {...props} />
    </div>
  )
}

Input.defaultProps = {
  type: 'text',
}

export default Input
