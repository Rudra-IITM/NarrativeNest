
const BlogSkeleton = () => {
  return (
<div role="status" className="max-w-screen w-full p-4 border-b-gray-200 ">
    <div className="flex items-center justify-between border-b">
        <div className="flex flex-col justify-start pb-4">
            <div className="flex items-center justify-between">
                <div className="h-8 bg-gray-300 rounded-full w-8 mb-2.5"></div>
                <div className="ml-4 w-32 h-2 bg-gray-200 rounded-full "></div>
            </div>
            <div className="mt-8">
                <div className="h-2.5 bg-gray-300 rounded-full w-24 mb-2.5"></div>
                <div className="w-32 h-2 bg-gray-200 rounded-full "></div>
            </div>
        </div>
    </div>
    <div className="flex items-center justify-between pt-12 border-b">
        <div className="flex flex-col justify-start pb-4">
            <div className="flex flex-row justify-center">
                <div className="h-8 bg-gray-300 rounded-full w-8 mb-2.5"></div>
                <div className="ml-4 w-32 h-2 bg-gray-200 rounded-full "></div>
            </div>
            <div className="mt-8">
                <div className="h-2.5 bg-gray-300 rounded-full w-24 mb-2.5"></div>
                <div className="w-32 h-2 bg-gray-200 rounded-full "></div>
            </div>
        </div>
    </div>
    <div className="flex items-center justify-between pt-12 border-b">
        <div className="flex flex-col justify-start pb-4">
            <div className="flex flex-row items-center justify-between">
                <div>
                    <div className="h-8 bg-gray-300 rounded-full w-8 mb-2.5"></div>
                </div>
                <div>
                    <div className="ml-4 w-32 h-2 bg-gray-200 rounded-full "></div>
                </div>
            </div>
            <div className="mt-8">
                <div className="h-2.5 bg-gray-300 rounded-full w-24 mb-2.5"></div>
                <div className="w-32 h-2 bg-gray-200 rounded-full "></div>
            </div>
        </div>
    </div>
    <div className="flex items-center justify-between pt-12 border-b">
        <div className="flex flex-col justify-start pb-4">
            <div className="flex flex-row justify-center">
                <div className="h-8 bg-gray-300 rounded-full w-8 mb-2.5"></div>
                <div className="ml-4 w-32 h-2 bg-gray-200 rounded-full "></div>
            </div>
            <div className="mt-8">
                <div className="h-2.5 bg-gray-300 rounded-full w-24 mb-2.5"></div>
                <div className="w-32 h-2 bg-gray-200 rounded-full "></div>
            </div>
        </div>
    </div>
    <span className="sr-only">Loading...</span>
</div>
  )
}

export const AppbarSkeleton = () => {
    return (
        <div className="flex justify-between border-b px-10 py-4 items-center">
            <div className="p-2">
                <div className="h-4 bg-gray-300 rounded-full w-24 mb-2.5"></div>
            </div>
            <div className="flex justify-center mr-6">
                <div className="w-24 h-8 bg-gray-200 rounded-full mr-4"></div>
                <div className="h-8 bg-gray-300 rounded-full w-8 mb-2.5"></div>
            </div>
        </div>
    )
}

export default BlogSkeleton