interface InputProps extends React.ComponentProps<"input"> {}

const Input = (props: InputProps) => {
  const { className, type, placeholder } = props
  
  return (
    <input
      className={`flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      type={type}
      placeholder={placeholder}
      {...props}
    ></input>
  )
}

export default Input