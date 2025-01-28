import { getPostData } from "@/api/getPostBlog";
import Link from "next/link";

export default async function Home() {
  const blogs = await getPostData();
  return (
    <div className="w-11/12 md:w-11/12 lg:w-11/12 xl:container mx-auto pt-10 pb-10 flex flex-col items-center">
      <h1 className="font-semibold text-3xl text-center">
        Welcome to my blog!
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-7">
        {blogs.slice(0, 20).map((blog) => (
          <div className="" key={blog.id}>
            <Link href={`/all-blogs/${blog.id}`}>
              <div className="bg-gray-200 text-gray-900 p-4 text-center rounded-md">
                <p className="font-bold">{blog.id}</p>
                <h2 className="font-semibold text-lg">
                  {blog.title.slice(0, 20)}
                </h2>
                <p className="text-sm">{blog.body.slice(0, 70)}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div>
        <Link href="/all-blogs">
          <button className="text-gray-100 bg-teal-800 px-4 rounded-md shadow-md py-2 mt-8 text-sm">
            View all blogs
          </button>
        </Link>
      </div>
    </div>
  );
}
