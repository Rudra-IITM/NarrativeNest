import { Link, useNavigate } from 'react-router-dom'
import InputBox from './InputBox'
import { SignInInput } from '@rudra_iitm/web-blog'
import { useState } from 'react'
import Button from './Button'
import axios from 'axios'

const SiginAuth = () => {
    const navigate = useNavigate();

  const [postInfo, setPostInfo] = useState<SignInInput>({
    email: "",
    password: "",
  })

  const signin = async () => {
    try {
      const { data } = await axios.post(`${import.meta.env.VITE_BACKEND_URI}/api/v1/user/signin`, postInfo)
      localStorage.setItem('token', data)
      navigate('/blogs')
    } catch (err) {
      alert('Error in signing in. Please try again.')
    }
  }

  return (
    <div className='flex justify-center items-center h-screen'>
        <div className='flex flex-col max-w-lg'>
          <div className={`text-center text-3xl font-bold px-32`}>
            Login
          </div>
          <div className='text-center text-slate-600'>
            Don't have an account? <Link to={"/signup"} className='pl-2 underline text-blue-700'>Signup</Link>
            </div>
          <div className='mt-10 w-full'>
            <InputBox label='Email' placeholder='jondoe@example.com' onChange={(e) => {
            setPostInfo({...postInfo, email: e.target.value})
          }} />
          </div>
          <div className='mt-4 w-full'>
            <InputBox label='Password' placeholder='****' onChange={(e) => {
            setPostInfo({...postInfo, password: e.target.value})
          }} />
        </div>
        <div className='mt-6 max-w-lg'>
            <Button label='Sign In' onClick={signin} />
          </div>
      </div>
    </div>
  )
}

export default SiginAuth