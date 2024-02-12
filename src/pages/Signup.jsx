import TitleSign from '../components/fieldsComponents/TitleSign.jsx';
import InputField from '../components/fieldsComponents/InputField.jsx';
import LabelField from '../components/fieldsComponents/LabelField.jsx';
import SubmitButton from '../components/fieldsComponents/SubmitButton.jsx';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <>
        <div className='flex flex-col items-center lg:my-20 my-10 '>
          <div className='shadow-slate-600 shadow-md py-7 px-9 rounded-xl'>
            <form>
              <TitleSign className={'text-lg'} title={'Sign Up and Start Create Your Taks!'} />
              <TitleSign
              className={'mb-5'} 
              description={'Let’s get started by filling out information below'} />
              <div className='flex flex-col gap-2 mb-5'>
                <LabelField className={''} title={"username"} />
                <InputField type={"text"} className={''} placeholder={"your username"} />
                <LabelField className={''} title={"Email"} />
                <InputField type={"Email"} className={''} placeholder={"you@company.com"} />
                <LabelField className={''} title={"Password"} />
                <InputField type={"password"} className={''} placeholder={"password"} />
              </div>
              <SubmitButton className={"flex mx-auto w-4/5 mb-3"} title={"Sign Up"} />
            </form>
              <TitleSign className={'text-center'}  description={`Already have an account!!`} >
                <Link to={'/login'} className='text-buttonBg'>Log In</Link>
              </TitleSign>
          </div>
        </div>
    </>
  )
}
export default Signup