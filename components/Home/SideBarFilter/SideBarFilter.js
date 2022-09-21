import { useRouter } from "next/router";
import isEmpty from "lodash/isEmpty";

import CategoryFilters from "./CategoryFilters/CategoryFilters";
import BrandFilters from "./ExpandedFilters/BrandFilters";
import PriceFilters from "./ExpandedFilters/PriceFilters";
import CategoryList from "./ExpandedFilters/CategoryList";
import FilteredChip from "./FilteredChip";
import styles from "./style.module.scss";

const SideBarFilter = () => {
  const router = useRouter();
  const { query } = router;

  return (
    <aside className="basis-1/6 lg:block hidden md:min-w-[248px] min-w-full">
      <div className="flex flex-wrap -m-1.5 pt-2 mb-2">
        {!isEmpty(query) &&
          Object.values(query)
            .join(",")
            .split(",")
            .map((v, idx) => <FilteredChip itemKey={Object.keys(query).find((k) => query[k]?.includes(v))} itemValue={v} key={idx} />)}
      </div>

      <h2 className={styles.topTitle}>Filters</h2>
      {/* <CategoryFilters /> */}
      <CategoryList />
      <BrandFilters />
      <PriceFilters />
    </aside>
  );
};

export default SideBarFilter;
