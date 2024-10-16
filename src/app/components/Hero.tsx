"use client"
import React, { useState, useEffect } from 'react';
import { Code, Smartphone, Globe } from 'lucide-react';

export const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const features = [
    { icon: Code, text: "Custom Web Development" },
    { icon: Smartphone, text: "Mobile App Solutions" },
    { icon: Globe, text: "Global Digital Presence" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gradient-to-br from-purple-900 via-purple-700 to-purple-500 text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox=%220 0 80 80%22 width=%2280%22 height=%2280%22%3E%3Cpath fill=%22%23fff%22 fill-opacity=%22.05%22 d=%22M14 16H9v-2h5V9.87a4 4 0 1 1 2 0V14h5v2h-5v15.95A10 10 0 0 0 23.66 27l-3.46-2 8.2-2.2-2.9 5a12 12 0 0 1-21 0l-2.89-5 8.2 2.2-3.47 2A10 10 0 0 0 14 31.95V16zm40 40h-5v-2h5v-4.13a4 4 0 1 1 2 0V54h5v2h-5v15.95A10 10 0 0 0 63.66 67l-3.47-2 8.2-2.2-2.88 5a12 12 0 0 1-21.02 0l-2.88-5 8.2 2.2-3.47 2A10 10 0 0 0 54 71.95V56zm-39 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm40-40a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM15 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm40 40a2 2 0 1 0 0-4 2 2 0 0 0 0 4z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E')] opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Innovative Solutions for Your{' '}
              <span className="text-purple-200">Digital Needs</span>
            </h1>
            <p className="text-xl mb-8 text-purple-100">
              We transform ideas into powerful web and mobile applications
            </p>
            <a
              href="#contact"
              className="bg-white text-purple-700 py-3 px-8 rounded-full font-semibold hover:bg-purple-100 transition duration-300 inline-block shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Started
            </a>
          </div>
          <div className="md:w-1/2">
            <div className="bg-purple-800 bg-opacity-50 rounded-lg p-8 shadow-lg backdrop-blur-sm">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-center mb-6 transition-all duration-500 ${
                    index === activeIndex ? 'opacity-100 transform translate-x-0' : 'opacity-40 transform -translate-x-4'
                  }`}
                >
                  <feature.icon className="w-10 h-10 mr-4 text-purple-300" />
                  <span className="text-lg">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};