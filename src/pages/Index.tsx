import React from 'react';
import { Button } from '@/components/ui/button';
import { Moon, Sun, ChevronDown } from 'lucide-react';
import { LanguageSelector } from '@/components/LanguageSelector';
import { Chat } from '@/components/Chat';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import dragonBackground from '@/assets/dragon-background.jpg';

const Index = () => {
  const { t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const scrollToChat = () => {
    const chatSection = document.getElementById('chat-section');
    if (chatSection) {
      chatSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="min-h-screen flex items-center justify-center relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${dragonBackground})`
        }}
      >
        {/* Header */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
          <LanguageSelector />
          <Button
            variant="outline"
            size="icon"
            onClick={toggleTheme}
            className="bg-background/80 backdrop-blur-sm"
          >
            {theme === 'light' ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </Button>
        </div>

        {/* Hero Content */}
        <div className="text-center text-white z-10">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-wide">
            {t('welcome')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
            {t('subtitle')}
          </p>
          
          {/* Scroll Down Arrow */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <Button
              variant="ghost"
              size="icon"
              onClick={scrollToChat}
              className="text-white hover:bg-white/20 rounded-full"
            >
              <ChevronDown className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* Chat Section */}
      <section id="chat-section" className="min-h-screen flex items-center justify-center bg-background p-8">
        <Chat />
      </section>
    </div>
  );
};

export default Index;
