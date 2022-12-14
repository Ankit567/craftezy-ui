import { useState, Fragment } from "react";
import Head from "next/head";
import Image from "next/image";
import Category from "../../components/Blogs/Category";
import FeaturedBlog from "../../components/Blogs/FeaturedBlog";
import BlogList from "../../components/Blogs/BlogsList";
import Subscribe from "../../components/Subscribe/Subscribe";

const Blogs = () => {
  return (
    <Fragment>
      <Head>
        <title>Blogs | Craftezy</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="wrapper pt-6">
        <section className="text-center">
          <p className="mt-8 text-raisin-black text-lg font-medium mb-4 leading-[27px]">Blogs</p>
          <h1 className="text-raisin-black text-[32px] font-semibold leading-[48px] mb-4">
            All of our thoughts, <br />
            in one place.
          </h1>
          <p className="text-lg leading-[27px] text-[#201F1F] md:max-w-[459px] mx-auto mb-[70px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </section>

        <Category />
        <FeaturedBlog />
        <BlogList />
      </main>
      <Subscribe />
    </Fragment>
  );
};

export default Blogs;
