"use client"
import React from 'react';
import { useTranslation } from 'react-i18next';

export const Contact = () => {
  const { t } = useTranslation()
  return (
    <section id="contact" className="py-20 bg-purple-600 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{t('contact.title')}</h2>
        <div className="max-w-lg mx-auto">
          <form className="space-y-4 mx-auto">
            <div>
              <label htmlFor="name" className="block mb-1">{t('contact.form.name')}</label>
              <input type="text" id="name" className="w-full px-4 py-2 rounded bg-purple-500 text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-300" placeholder="Your Name" />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">{t('contact.form.email')}</label>
              <input type="email" id="email" className="w-full px-4 py-2 rounded bg-purple-500 text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-300" placeholder="your@email.com" />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1">{t('contact.form.message')}</label>
              <textarea id="message" rows={4} className="w-full px-4 py-2 rounded bg-purple-500 text-white placeholder-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-300" placeholder="Your message here..."></textarea>
            </div>
            <button type="submit" className="bg-white text-purple-600 py-2 px-2 rounded-lg font-semibold hover:bg-purple-100 transition duration-300">{t('contact.form.submit')}</button>
          </form>
        </div>
      </div>
    </section>
  );
};