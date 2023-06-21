import { Link, useLoaderData } from "react-router-dom";
import Title from "../../components/Title/Title";
import "./Blogs.css";
import { updatePageTitle } from "../../utility/utility";

const Blogs = () => {
  updatePageTitle("Blogs");
  const blogs = useLoaderData();

  return (
    <section className="blogs-page py-14 md:py-20">
      <div className="site-container">
        <Title>Blogs</Title>

        <div className="row mt-8">
          <div className="grid grid-cols-2 gap-8">
            {blogs?.map((blog) => (
              <article
                className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-lg"
                key={blog._id}
              >
                <img
                  alt="Office"
                  src={blog.image}
                  className="h-80 w-full object-cover"
                />

                <div className="p-4 sm:p-6">
                  <Link to={`/blogs/${blog._id}`}>
                    <h3 className="text-lg font-medium text-gray-900">
                      {blog.title}
                    </h3>
                  </Link>

                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                    {blog.description}
                  </p>

                  <Link
                    to={`/blogs/${blog._id}`}
                    className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
                  >
                    Read more
                    <span
                      aria-hidden="true"
                      className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                    >
                      &rarr;
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
