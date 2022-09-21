import { useState } from "react";
import styles from "./style.module.scss";

const Category = () => {
  const [activeCategory, setActiveCategory] = useState(0); // index of active category
  const BlOG_CATEGORIES = ["All Posts", "Industry Insights", "Community Spotlights", "Craftezy News", "Resources", "Ebook"];

  const changeCategory = (index) => {
    setActiveCategory(index);
    // new category = BlOG_CATEGORIES[index]
  };

  return (
    <span className="pb-3 border-b border-[#E2E2E2] mb-11 inline-block">
      {BlOG_CATEGORIES.map((category, index) => (
        <button
          onClick={() => changeCategory(index)}
          className={`relative mx-6 text-[#BABABA] hover:text-[#4e4e4e] text-lg leading-[27px] ${activeCategory == index ? styles.activeCategory : ""}`}
          key={category}
        >
          {category}
        </button>
      ))}
    </span>
  );
};

export default Category;
