import { Input } from '../ui/input'

const InputField = ({placeholder , className, type,  ...props}) => {
  return (
    <>
        <Input className={className} placeholder={placeholder} type={type} 
        {...props} />
    </>
  )
}

export default InputField