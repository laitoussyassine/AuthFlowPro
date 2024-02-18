import TitleSign from '../components/fieldsComponents/TitleSign.jsx';
import InputField from '../components/fieldsComponents/InputField.jsx';
import LabelField from '../components/fieldsComponents/LabelField.jsx';
import SubmitButton from '../components/fieldsComponents/SubmitButton.jsx';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  return (
    <>
       <div className='flex flex-col items-center lg:my-20 mt-6 '>
          <div className='shadow-slate-600 shadow-md py-10 px-12 rounded-2xl'>
            <form>
              <TitleSign className={'text-lg'} title={'Log In to Your Account!'} />
              <TitleSign
              className={'mb-5 text-sm'} 
              description={'Welcome back, please enter your details'} />
              <div className='flex flex-col gap-2 mb-5'>
                <LabelField className={''} title={"Email"} />
                <InputField value={email} setValue={setEmail} type={"Email"} className={''} placeholder={"you@company.com"} />
                <LabelField className={''} title={"Password"} />
                <InputField value={password} setValue={setPassword} type={"password"} className={''} placeholder={"password"} />
              </div>
              <SubmitButton className={"flex mx-auto w-4/5 mb-3"} title={"Sign Up"} />
            </form>
              <TitleSign className={'text-center'}  description={`D’ont have an account!`} >
                <Link to={'/signup'} className='text-buttonBg'>Sign Up</Link>
              </TitleSign>
          </div>
        </div>
    </>
  )
}

export default Login