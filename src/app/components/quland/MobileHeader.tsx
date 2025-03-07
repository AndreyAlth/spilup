'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { message } from 'config/whatapp'



export const MobileHeader = () => {
  const [isNavActive, setIsNavActive] = useState(false);
  const [activeSubNav, setActiveSubNav] = useState(null);
  const navRef = useRef(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const { i18n, t } = useTranslation()
  
    const changeLen = (len:string) => {
      i18n.changeLanguage(len)
    }

  const toggleNav = () => {
    setIsNavActive(prev => !prev);
  };

  const toggleSubNav = (index: any) => {
    setActiveSubNav(prev => (prev === index ? null : index));
  };

  const menuData = [
    {
      title: t('navbar.services'), href: '#services'
    },
    // { title: 'FAQ', href: '/about' },
    {
      title: t('navbar.lenguage'),
      subMenu: [
        { title: 'Es', button: true, value: 'es', href: '#' },
        { title: 'En', button: true, value: 'en', href: '#' }
      ]
    }
  ];

  useEffect(() => {
    const handleOverlayClick = () => {
      setIsNavActive(false);
    };

    if (overlayRef.current) {
      overlayRef.current.addEventListener('click', handleOverlayClick);
    }

    return () => {
      if (overlayRef.current) {
        overlayRef.current.removeEventListener('click', handleOverlayClick);
      }
    };
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleHashChange = () => {
        setIsNavActive(false);
      };

      window.addEventListener('hashchange', handleHashChange);

      return () => {
        window.removeEventListener('hashchange', handleHashChange);
      };
    }
  }, []);

  if (typeof window === 'undefined') return null;

  return (
    <header className="relative flex flex-col xl:hidden">
      <div className="h-16 bg-white flex items-center justify-between fixed top-0 left-0 z-50 w-full px-2.5">
        <Link href="/" aria-label="logo">
          <div className="flex flex-row">
            <img src="/assets/icons/logo_color_1.svg" alt="logo" width={45} />
            <img src="/assets/icons/nombre_morado.svg" alt="" width={100} />
          </div>
        </Link>
        <button
          aria-label="mobile-Menu"
          className="w-6 h-6 text-main-black text-48 toggle_nav_menu"
          id="mobile_nav_toggle_menu"
          onClick={toggleNav}
        >
          <svg
            className={`transition-all duration-300 pointer-events-none ${
              isNavActive ? 'hidden' : ''
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32-14.3 32 32z" />
          </svg>
          <svg
            className={`transition-all duration-300 pointer-events-none ${
              isNavActive ? '' : 'hidden'
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
          >
            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
          </svg>
        </button>
      </div>
      <div className="transition-all duration-300">
        <div
          className={`fixed z-40 w-full h-screen transition-all duration-300 delay-150 bg-black/80 ${
            isNavActive ? 'left-0' : '-left-full'
          }`}
          id="mobile-nav-div-overlay"
          ref={overlayRef}
        ></div>
        <div
          className={`fixed z-50 w-full h-screen overflow-y-scroll transition-all duration-300 bg-white top-16 ${
            isNavActive ? 'left-0' : '-left-full'
          }`}
          id="mobile-nav-div"
          ref={navRef}
        >
          <div className="flex flex-col pt-5 pl-5 gap-28">
            <ul className="flex flex-col gap-5 text-base font-medium leading-5 text-paragraph font-inter">
              {menuData.map((menuItem, index) => (
                <li key={index} className="group">
                  {menuItem.subMenu ? (
                    <>
                      <button
                        className="relative flex items-center gap-2 leading-5 home-two-nav-item w-fit m-nav-dropdown"
                        onClick={() => toggleSubNav(index)}
                      >
                        {t(menuItem.title)}
                        <svg
                          className="pointer-events-none"
                          width="10"
                          height="10"
                          viewBox="0 0 19 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2 2L9.5 8L17 2"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </button>
                      <ul
                        className={`overflow-hidden transition-all font-medium h-fit duration-300 pl-5 pt-4 ${
                          activeSubNav === index ? '' : 'mobile-sub-nav'
                        }`}
                      >
                        {menuItem.subMenu.map((subItem, subIndex) => (
                          <li key={subIndex} className="relative py-1">
                            {subItem.button === true ? (
                              <button
                                className="relative home-two-nav-item w-fit"
                                onClick={() =>  changeLen(subItem.value)}
                              >
                                {subItem.title}
                              </button>
                            ) : (
                              <a
                                className="relative home-two-nav-item w-fit"
                                href={subItem.href}
                              >
                                {subItem.title}
                              </a>
                            )}
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <a
                      className="relative home-two-nav-item w-fit"
                      href={menuItem.href}
                    >
                      {menuItem.title}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-5 pl-5 mt-5">
            <Link href={message.contact}>
              <div className="home-two-btn-bg py-2.5 group bg-blue-seo border-blue-seo w-fit">
                <span className="relative z-10 text-base font-semibold text-white transition-all duration-300 group-hover:text-blue-seo font-inter">
                  {t('navbar.contact')}
                </span>
                <svg
                  className="relative z-10"
                  width="7"
                  height="12"
                  viewBox="0 0 7 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="transition-all duration-300 group-hover:stroke-blue-seo"
                    d="M1.10254 10.5L4.89543 6.70711C5.22877 6.37377 5.39543 6.20711 5.39543 6C5.39543 5.79289 5.22877 5.62623 4.89543 5.29289L1.10254 1.5"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
