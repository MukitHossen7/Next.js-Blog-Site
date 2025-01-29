import { getPostData } from "@/api/getPostBlog";
import Link from "next/link";
export const metadata = {
  title: "All Blog",
  description: "fetch all blog in the json placeholder post data",
};
const AllBlogs = async () => {
  const allBlogs = await getPostData();
  return (
    <div className="w-11/12 md:w-11/12 lg:w-11/12 lg:container mx-auto pt-10 pb-10">
      <h2 className="font-semibold text-3xl text-center">All Blogs Page</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-7">
        {allBlogs.map((blog) => (
          <div className="" key={blog.id}>
            <Link href={`/all-blogs/${blog.id}`}>
              <div className="bg-gray-200 text-gray-900 p-4 text-center rounded-md">
                <p className="font-bold">{blog.id}</p>
                <h2 className="font-semibold text-lg">
                  {blog.title.slice(0, 20)}
                </h2>
                <p className="text-sm">{blog.body.slice(0, 65)}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
