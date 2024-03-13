import TitleSign from '../components/fieldsComponents/TitleSign.jsx';
import InputField from '../components/fieldsComponents/InputField.jsx';
import LabelField from '../components/fieldsComponents/LabelField.jsx';
import SubmitButton from '../components/fieldsComponents/SubmitButton.jsx';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '@/state/auth/authSlice.js';
import { toast } from 'react-toastify';

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const { 
    user,
    isLoading ,
    isRegisterSuccess ,
    message,
    isError } = useSelector((state) => state.auth);

    
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    
    useEffect(() => {
      if (isError) {
        toast.error(message);
        console.log(message);
      }
      if (isRegisterSuccess) {
        return navigate('/login')
      }
      
      
    }, [ isError , isRegisterSuccess , message , navigate ])
    

  const handleSubmit = async (e) => {
    // e.preventDefault();
    dispatch(register(formData));
  }
  return (
    <>
        <div className='flex flex-col items-center lg:my-20 my-10 '>
          <div className='shadow-slate-600 shadow-md py-7 px-9 rounded-xl'>
           
              <TitleSign className={'text-lg'} title={'Sign Up and Start Create Your Taks!'} />
              <TitleSign
              className={'mb-5'} 
              description={'Let’s get started by filling out information below'} />
              <div className='flex flex-col gap-2 mb-5'>
                <LabelField className={''} title={"username"} />
                <InputField name="username" value={formData.username} onChange={handleChange} type={"text"} className={''} placeholder={"your username"} />
                <LabelField className={''} title={"Email"} />
                <InputField name="email" value={formData.email} onChange={handleChange}
                type={"Email"} className={''} placeholder={"you@company.com"} />
                <LabelField className={''} title={"Password"} />
                <InputField name="password" value={formData.password} onChange={handleChange}
                type={"password"} className={''} placeholder={"password"} />
              </div>
              <SubmitButton type={"submit"} disabled={isLoading} onClick={handleSubmit} className={"flex mx-auto w-4/5 mb-3"} title={`${isLoading ? 'Loading...' : 'Sign up'}`} />
       
              <TitleSign className={'text-center'}  description={`Already have an account!!`} >
                <Link to={'/login'} className='text-buttonBg'>Log In</Link>
              </TitleSign>
          </div>
        </div>
    </>
  )
}
export default Signup