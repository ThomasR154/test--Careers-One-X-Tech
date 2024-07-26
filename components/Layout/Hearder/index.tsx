import Image from "next/image";
import Logo from "@/public/assets/logo.svg";
import LogoTitle from "@/public/assets/logo-title.svg";
import LanguageBar from "@/components/UI/LanguageBar";
import DropDown from "@/components/UI/Dropdown";
import { menus1, menus2 } from "@/utils/constant";
import { languageOptions } from "@/utils/constant";

const Header = () => {
  return (
    <nav className="flex flex-wrap items-center justify-between h-[64px] bg-[#FFFFFF] px-4 md:px-[120px]">
      <div className="flex items-center space-x-4">
        <div className="flex items-center">
          <Image
            src={Logo}
            alt="Logo"
            className="dark:invert"
            width={28.69}
            height={28.69}
          />
          <Image
            src={LogoTitle}
            alt="EVFY"
            className="dark:invert ml-2"
            width={113.22}
            height={21.52}
          />
        </div>
        <div className="hidden md:flex space-x-2">
          <DropDown menus={menus1} />
          <DropDown menus={menus2} />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="hidden md:flex">
          <LanguageBar languageOptions={languageOptions} />
        </div>
        <div className="flex items-center cursor-pointer">
          <p className="text-[#000000de] font-Graphik">Log In / Sign Up</p>
        </div>
      </div>
      <div className="flex md:hidden space-x-2 mt-2 w-full justify-center">
        <DropDown menus={menus1} />
        <DropDown menus={menus2} />
        <LanguageBar languageOptions={languageOptions} />
      </div>
    </nav>
  );
};

export default Header;
