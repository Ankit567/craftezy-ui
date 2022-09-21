import styles from "./style.module.scss";

const BlogCard = () => {
  return (
    <div className={styles["blog-post-list"]}>
      <figure className={`${styles["post-image"]} object-fit`}>
        <img src="/images/sample/post1.jpg" alt="post-image" />
      </figure>
      <div className={styles["blog-post-text"]}>
        <h3>How Craftezy Aims To Improve The Livelihood Of Handicraft Artisans</h3>
        <span className={styles["post-date"]}>October 9, 2021</span>
        <p>The Indian arts and crafts industry depends entirely on the skills of the craftsmen. ......</p>
        <a href="/" className="read-more">
          Read More
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
