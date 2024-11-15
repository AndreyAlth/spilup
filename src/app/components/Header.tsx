'use client'
import React from 'react';
import { Code } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n/i18Config';
import { SelectInput } from '@/app/components/ui/Select'

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
          <ul className="flex items-center space-x-6">
            <li><a href="#services" className="hover:text-purple-200">{t('navbar.services')}</a></li>
            <li><a href="#portfolio" className="hover:text-purple-200">{t('navbar.portfolio')}</a></li>
            <li><a href="#contact" className="hover:text-purple-200">{t('navbar.contact')}</a></li>
            <SelectInput/>
          </ul>
        </nav>
      </div>
    </header>
  );
};