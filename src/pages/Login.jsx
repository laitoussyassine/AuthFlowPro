import TitleSign from '../components/fieldsComponents/TitleSign.jsx';
import InputField from '../components/fieldsComponents/InputField.jsx';
import LabelField from '../components/fieldsComponents/LabelField.jsx';
import SubmitButton from '../components/fieldsComponents/SubmitButton.jsx';
import { Link , useNavigate} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '@/state/auth/authSlice.js';
import { toast } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { 
    isLoading,
    isLoginSuccess,
    message,
    isError } = useSelector((state) => state.auth);

  const token = localStorage.getItem('jwt')
  console.log('jwt', token);
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isLoginSuccess) {
      navigate('/profile');
    }
  }, [isError, isLoginSuccess])
  
  const submithandler =  () => {
    dispatch(login({email, password}));
  }
  
  return (
    <>
       <div className='flex flex-col items-center lg:my-20 mt-6 '>
          <div className='shadow-slate-600 shadow-md py-10 px-12 rounded-2xl'>
           
              <TitleSign className={'text-lg'} title={'Log In to Your Account!'} />
              <TitleSign
              className={'mb-5 text-sm'} 
              description={'Welcome back, please enter your details'} />
              <div className='flex flex-col gap-2 mb-5'>
                <LabelField className={''} title={"Email"} />
                <InputField name={"email"} value={email} onChange={(e) => setEmail(e.target.value)} type={"Email"} className={''} placeholder={"you@company.com"} />
                <LabelField className={''} title={"Password"} />
                <InputField value={password} onChange={(e) => setPassword(e.target.value)} type={"password"} className={''} placeholder={"password"} />
              </div>
              <SubmitButton type={"submit"} onClick={submithandler} disabled={isLoading} className={"flex mx-auto w-4/5 mb-3"} title={isLoading ? 'Loading...' : 'Login'} />
            
              <TitleSign className={'text-center'}  description={`D’ont have an account!`} >
                <Link to={'/register'} className='text-buttonBg'>Sign Up</Link>
              </TitleSign>
          </div>
        </div>
    </>
  )
}
export default Login