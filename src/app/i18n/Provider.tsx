'use client';
import React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18Config';

export const Provider = ({ children }: React.PropsWithChildren) => {
  return (
    <I18nextProvider i18n={i18n} defaultNS={'translation'}>
      {children}
    </I18nextProvider>
  );
};
