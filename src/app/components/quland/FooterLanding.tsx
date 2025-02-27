"use client";
import React from "react";
import FooterCta from "./FooterCta";

export function Footer() {
  return (
    <footer className="relative w-full overflow-hidden">
      <div className="absolute z-10 shape-1 left-40 top-96">
        <img src="/assets/images/home-four/shape-1.webp" alt="" />
      </div>
      <div className="absolute z-10 shape-2 right-96 top-96">
        <img src="/assets/images/home-four/shape-2.webp" alt="" />
      </div>
      <div className="shape-3 absolute left-96 top-[550px] z-10">
        <img src="/assets/images/home-four/shape-3.webp" alt="" />
      </div>
      <div className="shape-4 absolute right-96 top-[550px] z-10">
        <img src="/assets/images/home-four/shape-4.webp" alt="" />
      </div>
      <div className="bg-circle_color w-[408px] h-[408px] rounded-full absolute -left-[204px] top-[148px]"></div>
      <div className="bg-circle_color w-[408px] h-[408px] rounded-full absolute -right-[204px] -bottom-5"></div>
      {/* <!-- cta start  --> */}
      <FooterCta />
      {/* <!-- cta end  --> */}
      <section className="bg-ai-soft">
        <div className="w-full h-[80px] md:h-[65px] bg-[#160E24]">
          <div className="h-full mx-auto theme-container">
            <div className="flex flex-wrap items-center justify-between w-full h-full">
              <span className="text-white/50 max-w-80">
                2024 © All rights reserved by
                <b className="text-white mx-1">Spilup</b>
              </span>
              <div className="relative flex justify-center w-full sm:w-fit">
                <a
                  aria-label="go-top"
                  href="#"
                  className="w-[45px] h-[45px] rounded-full border-[3px] border-buisness-light-black flex justify-center items-center bg-purple absolute -top-20 sm:-top-[55px]"
                >
                  <span>
                    <svg
                      width="13"
                      height="18"
                      viewBox="0 0 13 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 6.33333L6.33333 1M6.33333 1L11.6667 6.33333M6.33333 1V17"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </a>
              </div>
              <ul className="flex items-center space-x-3 max-w-80 md:space-x-6">
                <li className="font-medium hover:text-white hover:underline common-transition text-paragraph">
                  <a href="#">Privacy Policy</a>
                </li>
                <li className="font-medium text-paragraph">|</li>
                <li className="font-medium hover:text-white hover:underline common-transition text-paragraph">
                  <a href="#">Terms & Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
