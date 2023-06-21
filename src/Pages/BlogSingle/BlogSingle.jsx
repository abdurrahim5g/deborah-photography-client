/* eslint-disable react/prop-types */

import { Link, useLoaderData } from "react-router-dom";

const BlogSingle = () => {
  const blog = useLoaderData();

  return (
    <section className="single-blog-page py-14 md:py-20">
      <div className="site-container">
        <article
          className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-lg"
          key={blog._id}
        >
          <img
            alt="Office"
            src={blog.image}
            className="h-full w-full object-cover"
          />

          <div className="p-4 sm:p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              {blog.title}
            </h3>

            {blog?.description?.split("\n").map((single, index) => (
              <p className="mt-2 relaxed text-gray-500" key={index}>
                {single}
              </p>
            ))}
          </div>
          <div className="p-6 text-center">
            <Link
              className="rounded bg-yellow-500 hover:bg-yellow-400 px-5 py-2 text-sm font-medium text-white"
              to={"/blogs"}
            >
              Go to blogs
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
};

export default BlogSingle;
