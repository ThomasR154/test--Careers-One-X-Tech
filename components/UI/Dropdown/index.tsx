"use client";
import { useState } from "react";

import { I_DropdownMenu } from "@/utils/interface";
import Link from "next/link";

import ArrowDownSvg from "@/public/assets/about/arrow-down.svg";
import Image from "next/image";
/**
 * Props for the CustomDropdown component.
 */
interface CustomDropdownProps {
  menus: I_DropdownMenu[];
}
const DropDown: React.FC<CustomDropdownProps> = ({ menus }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative block text-left">
      <div className="flex items-center">
        <Link href={menus[0].url}>
          <div
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            className="inline-flex justify-center w-full px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span className=" leading-[20px] font-GraphikBold ">
              {menus[0].title}
            </span>
            <span>
              <Image src={ArrowDownSvg} alt="Arrow Down" />
            </span>
          </div>
        </Link>
      </div>
      {isOpen && (
        <div
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          className="absolute left-0 z-50  w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
        >
          <ul className="py-1" role="menu" aria-orientation="vertical">
            {menus.length > 1 &&
              menus?.slice(1).map((menu: I_DropdownMenu, index: number) => (
                <Link href={menu.url} key={index}>
                  <li
                    className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                    role="menuitem"
                  >
                    {menu.title}
                  </li>
                </Link>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDown;
