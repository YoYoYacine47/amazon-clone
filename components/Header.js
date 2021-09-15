import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <header>
      <div className="flex bg-amazon_blue items-center py-2 pr-2">
        <div className="mt-2  space-x-3 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        <div className="hidden sm:flex items-center h-10 flex-grow">
          <input
            type="text"
            className="h-10 rounded-l-xl flex-grow bg-white outline-none px-2"
          />
          <SearchIcon className="h-10 p-2 bg-yellow-500 rounded-r-xl" />
        </div>

        <div className="p-2 text-white">
          <p className="text-xs">hello yoyo yacine</p>
          <p className=" font-bold whitespace-nowrap cursor-pointer hover:underline">
            Account & Lists
          </p>
        </div>

        <div className="p-2 text-white cursor-pointer hover:underline">
          <p className="text-xs">Returns</p>
          <p className="font-bold whitespace-nowrap">& Orders</p>
        </div>

        <div className="relative p-2 flex items-center text-white cursor-pointer">
          <ShoppingCartIcon className="h-10" />
          <span className="bg-yellow-500 text-base font-semibold h-5 w-5 flex justify-center items-center rounded-full top-1 right-1 absolute">
            2
          </span>
        </div>
      </div>

      <div className="text-white flex pl-4 space-x-3 bg-gray-700 p-1">
        <p className="flex items-center link">
          <MenuIcon className="h-6" />
          All
        </p>
        <p className=" link">Prime Video</p>

        <p className=" link">Amazon Business</p>

        <p className=" link">Today's Deals</p>

        <p className="hidden lg:block link">Electronic</p>
        <p className="hidden lg:block link">Food</p>
        <p className="hidden lg:block link">Prime</p>
        <p className="hidden lg:block link">Buy Again</p>
      </div>
    </header>
  );
}

export default Header;
