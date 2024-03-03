import { useParams } from 'react-router-dom';
import { useBlog } from '../hooks/useBlogs';
import BlogComponent from '../components/BlogComponent';
import BlogSkeleton from '../components/BlogSkeleton';

const Blog = () => {
	const { id } = useParams();

	const { loading, blog } = useBlog({id: id || ''});

	if (loading || !blog) {
		return <div>
			<BlogSkeleton />
		</div>
	}

	return (
		<BlogComponent blog={blog}/>
	)
}

export default Blog