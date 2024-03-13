import React from 'react'
import {parseJwt} from '../util/decodedToken.js'


const profileDetails = () => {
  const token = localStorage.getItem('jwt');
  const user = parseJwt(token);
  const {name, role, email} = user
  
  console.log(user);
  return (
    <div className='w-2/4 m-5 bg-slate-100 rounded-lg mx-auto text-center'>
      <h2>Username:  <span className='text-buttonBg'>{name}</span></h2>
      <h3>Your role:  <span className='text-buttonBg'>{role.name}</span></h3>
      <h4>email: <span className='text-buttonBg'>{email}</span></h4>
      <div>
        permissions:
        {role.permissions.map((role , index) => (
          <ul key={index}>
            <li className='text-buttonBg'>{role}</li>
          </ul>
          )
        )}
      </div>
    </div>
  )
}

export default profileDetails