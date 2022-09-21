import styles from "./style.module.scss";
import BlogCard from "./BlogCard";
import Link from "next/link";

const BlogList = () => {
  return (
    <>
      <div className={`${styles["blog-post-main"]} text-left flex flex-wrap`}>
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
      <div className={`${styles["load-more-posts"]} text-center`}>
        <Link href="/">
          <a>Older Posts</a>
        </Link>
      </div>
    </>
  );
};

export default BlogList;
