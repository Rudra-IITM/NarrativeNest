
import { Link } from 'react-router-dom'
import { Avatar } from './BlogCard'

const Appbar = () => {
  return (
    <div className='flex justify-between border-b px-10 py-4 items-center'>
        <Link to='/blogs'>
            <div className='text-md font-semibold cursor-pointer'>
                Web Blog
            </div>
        </Link>
        <div>
        <Link to='/new-blog'>
            <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-5">New Blog</button>
        </Link>
        <Avatar name='Rudra'/>
        </div>
    </div>
  )
}

export default Appbar