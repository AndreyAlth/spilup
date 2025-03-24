'use client';
import React, { useEffect, useRef } from 'react';
import GLightbox from "glightbox";
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { useParams } from 'next/navigation';

interface Service {
  id: string;
  title: string;
  subtitle: string;
  img_url: string;
  video_url: string;
  action_btn: string;
}

interface HeroServiceProps {
  services: Service[];
}

export function HeroService({ services }: HeroServiceProps) {
  const { service_id } = useParams() as { service_id: string };
  const service = services?.find((service) => service.id === service_id);
  const imageRef = useRef<HTMLDivElement>(null);
  const perspectiveValue = 20; // Initial perspective value
  const { t } = useTranslation("services");

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        const top = window.scrollY || document.documentElement.scrollTop;
        if (imageRef.current) {
          if (top > 500) {
            imageRef.current.style.transform = 'none';
          } else {
            const calcValue = perspectiveValue + top / 2;
            imageRef.current.style.transform = `perspective(${calcValue}px) rotateX(1deg)`;
          }
        }
      };

      document.addEventListener('scroll', handleScroll);

      // Clean up the event listener on component unmount
      return () => {
        document.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  useEffect(() => {
    GLightbox({
      // Optional GLightbox configuration options
      selector: ".video-play-btn",
      touchNavigation: true,
      loop: false,
    });
  }, []);

  return (
    <>
      <section id="banner" className="w-full mb-10">
        <div className="absolute top-0 z-0 left-32">
          <img src="/assets/images/home-four/hero-shape-2.webp" alt="" />
        </div>
        <div className="relative w-full hero-section-wrapper">
          <div className="relative z-10 mx-auto ">
            <div className="flex justify-center mt-[130px] xl:mt-[130px]">
              <div>
                <h1 className="text-24 sm:text-38 md:text-[48px] md:leading-[75px] font-semibold text-white text-center mb-7 md:mb-[10px] w-full max-w-[1300px] mx-auto">
                  <div className="w-full">
                    {t(service?.title)}
                  </div>
                </h1>
                <div className="flex justify-center mb-5 md:mb-[55px] w-full">
                  <p className="text-white sm:text-18 font-medium text-center w-full max-w-[750px]">
                    {t('hero.subtitle')}
                  </p>
                </div>
                <div className='mb-5 md:mb-[55px]'>
                <img
                      src="/assets/images/home-four/hero-thumb.webp"
                      alt=""
                      className="relative z-10"
                    />
                </div>
                <div className="flex justify-center">
                  <div className="flex flex-col items-center gap-10 md:flex-row">
                    <Link href="#services">
                      <div className="home-two-btn-bg py-3.5 group h4_contact_bg border-transparent w-fit mt-2.5">
                        <span className="relative z-10 text-white transition-all duration-300 text-pone group-hover:text-purple font-inter">
                          {t('hero.button')}
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
                    <a
                      href="https://www.youtube-nocookie.com/embed/JdqL89ZZwFw?si=jnriuBsR3pv2EoUa"
                      aria-label="play-video"
                      className="flex items-center space-x-8 video-play-btn"
                    >
                      <span className="flex size-[56px] rounded-full justify-center items-center bg-white bg-opacity-5 relative">
                        <span>
                          <svg
                            width="13"
                            height="14"
                            viewBox="0 0 13 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M11.4611 8.29308L3.49228 12.8467C2.15896 13.6086 0.5 12.6459 0.5 11.1102V2.00295C0.5 0.467309 2.15896 -0.495425 3.49228 0.266469L11.4611 4.82011C12.8048 5.5879 12.8048 7.52529 11.4611 8.29308Z"
                              fill="white"
                            />
                          </svg>
                        </span>
                        <div className="absolute top-0 left-0 w-full h-full rounded-full play-btn-line1"></div>
                        <div className="absolute rounded-full play-btn-line2"></div>
                        <div className="absolute rounded-full play-btn-line3"></div>
                      </span>
                      <span className="font-semibold text-white border-b border-white">
                        How IT Works
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute right-[137px] top-[260px]">
            <img src="/assets/images/home-four/hero-shape-3.webp" alt="" />
          </div>
          <div className="w-full h-[250px] sm:h-[350px] md:h-[595px] overflow-hidden absolute left-0 -bottom-10 sm:-bottom-24 md:-bottom-[130px]">
            <div className="line-shape w-full h-[1000px]"></div>
          </div>
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
        </div>
      </section>
    </>
  );
}
