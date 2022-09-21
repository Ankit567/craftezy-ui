import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";

const Header = (params) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-brown fixed w-full top-0 left-0 z-20">
      <div className="wrapper py-5 flex items-center justify-between">
        <Link href="/">
          <a>
            <Image width={184} height={30} src="/images/logo.svg" />
          </a>
        </Link>
        <div className="items-center justify-between lg:flex hidden">
          <div className={styles.searchBar}>
            <button className="text-xs px-5 py-2">
              <span className="mr-1">Products</span>
              <Image width={5} height={8} src="/images/header-chevron-down.svg" />
            </button>
            <input placeholder="Search your product" className={styles.searchBox} />
          </div>
          <button className={styles.searchButton}>Search</button>
        </div>
        <nav className="flex items-center justify-between">
          <Link href="/cart">
            <a className={styles.navLink}>
              <Image width={24} height={21} src="/images/header-cart.svg" />
              <div>Cart</div>
            </a>
          </Link>
          <Link href="/signin">
            <a className={styles.navLink}>
              <Image width={24} height={24} src="/images/header-profile.svg" />
              <div>Sign In</div>
            </a>
          </Link>
          <ul className={`hamburger ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </nav>
      </div>
      <div className={`lg:hidden bg-brown absolute top-0 left-0 w-full mt-[80px] wrapper pb-3 ${menuOpen? 'block': 'hidden'}`}>
        <Link href="/cart">
          <a className="text-white block mb-5 text-base flex items-center">
            <Image width={20} height={17} src="/images/header-cart.svg" />
            <span className="ml-3">Cart</span>
          </a>
        </Link>
        <Link href="/signin">
          <a className="text-white block text-base mb-5 flex items-center">
            <Image width={20} height={20} src="/images/header-profile.svg" />
            <span className="ml-3">Sign In</span>
          </a>
        </Link>
        <Link href="/serach">
          <a className="text-white block text-base mb-5 flex items-center">
            <Image width={20} height={20} src="/images/header-search.svg" />
            <span className="ml-3">Search</span>
          </a>
        </Link>
      </div>
      <div className="bg-cultured py-5 items-center md:justify-center flex overflow-auto scroll-w-none">
        <Link href="/all?type=featured">
          <a className={styles.bottomNavLinks}>Featured</a>
        </Link>
        <Link href="/all?type=featured">
          <a className={styles.bottomNavLinks}>Decor</a>
        </Link>
        <Link href="/all?type=featured">
          <a className={styles.bottomNavLinks}>Furniture</a>
        </Link>
        <Link href="/all?type=featured">
          <a className={styles.bottomNavLinks}>Kitchenware</a>
        </Link>
        <Link href="/all?type=featured">
          <a className={styles.bottomNavLinks}>Tableware</a>
        </Link>
        <Link href="/all?type=featured">
          <a className={styles.bottomNavLinks}>Fashion</a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
