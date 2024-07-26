"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import image1 from "@/public/assets/cars/1.jpg";
import image2 from "@/public/assets/cars/2.jpg";
import image3 from "@/public/assets/cars/3.jpg";
import image4 from "@/public/assets/cars/4.jpg";
import ArrowLeftSvg from "@/public/assets/about/arrow-left.svg";
import ArrowRightSvg from "@/public/assets/about/arrow-right.svg";

// Interface for image data
interface ImageData {
  src: StaticImageData;
}

// Image data array

const MyCarousel: React.FC = () => {
  const images: ImageData[] = [
    {
      src: image1,
    },
    {
      src: image2,
    },
    {
      src: image3,
    },
    {
      src: image4,
    },
  ];
  // State to keep track of the current image index
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // State to determine if the image is being hovered over
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Function to show the previous slide
  const prevSlide = (): void => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Function to show the next slide
  const nextSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // useEffect hook to handle automatic slide transition
  useEffect(() => {
    // Start interval for automatic slide change if not hovered
    if (!isHovered) {
      const interval = setInterval(() => {
        nextSlide();
      }, 5000);

      // Cleanup the interval on component unmount
      return () => {
        clearInterval(interval);
      };
    }
  }, [isHovered]);

  // Handle mouse over event
  const handleMouseOver = (): void => {
    setIsHovered(true);
  };

  // Handle mouse leave event
  const handleMouseLeave = (): void => {
    setIsHovered(false);
  };

  return (
    <div>
      <div className="relative w-full mx-auto mt-4">
        <div
          className="relative h-[230px]  lg:h-[460px]  flex mx-20 group   hover:-translate-y-2"
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        >
          <Image
            src={images[currentIndex].src}
            alt={`Slider Image ${currentIndex + 1}`}
           fill
          />
        </div>
        <button
          className="absolute left-0 top-1/2 transform   mx-1 -mt-[10px] -translate-y-1/2 "
          onClick={prevSlide}
        >
          <Image src={ArrowLeftSvg} alt="arrow-left" />
        </button>
        <button
          className="absolute right-0 top-1/2 transform   mx-1 -mt-[10px] -translate-y-1/2 "
          onClick={nextSlide}
        >
          <Image src={ArrowRightSvg} alt="arrow-left" />
        </button>
      </div>
      <div className="flex w-full h-[72px]  justify-center mt-4 space-x-4 overflow-y-auto">
        {images.map((img, index) => (
          <div
            key={index}
            className="w-[72px] h-[72px] flex cursor-pointer "
            onClick={() => {
              setCurrentIndex(index);
            }}
          >
            <Image
              className={`w-18 h-18 mx-2 ${
                index === currentIndex
                  ? "border-[#00F3B9] border-[1px] rounded-sm"
                  : "border-gray-300 border-[1px] rounded-sm"
              } transition-all duration-500 ease-in-out`}
              src={img.src}
              alt={`img-${index}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default MyCarousel;
