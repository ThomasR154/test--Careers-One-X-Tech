import Image from "next/image";

import FuelSvg from "@/public/assets/about/fuel.svg";
import AutoSvg from "@/public/assets/about/auto.svg";
import MilesSvg from "@/public/assets/about/miles.svg";
import DisplacementSvg from "@/public/assets/about/displacement.svg";

const AboutCar: React.FC = () => {
  const aboutCars = [
    {
      icon: FuelSvg,
      title: "Diesel Fuel",
    },
    {
      icon: AutoSvg,
      title: "Automatic Transmission",
    },
    {
      icon: MilesSvg,
      title: "11,594 Miles",
    },
    {
      icon: DisplacementSvg,
      title: "3.5L Dispacement",
    },
  ];
  return (
    <div>
      <p className="my-8 font-GraphikBold text-[34px] font-semibold  leading-[43px] tracking-[0.25px] color-[#000000DE]">
        About this car
      </p>

      <div className=" w-full lg:flex ">
        {aboutCars.map((car, index) => (
          <div
            key={index}
            className="flex items-center py-2 w-full lg:w-1/4 sm:w-full"
          >
            <div className="w-10 h-10 flex items-center">
              <Image src={car.icon} alt="Car Icon" />
            </div>
            <p className="font-GraphikMedium font-medium text-[20px] leading-[32px] tracking-[0.15px] color-[#000000DE]">
              {car.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutCar;
