"use client";

import Image from "next/image";
import Link from "next/link";

import HamburgerButton from "./HamburgerButton";
import Logo from "./Logo";
import { useRecoilState } from "recoil";
import { isLoggedInState } from "@/store/auth";

const Header = () => {
  //   const auth = useRecoilState(isLoggedInState);
  //   console.log(auth);
  return (
    <header className="max-w-[120rem] w-full mx-auto h-[8rem] flex justify-between items-center p-4">
      <div>
        <Logo />
      </div>
      <div className="flex items-start gap-4">
        <div className="py-3 px-4 text-link text-gray-50 cursor-pointer">
          Movies
        </div>
        <div className="py-3 px-4 text-link text-gray-50 cursor-pointer">
          Bookmark
        </div>
        <div className="flex items-center gap-2">
          <div>
            <HamburgerButton />
          </div>
          <Link href="/login" className="flex gap-2 py-3 px-4 cursor-pointer">
            <Image
              src="/icons/logout.svg"
              alt="화살표"
              width={16}
              height={16}
            />
            <span className="text-link text-gray-50">LogIn</span>
            {/* <Logged /> */}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
