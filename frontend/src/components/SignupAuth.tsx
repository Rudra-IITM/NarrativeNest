import { Link, useNavigate } from 'react-router-dom'
import InputBox from './InputBox'
import { SignUpInput } from '@rudra_iitm/web-blog'
import { useState } from 'react'
import Button from './Button'
import axios from 'axios'

const SignupAuth = () => {
  const navigate = useNavigate();

  const [postInfo, setPostInfo] = useState<SignUpInput>({
    email: "",
    password: "",
    name: ""
  })

  const signup = async () => {
    try {
      const { data } = await axios.post(`${import.meta.env.VITE_BACKEND_URI}/api/v1/user/signup`, postInfo)
      localStorage.setItem('token', data)
      navigate('/blogs')
    } catch (err) {
      alert('Error in signing up. Please try again.')
    }
  }

  return (
    <div className='flex justify-center items-center h-screen'>
        <div className='flex flex-col max-w-lg'>
          <div className={`text-center text-3xl font-bold px-10`}>
            Create an account
          </div>
          <div className='text-center text-slate-600'>
            Already have an account? <Link to={"/signin"} className='pl-2 underline text-blue-700'>Login</Link>
          </div>
          <div className='mt-10 w-full'>
          <InputBox label='Name' placeholder='Enter your Name' onChange={(e) => {
            setPostInfo({...postInfo, name: e.target.value})
          }} />
          </div>
          <div className='mt-4 w-full'>
            <InputBox label='Email' type='email' placeholder='jondoe@example.com' onChange={(e) => {
            setPostInfo({...postInfo, email: e.target.value})
          }} />
          </div>
          <div className='mt-4 w-full'>
            <InputBox label='Password' type='password' placeholder='****' onChange={(e) => {
            setPostInfo({...postInfo, password: e.target.value})
          }} />
        </div>
        <div className='mt-6 max-w-lg'>
            <Button label='Sign Up' onClick={signup} />
          </div>
      </div>
    </div>
  )
}

export default SignupAuth