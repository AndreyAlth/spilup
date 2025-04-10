'use client'
import React, { useEffect } from 'react';
import AOS from 'aos';
import { PageLayout } from './PageLayout';
import { LandingHeader } from '../components/quland/LandingHeader';
import { Footer } from '../components/quland/FooterLanding';
import { ToastContainer } from 'react-toastify'

export const MainLayout = ({ children }) => {
  useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);
  return (
    <div>
      <PageLayout>
        <div className="home---save-dev @types/aosfour relative bg-[#0a0118] w-full overflow-x-hidden">
          <LandingHeader />
          {children}
          <Footer />
        </div>
      </PageLayout>
      <ToastContainer/>
    </div>
  );
};
