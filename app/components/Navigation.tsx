'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useTranslations } from '../hooks/useTranslations';
import LanguageSwitch from './LanguageSwitch';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop;
      const navHeight = 80; // altura aproximada de la barra de navegación
      window.scrollTo({
        top: offsetTop - navHeight,
        behavior: 'smooth'
      });
      // Actualizar la URL sin recargar la página
      window.history.pushState({}, '', href);
    }
    setIsMenuOpen(false);
  };

  if (!mounted) return null;

  const navigationItems = [
    ['home', '#hero'],
    ['about', '#about'],
    ['experience', '#experience'],
    ['skills', '#skills'],
    ['projects', '#projects'],
    ['contact', '#contact'],
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 backdrop-blur-sm ${
        isScrolled 
          ? 'bg-white/80 dark:bg-gray-900/80 shadow-lg py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link 
            href="/" 
            className={`font-bold text-xl transition-colors duration-200 ${
              isScrolled 
                ? 'text-gray-900 dark:text-white' 
                : 'text-white'
            }`}
          >
            JV
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navigationItems.map(([key, href]) => (
                <a
                  key={key}
                  href={href}
                  onClick={(e) => scrollToSection(e, href)}
                  className={`hover:text-blue-500 transition-colors duration-200 relative group ${
                    isScrolled 
                      ? 'text-gray-700 dark:text-gray-300' 
                      : 'text-white'
                  }`}
                >
                  {t.nav[key]}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-200 group-hover:w-full"></span>
                </a>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <LanguageSwitch />
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                  isScrolled 
                    ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700' 
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center space-x-4">
            <LanguageSwitch />
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className={`p-2 rounded-lg transition-all duration-300 ${
                isScrolled 
                  ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white' 
                  : 'bg-white/10 text-white'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg transition-colors duration-200 ${
                isScrolled 
                  ? 'text-gray-900 dark:text-white' 
                  : 'text-white'
              }`}
              aria-label="Toggle menu"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-lg py-4 transition-all duration-300">
            {navigationItems.map(([key, href]) => (
              <a
                key={key}
                href={href}
                onClick={(e) => scrollToSection(e, href)}
                className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              >
                {t.nav[key]}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
} 