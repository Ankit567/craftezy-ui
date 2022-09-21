import Image from "next/image";
import styles from "./style.module.scss";

const FeaturedBlog = () => {
  return (
    <div className={`${styles["feature-insights-main"]} flex items-center text-left`}>
      <div className={styles["feature-insights-text"]}>
        <span className={styles["optional-text"]}>Industry Insights</span>
        <h2>How Craftezy Aims To Improve The Livelihood Of Handicraft Artisans</h2>
        <div className={styles["date"]}>December 12, 2021</div>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
        <a href="/" className="read-more">
          Read More
        </a>
      </div>
      <figure className={`${styles["feature-image"]} object-fit`}>
        <img src="/images/feature-image.jpg" alt="featured-blog" />
      </figure>
    </div>
  );
};

export default FeaturedBlog;
