'use client'
import React from 'react';
import { Code } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { SelectInput } from '@/app/components/ui/Select'

export const Header = () => {
  const { t, i18n } = useTranslation()
  const options = [
    {
      label: `${t('navbar.select.en')}`,
      value: 'en'
    },
    {
      label: `${t('navbar.select.es')}`,
      value: 'es'
    },
  ]

  const changeLangue = (val:string) => {
    i18n.changeLanguage(val)
  }

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
            <SelectInput placeholder={'English'} options={options} onValueChange={changeLangue}/>
          </ul>
        </nav>
      </div>
    </header>
  );
};