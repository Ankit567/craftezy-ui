import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Disclosure, Transition } from "@headlessui/react";
import { priceFilterItems } from "../FilterData";
import styles from "./style.module.scss";

const ExpandedFilters = () => {
  const router = useRouter();
  const { pathname, query } = router;
  const items = priceFilterItems;

  const selectedPrices = query?.price ? query.price.split(",") : [];
  const [formState, setFormState] = useState(selectedPrices);

  useEffect(() => {
    setFormState(selectedPrices);
  }, [query?.price]);

  function handleItemClick(e) {
    const { value } = e.currentTarget;
    let currentFormState = formState.includes(value) ? formState.filter((i) => i !== value) : [...formState, value];
    const { price, ...restQuery } = query;
    router.push(
      {
        pathname,
        query: {
          ...restQuery,
          ...(!!currentFormState.length ? { price: currentFormState.join(",") } : {}),
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
              <p>Price</p>
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
                {items?.map((item) => (
                  <div key={item?.id} className={styles.filterBox}>
                    <input
                      type="checkbox"
                      id={item?.slug}
                      checked={formState?.includes(item.slug)}
                      className="form-checkbox"
                      name={item?.name.toLowerCase()}
                      value={item?.slug}
                      onChange={handleItemClick}
                    />
                    <label htmlFor={item?.slug}>{item?.name}</label>
                  </div>
                ))}
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default ExpandedFilters;
