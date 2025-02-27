'use client'
import React from 'react';
import { Globe, Smartphone, Code } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ServiceCardProps {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <Icon className="text-purple-600 w-12 h-12 mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export const Services = () => {
  const { t } = useTranslation()
  const services = [
    {
      icon: Globe,
      title: `${t('services.web.title')}`,
      description: `${t('service.web.content')}`
    },
    {
      icon: Smartphone,
      title: `${t('services.ai.title')}`,
      description: `${t('services.ai.content')}`
    },
    {
      icon: Code,
      title: `${t('services.odoo.title')}`,
      description: `${t('services.odoo.content')}`
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-purple-800"></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};