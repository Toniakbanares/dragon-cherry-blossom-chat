import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage, Language } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';

const flags = {
  pt: '🇧🇷',
  en: '🇺🇸',
  es: '🇪🇸'
};

export const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();
  const { theme } = useTheme();

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <div className="flex gap-2">
      {Object.entries(flags).map(([lang, flag]) => (
        <Button
          key={lang}
          variant={language === lang ? "default" : "outline"}
          size="sm"
          onClick={() => handleLanguageChange(lang as Language)}
          className={`text-sm font-medium transition-all ${
            language === lang 
              ? "bg-primary text-primary-foreground shadow-lg" 
              : theme === 'light'
                ? "bg-white/80 text-gray-800 border-gray-300 hover:bg-white hover:border-gray-400"
                : "bg-white/10 text-white border-white/20 hover:bg-white/20 hover:border-white/40"
          }`}
        >
          {flag} {lang.toUpperCase()}
        </Button>
      ))}
    </div>
  );
};