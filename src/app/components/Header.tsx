'use client'
import React from 'react';
import { Code } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Header = () => {
  const { t } = useTranslation()
  return (
    <header className="bg-purple-600 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Code size={24} />
          <span className="text-xl font-bold">Spilup</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#services" className="hover:text-purple-200">Services</a></li>
            <li><a href="#portfolio" className="hover:text-purple-200">Portfolio</a></li>
            <li><a href="#contact" className="hover:text-purple-200">Contact</a></li>
            <li><a href="#contact" className="hover:text-purple-200">{t('hero.title')}</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};