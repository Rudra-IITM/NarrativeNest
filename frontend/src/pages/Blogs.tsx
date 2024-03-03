
import { useNavigate } from 'react-router-dom';
import Appbar from '../components/Appbar'
import BlogCard from '../components/BlogCard'
import BlogSkeleton, { AppbarSkeleton } from '../components/BlogSkeleton';
import { useBlogs } from '../hooks/useBlogs'
import { getParsedDate } from '../utils/ParsedDate';
import { getToken } from '../utils/getToken';

export interface blogProps {
	content: string,
	createdAt: string,
	title: string,
	id: string,
	author: {
		name: string
	}
}

const Blogs = () => {
    const { loading, blogs } = useBlogs();
	const navigate = useNavigate();
	const token = getToken();

    if (loading) {
        return <div className='flex flex-col justify-center items-center'>
			<div className='w-full'>
				<AppbarSkeleton />
			</div>
			<div className='max-w-3xl w-full'>
				<BlogSkeleton />
			</div>
		</div>
    }

	if (!token) {
		navigate('/signin')
	}

	return (
        <>
			<Appbar />
			<div className='flex justify-center'>
                <div className='max-w-3xl'>
                    <div>
						{blogs.map((blog: blogProps) => {
							return (
								<BlogCard
									key={blog.id}
									id={blog.id}
									authorName={blog.author.name}
									title={blog.title}
									content={blog.content}
									publishedDate={getParsedDate(blog.createdAt)}
								/>
							)
						})}
                    </div>
                </div>
			</div>
		</>
  )
}

export default Blogs