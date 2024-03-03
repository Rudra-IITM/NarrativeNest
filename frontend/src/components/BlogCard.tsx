import { Link } from "react-router-dom"

interface BlogCardProps {
    authorName: string
    title: string
    content: string
    publishedDate: string
    id: string
}

const BlogCard = ({
    authorName,
    title,
    content,
    publishedDate,
    id
}: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
    <div className="p-4 cursor-pointer">  
        <div className="flex items-center">
            <Avatar name={authorName} /> 
            <div className="font-light ml-2">
            {authorName}
            </div>
            <div className="font-light text-gray-500 ml-2">
                 {" . "} {publishedDate}
            </div>
        </div>
        <div className="text-xl font-bold py-2">
            {title}
        </div>
        <div className="text-md font-light">
            {content.slice(0, 150) + "..."}
        </div>
        <div className="text-gray-500 py-2 font-xs font-light">
            {`${Math.ceil(content.length / 100)} min read`}
        </div>
        <hr className="border-gray-200"></hr>
    </div>
    </Link>
  )
}

export const Avatar = ({ name }: { name: string}) => {
     return (
        <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <span className="font-medium text-gray-600 dark:text-gray-300">{name.toUpperCase()[0]}</span>
        </div>
     )
}

export default BlogCard