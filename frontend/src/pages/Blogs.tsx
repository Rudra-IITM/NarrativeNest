
import Appbar from '../components/Appbar'
import BlogCard from '../components/BlogCard'
import BlogSkeleton, { AppbarSkeleton } from '../components/BlogSkeleton';
import { useBlogs } from '../hooks/useBlogs'
import { getParsedDate } from '../utils/ParsedDate';

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