import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Disclosure, Transition } from "@headlessui/react";

import styles from "./style.module.scss";
import { useCategoriesInfiniteQuery } from "../../../../utils/rest/category/categories.query";

const ExpandedFilters = () => {
  const router = useRouter();
  const { pathname, query } = router;

  const {
    data,
    isLoading,
    hasNextPage,
    isFetchingNextPage: loadingMore,
    fetchNextPage,
  } = useCategoriesInfiniteQuery({
    limit: 5,
    parent: null,
  });

  const selectedCategories = query?.category ? query.category.split(",") : [];
  const [formState, setFormState] = useState(selectedCategories);

  useEffect(() => {
    setFormState(selectedCategories);
  }, [query?.category]);

  function handleItemClick(e) {
    const { value } = e.currentTarget;
    let currentFormState = formState.includes(value) ? formState.filter((i) => i !== value) : [...formState, value];
    const { category, ...restQuery } = query;
    router.push(
      {
        pathname,
        query: {
          ...restQuery,
          ...(!!currentFormState.length ? { category: currentFormState.join(",") } : {}),
        },
      },
      undefined,
      { scroll: false }
    );
  }

  return (
    <div className="bg-dark-cultured">
      <Disclosure defaultOpen={true}>
        {({ open }) => (
          <>
            <Disclosure.Button className={styles.expandedTitle}>
              <p>Categories</p>
              <Image
                width={12}
                height={12}
                className={open ? "transform rotate-270" : "transform rotate-90"}
                src="/images/filter-chevron-left.svg"
              />
            </Disclosure.Button>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel>
                {!isLoading &&
                  data?.pages?.map((page) => {
                    return page?.data.map((category) => (
                      <div key={category?.id} className={styles.filterBox}>
                        <input
                          type="checkbox"
                          id={category?.slug}
                          checked={formState?.includes(category.slug)}
                          className="form-checkbox"
                          name={category?.name.toLowerCase()}
                          value={category?.slug}
                          onChange={handleItemClick}
                        />
                        <label htmlFor={category?.slug}>{category?.name}</label>
                      </div>
                    ));
                  })}

                <div className={styles.filterBox}>
                  {hasNextPage && (
                    <button
                      variant="custom"
                      disabled={loadingMore}
                      onClick={() => fetchNextPage()}
                      className="text-sm hover:underline pt-1"
                    >
                      Load More
                    </button>
                  )}
                </div>
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default ExpandedFilters;
