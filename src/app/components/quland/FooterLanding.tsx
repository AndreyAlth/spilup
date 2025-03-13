'use client';
import React from 'react';
import FooterCta from './FooterCta';
import Link from 'next/link';
import { message } from '@/app/config/whatapp';
import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();
  const services_list = [
    {
      id: 1,
      title: t('services_list.custom_soft.title'),
      subtitle: t('services_list.custom_soft.subtitle')
    },
    {
      id: 2,
      title: t('services_list.transcripcion.title'),
      subtitle: t('services_list.transcripcion.subtitle')
    },
    {
      id: 3,
      title: t('services_list.voiceprint.title'),
      subtitle: t('services_list.voiceprint.subtitle')
    },
    {
      id: 4,
      title: t('services_list.agents.title'),
      subtitle: t('services_list.agents.subtitle')
    }
  ];
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
        {/* <img src="/assets/images/home-four/shape-4.webp" alt="" /> */}
      </div>
      <div className="bg-circle_color w-[408px] h-[408px] rounded-full absolute -left-[204px] top-[148px]"></div>
      <div className="bg-circle_color w-[408px] h-[408px] rounded-full absolute -right-[204px] -bottom-5"></div>
      {/* <!-- cta start  --> */}
      <FooterCta />
      {/* <!-- cta end  --> */}
      <section className="bg-ai-soft">
        <div className="flex flex-wrap justify-between gap-5 mx-auto mb-20 theme-container">
          <div className="w-fit max-w-[300px]">
            <div>
              <Link href="#">
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
            <p className="max-w-[300px] text-white my-6">
              {t('footer.desc')}
            </p>

            <div className="flex gap-[15px]">
              <a
                href="facebook.com/spilupdev"
                aria-label="facebook"
                target="blank"
                className="w-[46px] h-[46px] rounded-full flex justify-center items-center border border-white/10 overflow-hidden relative before:inline-block before:absolute before:z-0 before:w-full before:h-full h4_social_bg before:scale-x-0 group hover:before:scale-x-100 before:origin-right hover:before:origin-left before:transition-transform before:ease-out before:duration-300"
              >
                <span className="relative z-10">
                  <svg
                    width="11"
                    height="16"
                    viewBox="0 0 11 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.6667 0H8.55556C5.79413 0 3.55556 2.23857 3.55556 5V6.22222H0V9.77778H3.55556V16H7.11111V9.77778H10.6667V6.22222H7.11111V4.55556C7.11111 4.00327 7.55883 3.55556 8.11111 3.55556H10.6667V0Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </a>
              <a
                href="https://www.instagram.com/spilup_dev/"
                aria-label="instagram"
                target="blank"
                className="w-[46px] h-[46px] rounded-full flex justify-center items-center border border-white/10 overflow-hidden relative before:inline-block before:absolute before:z-0 before:w-full before:h-full h4_social_bg before:scale-x-0 group hover:before:scale-x-100 before:origin-right hover:before:origin-left before:transition-transform before:ease-out before:duration-300"
              >
                <span className="relative z-10">
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5 0C2.23858 0 0 2.23858 0 5V11.33C0 14.0914 2.23858 16.33 5 16.33H11.33C14.0914 16.33 16.33 14.0914 16.33 11.33V5C16.33 2.23858 14.0914 0 11.33 0H5ZM13.0645 4.08222C13.5155 4.08222 13.881 3.71666 13.881 3.26572C13.881 2.81478 13.5155 2.44922 13.0645 2.44922C12.6136 2.44922 12.248 2.81478 12.248 3.26572C12.248 3.71666 12.6136 4.08222 13.0645 4.08222ZM12.247 8.16551C12.247 10.4202 10.4192 12.248 8.16453 12.248C5.90983 12.248 4.08203 10.4202 4.08203 8.16551C4.08203 5.91081 5.90983 4.08301 8.16453 4.08301C10.4192 4.08301 12.247 5.91081 12.247 8.16551ZM8.16532 10.6138C9.51814 10.6138 10.6148 9.51717 10.6148 8.16434C10.6148 6.81152 9.51814 5.71484 8.16532 5.71484C6.8125 5.71484 5.71582 6.81152 5.71582 8.16434C5.71582 9.51717 6.8125 10.6138 8.16532 10.6138Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
          <div className="w-fit max-w-[300px]">
            <div className="flex flex-col items-center">
              <div>
                <h1 className="font-semibold text-white text-18">Services</h1>
                <ul className="mt-3.5">
                  {services_list.map(service => {
                    return (
                      <li key={service.id} className="">
                        <Link href="#services">
                          <div className="relative flex items-center gap-2 overflow-hidden font-medium transition-all duration-300 group text-white/50 hover:text-white hover:underline">
                            <svg
                              className="absolute transition-all duration-300 -left-2 group-hover:left-0"
                              width="6"
                              height="12"
                              viewBox="0 0 6 12"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1 1L5 6L1 11"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <span className="transition-all duration-300 group-hover:translate-x-4">
                              {service.title}
                            </span>
                          </div>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>

          <div className="w-fit max-w-[300px]">
            <div className="max-w-[223px]">
              <h1 className="font-semibold text-white text-18">Contact</h1>
              <div className="flex gap-2 items-center relative group font-medium text-white/50 hover:text-white hover:underline transition-all duration-300 mt-3.5">
                <span className="transition-all duration-300">
                  hi@spilup.com
                </span>
              </div>
              <div className="flex gap-2 items-center relative group font-medium text-white/50 hover:text-white hover:underline transition-all duration-300 mt-3.5">
                <span className="transition-all duration-300">
                  <Link href="">+52 999 358 4115</Link>
                </span>
              </div>
            </div>
          </div>
          <div className="w-fit max-w-[300px]">
            <Link href={message.contact}>
              <div className="home-two-btn-bg py-3.5 group h4_contact_bg border-transparent w-fit">
                <span className="relative z-10 text-base font-semibold text-white transition-all duration-300 group-hover:text-purple font-inter">
                  Contact US
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
