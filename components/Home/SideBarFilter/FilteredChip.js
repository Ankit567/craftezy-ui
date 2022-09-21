import { useRouter } from "next/router";
import isEmpty from "lodash/isEmpty";

const FilteredChip = ({ itemKey, itemValue }) => {
  const router = useRouter();
  const { pathname, query } = router;

  function handleClose() {
    const currentItem = query[itemKey].split(",").filter((i) => i !== itemValue);
    delete query[itemKey];
    router.push({
      pathname,
      query: {
        ...query,
        ...(!isEmpty(currentItem) ? { [itemKey]: currentItem.join(",") } : {}),
      },
    });
  }
  return (
    <div
      className="group flex flex-shrink-0 m-1.5 items-center border border-gray-300 bg-borderBottom rounded-lg text-xs px-3.5 py-2.5 capitalize text-heading cursor-pointer transition duration-200 ease-in-out hover:border-heading"
      onClick={handleClose}
    >
      {itemValue}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="ml-2"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#2c3e50"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </div>
  );
};

export default FilteredChip;
