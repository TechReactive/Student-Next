import { blogs } from "../data";
import BlogCard from "./BlogCard";

const Blogs = () => {
  return (
    <section id="blog" className="py-10 lg:py-20">
      <div className="container">
        <div className="mb-10 flex items-end justify-between">
          <div className="mx-auto max-w-2xl text-center">
            <span className="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
              Our Blog
            </span>
            <h2 className="my-4 text-3xl font-medium capitalize text-default-950">
              Read the latest news.
            </h2>
          </div>
        </div>
        <div className="grid gap-6 xl:grid-cols-2">
          {blogs.map((blog, idx) => (
            <BlogCard key={idx} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
