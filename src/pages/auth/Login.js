import { useMutation } from '@apollo/client';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { AUTH_TOKEN } from '../../constants';
import { LOGIN_MUTATION } from '../../utils/api/userApi';
import Eye from '../../assets/icon/Eye.png'

const Login = () => {
  const navigate = useNavigate()
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [viewPassword, setViewPassword] = useState(false)
  const [errorMsg, setErrorMsg] = useState(false)

  const [login, { loading }] = useMutation(LOGIN_MUTATION, {
    variables: {
      phone, password
    },
    onCompleted: ({ login }) => {
      localStorage.setItem(AUTH_TOKEN, login.token);
      navigate('/');
    },
    onError: ({ graphQLErrors }) => {
      setErrorMsg('Bad Credentials: check phone or password')
    }
  });

  const disabled= !phone || !password

  return (
    <div
    className="flex justify-center items-center h-screen">
      <div className="flex flex-col gap-y-[0.93rem] w-[24.6rem]">
        <p className="text-[2.5rem] font-[700] text-center mb-[40px]">Login</p>
        {errorMsg && (<>
          {loading ? <p>Loading....</p> :  <p className="p-2 bg-gray-200 rounded-md w-full text-red-400">{errorMsg}</p>}
        </>)}
        {/* phone */}
        <input
          onChange={e => setPhone(e.target.value)}
          value={phone} type="text"
          placeholder='Phone'
          className="rounded-[10px] px-2 py-[1rem] border-[1px] outline-none w-[24.6rem]"
        />
        {/* password */}
        <div className="flex items-center px-1 rounded-[10px] border-[1px] outline-none w-[24.6rem]">
          <input
            onChange={e => setPassword(e.target.value)}
            value={password}
            type={viewPassword === true ? "text" : "password"}
            placeholder='Password'
            className="rounded-[10px] px-2 py-[1rem] outline-none w-[24.2rem]"
          />
          <img className="w-[22px] h-[17px] mr-1 cursor-pointer" onClick={() => setViewPassword(!viewPassword)} src={Eye} alt="view" />
        </div>
        <button 
        disabled={disabled} 
        className={`bg-[#171717] text-white py-[1rem] rounded-[10px] ${disabled && 'cursor-not-allowed'}`} 
        onClick={login}>
          Login
        </button>
      </div>
    </div>
  )
}

export default Login