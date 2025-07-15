import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage, Language } from '@/contexts/LanguageContext';

const flags = {
  pt: '🇧🇷',
  en: '🇺🇸',
  es: '🇪🇸'
};

export const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

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
          className="text-sm"
        >
          {flag} {lang.toUpperCase()}
        </Button>
      ))}
    </div>
  );
};