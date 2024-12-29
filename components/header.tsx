import SearchInput from "@/ui/search-input";
import Image from "next/image";
import { Suspense } from "react";

export default function Header() {
  return (
    <header className="py-5 pb-7 flex items-center justify-between">
      <div className="flex items-center gap-1">
        <Image
          src="/logo.svg"
          alt="logo"
          width={65}
          height={65}
          className=" h-7 w-7 lg:w-auto lg:h-auto"
        />
        <h1 className="uppercase font-bold text-xs sm:text-base md:text-xl lg:text-2xl  text-main">
          Next Weather
        </h1>
      </div>
      <Suspense>
        <SearchInput />
      </Suspense>
    </header>
  );
}
