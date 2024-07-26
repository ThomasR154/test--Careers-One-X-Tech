"use client";
import { useState } from "react";
import { exteriors, interiors, performances, charges } from "@/utils/constant";
import ArrowSvg from "@/public/assets/about/arrow.svg";
import Image from "next/image";
const Footer: React.FC = () => {
  return (
    <footer className="px-[80px] w-full pt-20 bg-[#FBFCFE]">
      <p className="mb-8 font-GraphikBold text-[34px] font-semibold  leading-[43px] tracking-[0.25px] color-[#000000DE]">
        Specifications
      </p>
      <div className="lg:flex space-x-2">
        <div className="lg:w-1/3 w-full">
          <p className="mb-4 font-Graphik text-[20px] font-semibold leading-[25px] tracking-[0.15px] color-[#000000DE]">
            Exterior
          </p>

          <div className="text-left flex pb-8">
            <div className=" w-1/2">
              {exteriors.map((item, index) => (
                <div
                  key={`exterior1-${index}`}
                  className="text-[20px] leading-[32px] tracking-[0.15px] text-left"
                >
                  {item.title}
                </div>
              ))}
            </div>
            <div>
              {exteriors.map((item, index) => (
                <div
                  className="text-[20px] leading-[32px] tracking-[0.15px] text-left"
                  key={`exterior2-${index}`}
                >
                  {item.content}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 w-full">
          <p className=" mb-4 font-Graphik text-[20px] font-semibold leading-[25px] tracking-[0.15px] color-[#000000DE]">
            Interior
          </p>
          <div className="text-left flex pb-8">
            <div className="w-1/2">
              {interiors.map((item, index) => (
                <div
                  className="text-[20px] leading-[32px] tracking-[0.15px] text-left "
                  key={`interior1-${index}`}
                >
                  {item.title}
                </div>
              ))}
            </div>
            <div>
              {interiors.map((item, index) => (
                <div
                  className="text-[20px] leading-[32px] tracking-[0.15px] text-left"
                  key={`interior2-${index}`}
                >
                  {item.content}
                </div>
              ))}
            </div>
          </div>
          <div className="flex mb-2  items-center space-x-1 text-[#0036C3] leading-[20px] tracking-[0.15px] text-[14px] decoration-solid underline pt-4 ">
            <div>Show more</div>
            <div className="pl-2">
              <Image src={ArrowSvg} alt="Arrow" />
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 w-full">
          <p className="mb-4 font-Graphik text-[20px] font-semibold leading-[25px] tracking-[0.15px] color-[#000000DE]">
            BEV Performance
          </p>

          <div className="text-left flex pb-8">
            <div className="w-1/2">
              {performances.map((item, index) => (
                <div
                  key={`performances1-${index}`}
                  className="text-[20px] leading-[32px] tracking-[0.15px] text-left "
                >
                  {item.title}
                </div>
              ))}
            </div>
            <div>
              {performances.map((item, index) => (
                <div
                  className="text-[20px] leading-[32px] tracking-[0.15px] text-left"
                  key={`performances2-${index}`}
                >
                  {item.content}
                </div>
              ))}
            </div>
          </div>
          <p className="mb-4 font-Graphik text-[20px] font-semibold leading-[25px] tracking-[0.15px] color-[#000000DE]">
            Charging
          </p>
          <div className="text-left flex pb-8">
            <div className="w-1/2">
              {charges.map((item, index) => (
                <div
                  key={`charge1-${index}`}
                  className="text-[20px] leading-[32px] tracking-[0.15px] text-left "
                >
                  {item.title}
                </div>
              ))}
            </div>
            <div>
              {charges.map((item, index) => (
                <div
                  className="text-[20px] leading-[32px] tracking-[0.15px] text-left"
                  key={`charge2-${index}`}
                >
                  {item.content}
                </div>
              ))}
            </div>
          </div>
          <span className="text-[#0036C3] leading-[20px] tracking-[0.15px] text-[14px] decoration-solid underline pt-4	hover:text-[#00F3B9] transition duration-300">
            Show more
          </span>
        </div>
      </div>
      <div className="mb-20 mx-auto w-[200px] font-GraphikBold bg-[#FFFFFF] text-[#0036C3] border-[1px] border-[#0036C3] leading-[20px] py-[21px] text-center rounded-[4px] mt-8 hover:bg-[#0036C3] hover:text-[#FFFFFF] transition duration-300 cursor-pointer">
        Order Now
      </div>
    </footer>
  );
};

export default Footer;
