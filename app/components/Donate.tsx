import React from "react";
import Image from "next/image";
import donate from "@/public/donate.webp";

const Donate = () => {
  const containerStyles = "py-10 bg-gray-100 sm:py-16 lg:py-24";
  const innerContainerStyles = "max-w-5xl px-4 mx-auto sm:px-6 lg:px-8";
  const gridStyles =
    "grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-24 gap-y-10";
  // const avatarStyles = "object-cover w-16 h-16 rounded-full";
  // const blockquoteStyles = "mt-6 text-xl leading-relaxed text-black";
  // const nameStyles = "mt-6 text-base font-semibold text-black";
  // const titleStyles = "mt-1 text-base text-gray-600";
  const cardContainerStyles = "overflow-hidden bg-white";
  const cardContentStyles = "p-8 lg:px-12 lg:py-10";
  const headingStyles = "text-2xl font-semibold text-black";
  const descriptionStyles = "mt-4 text-base text-gray-600";
  const primaryButtonStyles =
    "flex items-center justify-center w-full px-4 py-4 mt-8 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border-2 border-transparent rounded-[35px] hover:bg-blue-700 focus:bg-blue-700";
  const secondaryButtonStyles =
    "flex items-center justify-center w-full px-4 py-4 mt-4 text-base font-semibold text-black transition-all duration-200 bg-transparent border-2 border-black rounded-[35px] hover:bg-black focus:bg-black hover:text-white focus:text-white";

  return (
    <section className={containerStyles}>
      <div className={innerContainerStyles}>
        <div className={gridStyles}>
          <div className="mt-20">
            <Image src={donate} alt="Donation Image" width={750} className="rounded-lg"></Image>
          </div>

          <div>
            <div className={cardContainerStyles}>
              <div className={cardContentStyles}>
                <h3 className={headingStyles}>Support Youth. Empower Change</h3>
                <p className={descriptionStyles}>
                Your donation helps young leaders create impactful programs, organize activities, and pursue causes that make a difference. Every contribution goes directly to initiatives driven by youth, for youth—building a brighter future for our communities. Together, we can fuel the next generation of changemakers.
                </p>

                <a href="https://donate.stripe.com/test_4gw5nf5Pg4lufxm3cd" className={primaryButtonStyles} role="button">
                  Donate
                </a>

                <a href="#review" className={secondaryButtonStyles} role="button">
                  See the change
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donate;
