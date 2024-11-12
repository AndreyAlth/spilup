'use client'
import React from 'react';
import i18n from 'i18next';
import { useTranslation, initReactI18next } from 'react-i18next';
import { i18Config } from './i18Config'

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init(i18Config);

export const Provider = () => {
  const { t } = useTranslation();
  return <h2>{t('hero.title')}</h2>;;
};
