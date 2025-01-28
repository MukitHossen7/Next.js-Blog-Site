import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-11/12 mx-auto py-2 px-4 g">
      <Link href="/">
        <div
          className={
            "text-gradient-to-r from-teal-500 to-teal-600 text-white font-bold text-2xl p-2 rounded-lg shadow-md cursor-pointer hover:from-teal-600 hover:to-teal-500 transition-all"
          }
        >
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-teal-700">
            DBlog
          </span>
        </div>
      </Link>
      <nav>
        <ul className="flex justify-center items-center gap-10">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/all-blogs">
            <li>All Blogs</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
