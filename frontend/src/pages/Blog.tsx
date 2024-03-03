import { useNavigate, useParams } from 'react-router-dom';
import { useBlog } from '../hooks/useBlogs';
import BlogComponent from '../components/BlogComponent';
import BlogSkeleton from '../components/BlogSkeleton';
import { getToken } from '../utils/getToken';

const Blog = () => {
	const { id } = useParams();
	const { loading, blog } = useBlog({id: id || ''});
	const navigate = useNavigate();
	const token = getToken();

	if (loading || !blog) {
		return <div>
			<BlogSkeleton />
		</div>
	}

	if (!token) {
		navigate('/signin')
	}

	return (
		<BlogComponent blog={blog}/>
	)
}

export default Blog