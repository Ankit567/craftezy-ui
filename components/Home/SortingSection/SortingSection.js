import { Switch, Menu, Transition } from "@headlessui/react";
import { Fragment, useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const StortingSection = () => {
  const sortingOptions = [
    { name: "Sorting Options", value: "options" },
    { name: "Oldest", value: "created_at|ASC" },
    { name: "Popularity", value: "orders_count|DESC" },
    { name: "Price: Low-High", value: "min_price|ASC" },
    { name: "Price: High-Low", value: "max_price|DESC" },
  ];

  const router = useRouter();
  const { pathname, query } = router;

  const currentSelectedItem =
    query?.orderBy && query?.sortedBy ? sortingOptions.find((o) => o.value === `${query.orderBy}|${query.sortedBy}`) : sortingOptions[0];

  const [selectedItem, setSelectedItem] = useState(currentSelectedItem);
  const [readyToShip, setReadyToShip] = useState(false);
  const [freeShipping, setFreeShipping] = useState(false);

  useEffect(() => {
    setSelectedItem(currentSelectedItem);
  }, [query?.orderBy, query?.sortedBy]);

  function handleSortChange(values) {
    setSelectedItem(values);
    const { orderBy, sortedBy, ...restQuery } = query;
    const splitValues = values.value.split("|");
    router.push(
      {
        pathname,
        query: {
          ...restQuery,
          ...(values.value !== sortingOptions[0].value ? { orderBy: splitValues[0], sortedBy: splitValues[1] } : {}),
        },
      },
      undefined,
      { scroll: false }
    );
  }

  return (
    <div className="sm:flex block items-center justify-between">
      <div>
        <h2 className="font-medium line150 text-2xl mb-2">Seasonal Decor</h2>
        <p className="font-open-sans line150 text-sm">Shop thousands of unique wholesale brands.</p>
      </div>

      <div className="mr-3 H-100">
        <div className="flex sm:justify-end sm:mt-0 mt-4 items-center mb-4">
          <p className="text-base mr-2 line150">Show by</p>
          <div>
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="min-w-[121px] h-7 border border-davy-gray flex items-center justify-between px-3 p-2 text-xs font-medium line150 text-taupe-gray">
                  <span className="mr-2">{selectedItem.name}</span>
                  <Image width={14} height={14} src="/images/list-chevron-down.svg" />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="z-10 absolute sm:right-0 sm:left-auto left-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {sortingOptions.map((option, index) => (
                    <div className="px-1 py-1" key={index}>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            onClick={() => handleSortChange(option)}
                            className={`${active ? "bg-brown text-white" : "text-gray-900"} text-left w-full px-2 py-2 text-sm`}
                          >
                            {option.name}
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                  ))}
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>

        <div className="flex items-center">
          <Switch.Group>
            <div className="flex items-center">
              <Switch.Label className="mr-1 font-medium text-xs line150 text-brown">Ready to Ship</Switch.Label>
              <Switch
                checked={readyToShip}
                onChange={setReadyToShip}
                className={`${readyToShip ? "bg-light-orange" : "bg-gray-200"} relative inline-flex items-center h-3 rounded-full w-7`}
              >
                <span
                  className={`${
                    readyToShip ? "translate-x-4 bg-beer h-3" : "translate-x-0.5 w-2 h-2 bg-white"
                  } inline-block w-3 transform bg-white rounded-full`}
                />
              </Switch>
            </div>
          </Switch.Group>

          <Switch.Group>
            <div className="flex items-center ml-3">
              <Switch.Label className="mr-1 font-medium text-xs line150 text-brown">Free Shipping</Switch.Label>
              <Switch
                checked={freeShipping}
                onChange={setFreeShipping}
                className={`${freeShipping ? "bg-light-orange" : "bg-gray-200"} relative inline-flex items-center h-3 rounded-full w-7`}
              >
                <span
                  className={`${
                    freeShipping ? "translate-x-4 bg-beer h-3" : "translate-x-0.5 w-2 h-2 bg-white"
                  } inline-block w-3 transform bg-white rounded-full`}
                />
              </Switch>
            </div>
          </Switch.Group>
        </div>
      </div>
    </div>
  );
};

export default StortingSection;
