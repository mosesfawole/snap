import { Menu, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";

export default function Company() {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <div className=" ">
      <Menu as="div" className="relative block text-left">
        <div>
          <Menu.Button
            onClick={handleClick}
            className="flex text-sm font-medium opacity-60 hover:opacity-100 "
          >
            Company
            {isActive ? (
              <ChevronUpIcon
                className="ml-2 -mr-1 h-5 w-5 "
                aria-hidden="true"
              />
            ) : (
              <ChevronDownIcon
                className="ml-2 -mr-1 h-5 w-5 "
                aria-hidden="true"
              />
            )}
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
          <Menu.Items className="md:absolute  mt-2 md:p-2 md:px-4 md:w-40 md:bg-white md:shadow-xl md:rounded-xl  focus:outline-none">
            <div className=" ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? " " : "text-gray-900"
                    } group flex w-full items-center rounded-md px-4 py-2 text-sm`}
                  >
                    History
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? " " : "text-gray-900"
                    } group flex w-full items-center rounded-md px-4 py-2 text-sm`}
                  >
                    Our Team
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? " " : "text-gray-900"
                    } group flex w-full items-center rounded-md px-4 py-2 text-sm`}
                  >
                    Blog
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
