import Image from "next/image";
import { Disclosure, Transition } from "@headlessui/react";
import { FILTER_LINKS } from "../FilterData";
import styles from "./style.module.scss";

const CategoryFilters = () => {
  return (
    <div className="mb-8">
      {FILTER_LINKS.map((filter) => (
        <Disclosure key={filter.name}>
          <Disclosure.Button className={styles.majorFilterButton}>
            <Image
              width={12}
              height={8}
              src="/images/filter-chevron-left.svg"
            />
            <p>{filter.name}</p>
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
              {filter.links.map((filterLink, index) => (
                <a
                  key={index}
                  className={styles.navFilterLinks}
                  href={filterLink.href}
                >
                  {filterLink.label}
                </a>
              ))}
            </Disclosure.Panel>
          </Transition>
        </Disclosure>
      ))}
    </div>
  );
};

export default CategoryFilters;
