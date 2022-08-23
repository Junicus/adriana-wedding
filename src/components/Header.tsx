import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { weddingInfo } from "../constants";
import { Navbar } from "./Navbar";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="flex items-center w-full justify-center sm:hidden">
        <div className="flex-1 flex justify-center items-center">
          <p className="font-noto sm:font-livishly text-2xl sm:text-6xl py-5">
            Adriana + Jose
          </p>
        </div>
        <div className="pr-5">
          <HiMenu className="w-8 h-8" onClick={() => setIsOpen(true)} />
        </div>
        {isOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-white">
            <div className="p-5">
              <HiX className="w-8 h-8" onClick={() => setIsOpen(false)} />
              <Navbar setIsOpen={setIsOpen} />
            </div>
          </div>
        )}
      </div>
      <div className="hidden sm:flex flex-col items-center">
        <div className="self-start hidden sm:block">
          <p className="pt-4 text-sm">
            <span className="pl-2">
              {weddingInfo.date.format("MMMM D, YYYY")}{" "}
            </span>
            <span className="pl-10">{weddingInfo.location}</span>
          </p>
        </div>
        <div className="font-noto sm:font-livishly text-2xl sm:text-6xl py-5">
          Adriana + Jose
        </div>
        <Navbar setIsOpen={setIsOpen} />
      </div>
    </div>
  );
}
