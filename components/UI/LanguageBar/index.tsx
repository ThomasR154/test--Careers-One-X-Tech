"use client";
import Image from "next/image";
import { useState } from "react";
import { I_Language } from "@/utils/interface";

import ArrowDownSvg from "@/public/assets/about/arrow-down.svg";

interface CustomDropdownProps {
  languageOptions: I_Language[];
}

const LanguageBar: React.FC<CustomDropdownProps> = ({ languageOptions }) => {
  const [selectedLanguage, setSelectedLanguage] = useState<I_Language>(
    languageOptions[0]
  );
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative inline-block text-left">
      <div className="flex items-center">
        <div
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          className=" cursor-pointer inline-flex justify-center items-center w-full px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <div>
            <Image
              src={`./assets/flags/ic_flag_${selectedLanguage.value}.svg`}
              alt={selectedLanguage.label}
              width={28}
              height={18.23}
            />
          </div>
          <span>
            <Image src={ArrowDownSvg} alt="Arrow Down" />
          </span>
        </div>
      </div>
      {isOpen && (
        <div
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          className="absolute left-0 z-100  w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 cursor-pointer "
        >
          <ul>
            {languageOptions?.map((option: I_Language) => (
              <li
                key={option.value}
                className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100"
                role="menuitem"
                onClick={() => {
                  setSelectedLanguage(option);
                  setIsOpen(false);
                }}
              >
                <button>
                  <div className="flex item-center space-x-2">
                    <Image
                      src={`/assets/flags/ic_flag_${option.value}.svg`}
                      alt={option.label}
                      width={28}
                      height={18.23}
                      priority
                    />
                    <span>{option.label}</span>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
export default LanguageBar;
