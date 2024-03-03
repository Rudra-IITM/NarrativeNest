
import axios from 'axios'
import Appbar from '../components/Appbar'
import { ChangeEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getToken } from '../utils/getToken'

const NewBlog = () => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();
    const token = getToken();

    if (!token) {
        navigate('/signin')
    }

    const postBlog = async () => {
        try {
            const res = await axios.post(`${import.meta.env.VITE_BACKEND_URI}/api/v1/blog`, {
                    title,
                    content
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            navigate(`/blog/${res.data.id}`)
        } catch (err) {
            alert('Some error occurred!')
        }
    }

    return (
        <>
        <Appbar />
        <div className='flex flex-col pt-12 justify-center items-center'>
            <div className='max-w-screen-lg w-full'>
                <input type="text" onChange={e => setTitle(e.target.value)} className= "outline-none text-gray-900 text-5xl rounded-lg focus:cursor block w-full p-2.5" placeholder="Title" />
            </div>
            <div className='max-w-screen-lg w-full'>
                <div className='h-full max-h-screen-lg'>
                    <TextEditor onChange={e => setContent(e.target.value)}/>
                </div>
                <div className='mt-4'>
                    <button onClick={postBlog} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-5">Publish Blog</button>
                </div>
            </div>
        </div>
        </>
    )
}

const TextEditor = ( {onChange} : {onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void} ) => {
    return (
        <>
            <textarea id="message" onChange={onChange} rows={4} className="resize-none outline-none mt-2 block px-2.5 w-full text-xl text-gray-900 rounded-lg" placeholder="Tell your story..."></textarea>
        </>
    )
}

export default NewBlog