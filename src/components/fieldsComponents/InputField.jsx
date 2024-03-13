import { Input } from '../ui/input'

const InputField = ({placeholder , className, type, value, setValue}) => {
  return (
    <>
        <Input className={className} placeholder={placeholder} type={type} value={value} onChange={(e)=> setValue(e.target.value)} />
    </>
  )
}

export default InputField