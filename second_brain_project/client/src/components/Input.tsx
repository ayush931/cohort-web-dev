interface InputProps { 
  placeholder: string, 
  ref: undefined
}

function Input ({ placeholder, ref }: InputProps) {
  return (
    <div>
      <input type="text" placeholder={placeholder} className="px-4 py-2 rounded-md m-2 border" ref={ref} />
    </div>
  )
}

export default Input;
