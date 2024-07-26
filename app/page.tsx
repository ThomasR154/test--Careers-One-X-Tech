import AboutCar from "@/components/section/about";
import Main from "@/components/section/main";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" lg:px-20 sm:px-10 px-5 w-full  justify-between  bg-[#FBFCFE]">
      <Main />
      <div>
        <AboutCar />
      </div>
    </main>
  );
}
