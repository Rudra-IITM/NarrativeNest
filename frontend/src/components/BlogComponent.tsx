import { blogProps } from "../pages/Blogs"
import { getParsedDate } from "../utils/ParsedDate"
import Appbar from "./Appbar"
import { Avatar } from "./BlogCard"

const BlogComponent = ({ blog }: { blog: blogProps }) => {
  return (
    <>
        <Appbar />
        <div className="flex justify-center pt-16">
        <div className='grid grid-cols-12 gap-12 px-10 w-full max-w-screen-xl'>
            <div className="col-span-8">
                <div className="text-5xl font-extrabold">
                    {blog.title}
                </div>
                <div className="text-slate-600 py-2">
                    Posted on {getParsedDate(blog.createdAt)}
                </div>
                <div className="text-lg pt-2">
                    {blog.content}
                </div>
            </div>
            <div className="col-span-4">
                <div className="text-gray-700 text-lg font-semibold">
                    Author 
                </div>
                <div className="flex items-center justify-center pt-4">
                    <div>
                        <Avatar name={blog.author.name} />
                    </div>
                    <div className="pl-4">
                        <div className="text-2xl font-bold">
                            {blog.author.name}
                        </div>
                        <div className="pt-2 text-slate-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default BlogComponent