'use client'

import React, { useState } from "react";
import { FaBars, FaTimes, FaShieldAlt } from "react-icons/fa";
import Image from "next/image";
import logo from '@/public/logo.png';
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";


// Define common styles as a JavaScript object
const commonStyles = {
  link: "inline-flex items-center text-2xl font-bold text-gray-900 space-x-2",
  navLink:
    "inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-gray-900 transition-all duration-200 border border-transparent rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300",
  buttonPrimary:
    "inline-flex items-center justify-center px-6 py-2.5 text-base font-medium text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700",
  buttonSecondary:
    "inline-flex items-center justify-center px-6 py-2.5 text-base font-medium text-gray-900 transition-all duration-200 border border-gray-900 rounded-full hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900",
};

const Hero: React.FC = () => {
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <div>
      <header className="py-4 bg-white sm:py-5">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-between">
            <div className="shrink-0">
              <a href="#" title="AuraUI" className={commonStyles.link}>
                <Image src={logo} alt="Youthopia Logo" width={150}/>
              </a>
            </div>

            <div className="hidden lg:flex lg:items-center lg:space-x-4 lg:ml-12">
              {["Activities", "News", "Donate", "Forums"].map((item) => (
                <a
                  href={item.toLowerCase()}
                  key={item}
                  title={item}
                  className={commonStyles.navLink}
                >
                  {item}
                </a>
              ))}
            </div>

            <div className="hidden sm:flex sm:items-center sm:justify-end sm:space-x-4 sm:ml-auto">
              <SignedOut>
                <SignInButton />
              </SignedOut>
            </div>

            <div className="flex ml-4 lg:hidden">
              <button
                type="button"
                className={`${commonStyles.buttonSecondary} p-2.5`}
                onClick={() => setExpanded(!expanded)}
                aria-expanded={expanded}
              >
                {expanded ? (
                  <FaTimes className="w-6 h-6" />
                ) : (
                  <FaBars className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {expanded && (
            <nav className="mt-4">
              <div className="flex flex-col space-y-4">
                {["Products", "Features", "Pricing", "Support"].map((item) => (
                  <a
                    href="#"
                    key={item}
                    title={item}
                    className={commonStyles.navLink}
                  >
                    {item}
                  </a>
                ))}
                <a
                  href="#"
                  title="Start free trial"
                  className={commonStyles.buttonSecondary}
                >
                  Start free trial
                </a>
              </div>
            </nav>
          )}
        </div>
      </header>

      <section className="py-20 bg-white sm:py-24 lg:py-26 xl:py-28">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12">
            <div className="flex flex-col justify-between lg:order-2">
              <div className="flex-1">
                <span className="inline-flex items-center px-3 py-2 text-sm font-medium text-blue-600 rounded-xl bg-blue-50">
                  {" "}
                  Start Your Journey{" "}
                </span>
                <h1 className="mt-6 mb-6 text-4xl font-semibold tracking-tight text-gray-900 sm:text-4xl xl:text-6xl sm:tracking-tight">
                    Empower the Next Generation of Changemakers.
                </h1>
              </div>

              <div className="mt-6 lg:mt-auto">
                <p className="text-lg leading-7 text-gray-700 lg:leading-8 lg:text-xl">
                Discover, Create, and Connect! Build camps, start activities, share ideas, and support causes that matter. Join a community where the future is yours to shape
                </p>
                <div className="mt-10">
                  <a
                    href="#"
                    title="Book A Discovery Call"
                    className={commonStyles.buttonPrimary}
                    role="button"
                  >
                    Join the Conversation
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:order-1">
              <div className="relative w-full max-w-sm mx-auto">
                <img
                  className="relative w-full max-w-xs mx-auto sm:max-w-sm rounded-2xl"
                  src="https://www.auraui.com/memeimage/code-illustration.png"
                  alt="AuraUI Illustration"
                />
                <div className="absolute bottom-0 left-0 mb-12 -ml-2 bg-white shadow-2xl sm:mb-24 sm:-ml-24 lg:-ml-12 xl:-ml-24 w-72 rounded-2xl">
                  <div className="px-4 py-5 sm:p-6">
                    <div className="flex items-start">
                      <FaShieldAlt className="text-blue-600 w-9 h-9 shrink-0" />
                      <div className="ml-4">
                        <p className="text-3xl font-semibold text-gray-900">
                          34,585
                        </p>
                        <p className="mt-1 text-lg font-normal text-gray-700">
                          Projects built with AuraUI last week
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
