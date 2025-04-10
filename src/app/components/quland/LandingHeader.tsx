import React from "react";
// import { demoLinkData } from "./data";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { message } from 'config/whatapp'

export function LandingHeader() {
  const { i18n, t } = useTranslation()

  const changeLen = (len:string) => {
    i18n.changeLanguage(len)
  }

  return (
    <header>
      <div className="header-wrapper w-full fixed left-0 top-0 z-20 bg-[#0A0118] xl:block hidden">
        <div className="relative z-20 mx-auto theme-container">
          <div className="w-full h-[95px] flex justify-between items-center">
            <div className="flex space-x-[100px] items-center">
              <div>
                <Link href="/">
                  <div className="flex flex-row">
                    <img
                      src="/assets/icons/logo_color_1.svg"
                      alt="logo"
                      width={45}
                    />
                    <img src="/assets/icons/nombre.svg" alt="" width={100} />
                  </div>
                </Link>
              </div>
            </div>
            <div className="flex space-x-[30px] items-center">
              <div>
                <ul className="flex items-center space-x-10">
                  {/* <li className="group">
                    <a
                      href="#banner"
                      className="text-white font-semibold hover:text-purple home-two-nav-item leading-5 relative before:text-purple before:border-purple transition-all ease-out duration-300 w-fit flex gap-2 items-center"
                    >
                      {t('navbar.services')}
                      <svg
                        className="transition-all duration-300 group-hover:rotate-180"
                        width="10"
                        height="10"
                        viewBox="0 0 19 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 2L9.5 8L17 2"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                    <div className="absolute px-3 z-50 left-0 h-0 group-hover:h-[880px] overflow-hidden overflow-y-scroll no-scrollbar top-[95px] transition-all duration-700 bg-[#0A0118] group-hover:border-b group-hover:border-r group-hover:border-l border-[#231b2f]">
                      <ul className="max-h-fit min-w-[200px] mt-8 transition-all duration-300 overflow-hidden px-[18px] top-20 pb-4 rounded-b-md w-full flex flex-wrap gap-6">
                        {demoLinkData.map((item, index) => (
                          <li
                            key={index}
                            className="relative py-1 flex flex-col items-center bg-[#17092D]"
                          >
                            <div className="relative flex flex-col items-center gap-5 pb-3 overflow-hidden font-medium leading-5 group/item hover:text-purple w-fit text-paragraph font-inter">
                              <div className="absolute flex flex-col items-center w-full h-full gap-5 transition-all duration-300 opacity-0 pt-14 bg-black/80 group-hover/item:opacity-100">
                                <Link href={item.landingLink}>
                                  <div className="home-two-btn-white group/btn px-10 py-1.5 before:bg-purple after:bg-purple border-purple hover:border-white">
                                    <span className="relative z-10 py-1 text-sm font-semibold text-white transition-all duration-300 font-inter">
                                      Single Page
                                    </span>
                                  </div>
                                </Link>
                                <Link href={item.demoLink}>
                                  <div className="home-two-btn-white-rev group/btn px-10 py-1.5 before:bg-purple after:bg-purple border-white hover:border-purple">
                                    <span className="text-sm text-white transition-all duration-300 font-semibold font-inter relative z-10 py-0.5">
                                      Multi page
                                    </span>
                                  </div>
                                </Link>
                              </div>
                              <img
                                src={item.demoThumb}
                                alt=""
                                className="w-[234px] transition-all duration-300"
                              />
                              <span className="relative font-medium leading-5 text-white home-two-nav-item group-hover/item:before:w-full group-hover/item:text-white before:border-white w-fit font-inter">
                                <span className="w-fit">{item.demoTitle}</span>
                              </span>
                            </div>
                          </li>
                        ))}
                        <li className="relative py-1 flex flex-col items-center bg-[#17092D]">
                          <a
                            href=""
                            className="relative flex flex-col items-center gap-5 pb-3 overflow-hidden font-medium leading-5 group/item hover:text-purple w-fit text-paragraph font-inter"
                            aria-disabled="true"
                          >
                            <img
                              src="./assets/images/demo-8.png"
                              alt=""
                              className="w-[240px] group-hover/item:scale-110 transition-all duration-300 blur-sm"
                            />
                            <span className="relative font-medium leading-5 text-white home-two-nav-item group-hover/item:before:w-full group-hover/item:text-white before:border-white w-fit font-inter">
                              <span className="w-fit">Coming Soon</span>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li> */}
                  <li>
                    <a
                      className="text-white font-semibold hover:text-purple home-two-nav-item leading-5 relative before:text-purple before:border-purple transition-all ease-out duration-300 w-fit"
                      href="#services"
                    >
                      {t('navbar.services')}
                    </a>
                  </li>
                  {/* <li>
                    <a
                      className="text-white font-semibold hover:text-purple home-two-nav-item leading-5 relative before:text-purple before:border-purple transition-all ease-out duration-300 w-fit"
                      href="#faq"
                    >
                      Faq
                    </a>
                  </li> */}
                  <li className="relative group">
                    <a
                      className="text-white font-semibold hover:text-purple home-two-nav-item leading-5 relative before:text-purple before:border-purple transition-all ease-out duration-300 w-fit flex gap-2 items-center"
                      href="#"
                    >
                      {t('navbar.lenguage')}
                      <svg
                        className="transition-all duration-300 group-hover:rotate-180"
                        width="10"
                        height="10"
                        viewBox="0 0 19 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 2L9.5 8L17 2"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                    <div className="absolute px-2 -left-7 h-0 group-hover:h-[480px] overflow-hidden top-5 transition-all duration-700 ">
                      <ul className="max-h-fit min-w-[200px] mt-8 transition-all duration-300 overflow-hidden px-5 top-20 pb-4 rounded-b-md bg-[#0A0118] group-hover:border-b group-hover:border-r group-hover:border-l border-[#231b2f]">
                        <li key={1} className="relative py-1">
                          <button className="relative font-medium leading-5 home-two-nav-item hover:text-purple w-fit text-paragraph font-inter" onClick={() => changeLen('en')}>
                            En
                          </button>
                        </li>
                        <li key={1} className="relative py-1">
                          <button className="relative font-medium leading-5 home-two-nav-item hover:text-purple w-fit text-paragraph font-inter" onClick={() => changeLen('es')}>
                            Es
                          </button>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
              <Link href={message.contact}>
                <div className="home-two-btn-bg py-2.5 group bg-purple border-purple">
                  <span className="relative z-10 text-base font-semibold text-white transition-all duration-300 group-hover:text-purple font-inter">
                    {t('navbar.contact')}
                  </span>
                  <svg
                    className="relative z-10"
                    width="7"
                    height="12"
                    viewBox="0 0 7 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="transition-all duration-300 group-hover:stroke-purple"
                      d="M1.10254 10.5L4.89543 6.70711C5.22877 6.37377 5.39543 6.20711 5.39543 6C5.39543 5.79289 5.22877 5.62623 4.89543 5.29289L1.10254 1.5"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="header-four-border w-full h-[1px]"></div>
      </div>
    </header>
  );
}
