import { weddingInfo } from "../constants";
import { Navbar } from "./Navbar";

export function Header() {
  return (
    <div className="flex flex-col items-center">
      <div className="self-start">
        <p className="pt-4 text-sm">
          <span className="pl-2">
            {weddingInfo.date.format("MMMM D, YYYY")}{" "}
          </span>
          <span className="pl-10">{weddingInfo.location}</span>
        </p>
      </div>
      <div className="font-livishly text-6xl py-5">Adriana + Jose</div>
      <Navbar />
    </div>
  );
}
