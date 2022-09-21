import { useState } from "react";
import Radio from "../Radio/Radio";
import styles from "./style.module.scss";

const Subscribe = () => {
  const [selected, setSelected] = useState("buyer");

  return (
    <section className={styles["subscribe-section"]}>
      <div className="wrapper">
        <div className={styles["subscribe-main"]}>
          <div className={`${styles["subscribe-title"]} text-center mx-auto`}>
            <span>Know our recent updates and offers</span>
            <h2 className="mb-6">Subscribe to the Newsletter</h2>
          </div>
          <form className="subscribe-form relative">
            <div className={`${styles["subscribe-radio-list"]} flex items-center justify-center`}>
              <div onClick={() => setSelected("buyer")} className={styles["subscribe-radio"]}>
                <Radio selected={selected} value="buyer" />
                <label htmlFor="buyer">I'm a Buyer</label>
              </div>
              <div onClick={() => setSelected("seller")} className={styles["subscribe-radio"]}>
                <Radio selected={selected} value="seller" />
                <label htmlFor="buyer">I'm a Seller</label>
              </div>
            </div>
            <div className={`${styles["subscribe-field"]} relative`}>
              <input type="text" placeholder="Enter your email address" />
              <button type="submit">Subscribe</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
