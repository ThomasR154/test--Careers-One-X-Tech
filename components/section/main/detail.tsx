import Image from "next/image";
import Link from "next/link";

import { twMerge } from "tailwind-merge";

import StarSvg from "@/public/assets/about/star.svg";
import { I_CarBadge, I_CarInfo, I_Price } from "@/utils/interface";

interface DetailDefaultProps {
  carInfo: I_CarInfo;
  selectedCar: I_Price;
  setSelectedCar: (price: I_Price) => void;
  prices: I_Price[];
}
const Detail: React.FC<DetailDefaultProps> = ({
  carInfo,
  setSelectedCar,
  selectedCar,
  prices,
}) => {
  return (
    <div className="w-full">
      {carInfo?.badges?.map((badge: I_CarBadge, index: number) => (
        <span
          className={twMerge(
            `inline-flex items-center rounded-[64px] px-2 py-1 text-xs font-medium text-[${badge.color}] ring-1 ring-inset ring-gray-500/10`,
            `bg-[${badge?.backgroundColor}]`
          )}
          style={{ backgroundColor: badge.backgroundColor }}
          key={`badge-${index}`}
        >
          {badge.name}
        </span>
      ))}
      <p className=" font-GraphikBold text-[34px] font-semibold  leading-[43px] tracking-[0.25px] color-[#000000DE]">
        {carInfo.model}
      </p>
      <div className="pt-6">
        <span className="font-GraphikRegular  font-normal  leading-[24px] tracking-[0.15px] color-[#00000061]">
          {carInfo.serialHeader}:
        </span>
        <span className="font-GraphikMedium  font-medium  leading-[24px] tracking-[0.15px] color-[#000000DE]">
          {carInfo.serialNumber}
        </span>
      </div>
      <div className="py-4 flex space-x-1">
        <Image src={StarSvg} alt="Star Icon" />
        <Image src={StarSvg} alt="Star Icon" />
        <Image src={StarSvg} alt="Star Icon" />
        <Image src={StarSvg} alt="Star Icon" />
        <Image src={StarSvg} alt="Star Icon" />
      </div>
      <p className="font-GraphikBold leading-[36px] text-[24px] tracking-[0.15px] color-[#000000DE] pb-6">
        ${selectedCar.price}
      </p>
      <hr />
      <p className="pt-6 font-GraphikBold leading-[20px] text-[16px] tracking-[0.15px] color-[#000000DE]">
        Colour
      </p>
      <div className="flex space-x-2 items-center justify-between">
        <div className="flex space-x-2 py-2">
          <div
            className={`relative  ${
              selectedCar.name === "Black" ? "outline-none" : "outline-2"
            }  w-[36px] h-[36px]  rounded-full outline-[#00F3B9] bg-transparent cursor-pointer animate-outline-ping  `}
            onClick={() => setSelectedCar(prices[0])}
          >
            <div
              className={`absolute left-[4px] top-[4px] w-[28px] h-[28px] rounded-full border-2 bg-[#000000] cursor-pointer border-[#e2e2e2] `}
            ></div>
          </div>
          <div
            className={`relative  ${
              selectedCar.name === "Red" ? "outline-none" : "outline-2"
            }  w-[36px] h-[36px]  rounded-full outline-[#00F3B9] bg-transparent cursor-pointer animate-outline-ping`}
            onClick={() => setSelectedCar(prices[1])}
          >
            <div
              className={`absolute left-[4px] top-[4px] w-[28px] h-[28px] rounded-full border-2 bg-[#D43A55] cursor-pointer border-[#e2e2e2] `}
            ></div>
          </div>
          <div
            className={`relative  ${
              selectedCar.name === "Blue" ? "outline-none" : "outline-2"
            }  w-[36px] h-[36px]  rounded-full outline-[#00F3B9] bg-transparent cursor-pointer animate-outline-ping`}
            onClick={() => setSelectedCar(prices[2])}
          >
            <div
              className={`absolute left-[4px] top-[4px] w-[28px] h-[28px] rounded-full border-2 bg-[#0036C3] cursor-pointer border-[#e2e2e2] `}
            ></div>
          </div>
          <div
            className={`relative  ${
              selectedCar.name === "Silver" ? "outline-none" : "outline-2"
            }  w-[36px] h-[36px]  rounded-full outline-[#00F3B9] bg-transparent cursor-pointer animate-outline-ping`}
            onClick={() => setSelectedCar(prices[3])}
          >
            <div
              className={`absolute left-[4px] top-[4px] w-[28px] h-[28px] rounded-full border-2 bg-[#FFFFFF] cursor-pointer border-[#e2e2e2] `}
            ></div>
          </div>
        </div>
        <div>{selectedCar.name.toUpperCase()}</div>
      </div>
      <div className="bg-[#0036C3] text-[#00F3B9] leading-[20px] py-[21px] text-center rounded-[4px] mt-8 hover:bg-[#00F3B9] hover:text-[#0036C3] transition duration-300 cursor-pointer">
        Order Now
      </div>
      <p className="text-[#00000061] text-center pt-4 leading-[24px] tracking-[0.15px]">
        Estimated within 16 Aug – 23 Aug{" "}
      </p>
      <p className="text-[#000000DE] font-GraphikBold  text-[24px] pt-4 leading-[36px] ">
        {
          "Tesla believes in accelerating the world's transition to sustainable energy with electric cars."
        }
      </p>
      <Link
        href="/"
        className="text-[#0036C3] leading-[32px] tracking-[0.15px] text-[20px] decoration-solid underline pt-4 hover:text-[#00F3B9] transition duration-300"
      >
        View the Tesla collection
      </Link>
      <div className="pt-8">
        {["Description", "Product Highlights", "Delivery & Warranty"].map(
          (item, index) => (
            <div className="pt-8 " key={index}>
              <hr />
              <div className="flex justify-between items-center pt-8">
                <div className="font-GraphikBold leading-[20px]">{item}</div>
                <div>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z"
                      fill="black"
                      fillOpacity="0.54"
                    />
                  </svg>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};
export default Detail;
