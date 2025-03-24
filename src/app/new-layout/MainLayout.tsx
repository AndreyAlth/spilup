'use client'
import React from 'react';
import { PageLayout } from './PageLayout';
import { LandingHeader } from '../components/quland/LandingHeader';
import { Footer } from '../components/quland/FooterLanding';

export const MainLayout = ({ children }) => {
  return (
    <div>
      <PageLayout>
        <div className="home---save-dev @types/aosfour relative bg-[#0a0118] w-full overflow-x-hidden">
          <LandingHeader />
          {children}
          <Footer />
        </div>
      </PageLayout>
    </div>
  );
};
