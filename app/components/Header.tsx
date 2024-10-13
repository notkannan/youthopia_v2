'use client'

import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiShoppingCart, FiX } from "react-icons/fi";
import logo from '@/public/logo.png';
import Image from "next/image";
import { SignedIn, UserButton } from "@clerk/nextjs";

const styles = {
  link: "text-base font-medium text-black",
  iconButton:
    "flex items-center justify-center ml-auto text-white bg-black rounded-full w-9 h-9 xl:hidden",
  navLink:
    "py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600",
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      {/* lg+ */}
      <div className="bg-gray-100 border-b border-gray-200">
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <nav className="relative flex items-center justify-between h-16 lg:h-20">
            <div className="hidden xl:flex xl:items-center xl:space-x-10">
              <Link href="/activities" className={styles.link} title="Features">
                Activities
              </Link>
              <Link href="/news" className={styles.link} title="Solutions">
                News
              </Link>
              <Link href="/donate" className={styles.link} title="Resources">
                Donate
              </Link>
              <Link href="/forums" className={styles.link} title="Pricing">
                Forums
              </Link>
            </div>
            <div className="xl:absolute xl:-translate-x-1/2 xl:inset-y-5 xl:left-1/2">
              <div className="flex-shrink-0">
                <Link href="/home" className="flex" title="Youthopia">
                 <Image src={logo} alt="Youthopia Logo" width={150}/>
                </Link>
              </div>
            </div>
            <button type="button" className={styles.iconButton}>
              <FiShoppingCart className="w-5 h-5" />
            </button>
            <button
              type="button"
              className="inline-flex p-2 ml-5 text-black transition-all duration-200 rounded-md xl:hidden focus:bg-gray-100 hover:bg-gray-100"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
            <div className="hidden xl:flex xl:items-center xl:space-x-10">
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </nav>
        </div>
      </div>

      {/* xs to lg */}
      {isMenuOpen && (
        <nav className="py-4 bg-white xl:hidden">
          <div className="px-4 mx-auto sm:px-6 lg:px-8">
            <div>
              <div className="flex flex-col space-y-2">
                <Link href="#" className={styles.navLink} title="Features">
                  Features
                </Link>
                <Link href="#" className={styles.navLink} title="Solutions">
                  Solutions
                </Link>
                <Link href="#" className={styles.navLink} title="Resources">
                  Resources
                </Link>
                <Link href="#" className={styles.navLink} title="Pricing">
                  Pricing
                </Link>
              </div>
              <hr className="my-4 border-gray-200" />
              <div className="flex flex-col space-y-2">
                <Link href="#" className={styles.navLink} title="Sign up">
                  Sign up
                </Link>
                <Link href="#" className={styles.navLink} title="Sign in">
                  Sign in
                </Link>
              </div>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
