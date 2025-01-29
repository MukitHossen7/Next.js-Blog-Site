import { getPostData } from "@/api/getPostBlog";

const BlogDetails = async ({ params }) => {
  const { id } = await params;
  const blogData = await getPostData();
  const blog = blogData.find((blog) => blog.id === parseInt(id));
  if (blog) {
    return (
      <div className="flex flex-col justify-center items-center py-28">
        <div className="max-w-2xl bg-slate-200 text-slate-900 p-10 text-center rounded-lg">
          <h3 className="font-bold ">Blog Id: {id}</h3>
          <h2 className="font-semibold text-xl">Blog Title : {blog?.title}</h2>
          <p className="text-sm">{blog?.body}</p>
        </div>
      </div>
    );
  } else {
    <h1>Not Found</h1>;
  }
};

export default BlogDetails;
