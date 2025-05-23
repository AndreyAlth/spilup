'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { services } from 'config/services';
import Link from 'next/link';

interface CardProps {
  icon?: any;
  id: string;
  title: string;
  subtitle: string;
  children: any;
}

const Card = ({ id, title, subtitle, children }: CardProps) => {
  const { t } = useTranslation('services');
  return (
    <Link href={`/services/${id}`}>
      <div
        data-aos="fade-left"
        className="service-item p-5 md:p-[50px] relative group h-full"
      >
        <div className="service-item-ico w-[80px] h-[80px] rounded-[10px] flex justify-center items-center mb-7">
          {children}
        </div>
        <h1 className="mb-5 font-medium text-white">{t(title)}</h1>
        <p className="text-white opacity-55">{t(subtitle)}</p>
        <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full transition duration-300 ease-in-out opacity-0 circle-shape group-hover:opacity-100">
          <img
            src="/assets/images/home-four/service-circle-shape.webp"
            alt=""
          />
        </div>
      </div>
    </Link>
  );
};

export function Services() {
  const { t } = useTranslation();

  return (
    <section id="services">
      <div className="w-full what-we-do-wrapper pb-16 md:pb-[130px] relative overflow-x-hidden">
        <div className="mx-auto theme-container">
          <div className="w-full">
            <div className="flex justify-center w-full title-area">
              <div className="flex flex-col items-center">
                <div className="mb-5 section-title-top-tag-two">
                  <span>{t('services.title')}</span>
                </div>
                <div className="mb-[70px]">
                  <h2 className="font-semibold text-center text-white text-24 sm:text-48">
                    {t('services.subtitle')}
                  </h2>
                </div>
              </div>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] h-full">
              {services.map(service => (
                <Card
                  key={service.id}
                  id={service.id}
                  title={service.title}
                  subtitle={service.subtitle}
                >
                  {service.icon}
                </Card>
              ))}
            </div>
          </div>
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
  );
}
