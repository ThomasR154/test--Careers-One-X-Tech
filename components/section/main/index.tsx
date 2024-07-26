"use client";

import { useState } from "react";

import MyCarousel from "@/components/UI/Carousel";

import { I_CarInfo, I_Price } from "@/utils/interface";
import Detail from "./detail";

const Main: React.FC = () => {
  const carInfo: I_CarInfo = {
    model: "2021 Tesla Model 3",
    serialHeader: "VIN",
    serialNumber: "JN1AZ0CPOBT009448",
    rating: 5,
    badges: [{ name: "New", color: "#0036C3", backgroundColor: "#00F3B9" }],
  };
  const prices: I_Price[] = [
    { color: "#000000", price: 41000, name: "Black" },
    { color: "#D43A55", price: 42000, name: "Red" },
    { color: "#0036C3", price: 43000, name: "Blue" },
    { color: "#FFFFFF", price: 43000, name: "Silver" },
  ];
  const [selectedCar, setSelectedCar] = useState<I_Price>(prices[0]);
  return (
    <div className=" pt-5 w-full lg:flex">
      <div className="sm:w-full lg:w-3/4 ">
        <MyCarousel />
      </div>
      <div className="   sm:w-full sm:p-2 lg:p-5  lg:w-1/4 ">
        <Detail
          carInfo={carInfo}
          selectedCar={selectedCar}
          setSelectedCar={setSelectedCar}
          prices={prices}
        />
      </div>
    </div>
  );
};

export default Main;
