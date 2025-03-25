import React from 'react';

export const NotFound = ({title, subtitle}: { title: string, subtitle: string}) => {
  return (
    <>
      <section id="banner" className="w-full mb-10">
        <div className="absolute top-0 z-0 left-32">
          <img src="/assets/images/home-four/hero-shape-2.webp" alt="" />
        </div>
        <div className="relative w-full hero-section-wrapper">
          <div className="relative z-10 mx-auto ">
            <div className="flex justify-center mt-[130px] xl:mt-[247px]">
              <div>
                <h1 className="text-24 sm:text-38 md:text-[48px] md:leading-[75px] font-semibold text-white text-center mb-7 md:mb-[10px] w-full max-w-[1300px] mx-auto">
                  <div className="w-full">{title}</div>
                </h1>
                <div className="flex justify-center mb-5 md:mb-[55px] w-full">
                  <p className="text-white sm:text-18 font-medium text-center w-full max-w-[750px]">
                    {subtitle}
                  </p>
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
};
