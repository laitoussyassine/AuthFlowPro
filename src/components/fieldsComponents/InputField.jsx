import { Input } from '../ui/input'

const InputField = ({placeholder , className, type}) => {
  return (
    <>
        <Input className={className} placeholder={placeholder} type={type} />
    </>
  )
}

export default InputField