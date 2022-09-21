import { useState, useEffect, useRef } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import ReactPaginate from "react-paginate";
import { useProductsQuery } from "../utils/rest/products/products.query";
import { formatPriceRange } from "../lib/format-price-range";
import { useWindowSize } from "../hooks/useWindowSize";
import SideBarFilter from "../components/Home/SideBarFilter/SideBarFilter";
import FAQ from "../components/FAQ/FAQ";
import ProductsList from "../components/Home/ProductsList/ProductsList";
import StortingSection from "../components/Home/SortingSection/SortingSection";

export default function Home() {
  const [windowWidth, windowHeight] = useWindowSize();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const productTopRef = useRef(null);

  const { query } = useRouter();
  const priceRange = query.price && formatPriceRange(query.price);

  const { isLoading, data, error } = useProductsQuery({
    page,
    text: query.q && query.q,
    category: query.category && query.category,
    type: query.brand && query.brand,
    orderBy: query.orderBy && query.orderBy,
    sortedBy: query.sortedBy && query.sortedBy,
    variations: query.variations && query.variations,
    tags: query.tags && query.tags,
    ...(priceRange && priceRange.length === 2 && { min_price: priceRange.join(",") }),
    ...(priceRange && priceRange.length === 1 && { max_price: priceRange[0] }),
  });

  useEffect(() => {
    if (data && data.last_page) setTotalPages(data.last_page);
  }, [data]);

  const changeSortSelected = (value) => setSortSelected(value);

  const pageRangeDisplayed = () => {
    if (windowWidth > 1024) return 11;
    else if (windowWidth > 425) return 6;
    else return 3;
  };

  const handlePageClick = (event) => {
    productTopRef.current.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => setPage(parseInt(event.selected) + 1), 700);
  };

  if (error) return <p>{error.message}</p>;

  return (
    <>
      <Head>
        <title>Store | Craftezy</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="pt-6 wrapper">
        <div className="flex flex-row justify-between">
          <SideBarFilter />
          <section className="lg:basis-5/6 lg:ml-7 basis-full" ref={productTopRef}>
            <img src="/images/home-banner-preview.png" className="mb-10 w-full h-auto" />
            <StortingSection />
            <ProductsList loading={isLoading} data={data} />
          </section>
        </div>

        <div className="text-center mt-10 mb-[60px]">
          {totalPages > 0 && (
            <ReactPaginate
              previousLabel="Back"
              nextLabel="Next"
              pageClassName="text-black md:mx-2 mx-1"
              pageLinkClassName="text-xs font-medium font-sans line150"
              previousLinkClassName="md:mr-2 mr-1 text-xs font-medium font-sans line150 text-[#606062] border border-[#7B7B7B] bg-white hover:bg-[#7B7B7B] hover:text-white md:px-8 px-4 py-2"
              nextLinkClassName="md:ml-2 ml-1 text-xs font-medium font-sans line150 text-[#606062] border border-[#7B7B7B] bg-white hover:bg-[#7B7B7B] hover:text-white md:px-8 px-4 py-2"
              breakLabel="..."
              breakClassName="page-item text-xs font-medium font-sans line150"
              breakLinkClassName="text-black md:mx-2 mx-1"
              pageCount={totalPages}
              pageRangeDisplayed={pageRangeDisplayed()}
              onPageChange={handlePageClick}
              containerClassName="inline-flex"
              activeLinkClassName="text-white"
              activeClassName="bg-[#282828] rounded-[50%] w-6 h-6 flex items-center justify-center"
            />
          )}
        </div>

        <FAQ />
      </main>
    </>
  );
}