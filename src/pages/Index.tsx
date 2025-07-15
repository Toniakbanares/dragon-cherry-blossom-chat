import React from 'react';
import { Button } from '@/components/ui/button';
import { Moon, Sun, ChevronDown } from 'lucide-react';
import { LanguageSelector } from '@/components/LanguageSelector';
import { Chat } from '@/components/Chat';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import dragonBackground from '@/assets/dragon-cherry-background.jpg';

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
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section 
        className="min-h-screen flex items-center justify-center relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${dragonBackground})`
        }}
      >
        {/* Header */}
        <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-20">
          <div className="bg-background/20 backdrop-blur-md rounded-lg p-2 border border-white/10">
            <LanguageSelector />
          </div>
          <Button
            variant="outline"
            size="icon"
            onClick={toggleTheme}
            className="bg-background/20 backdrop-blur-md border-white/10 text-white hover:bg-white/10"
            title={t('toggleTheme')}
          >
            {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </Button>
        </div>

        {/* Hero Content */}
        <div className="text-center text-white z-10 px-4">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 tracking-wide drop-shadow-2xl">
            {t('welcome')}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-12 max-w-3xl mx-auto opacity-90 drop-shadow-lg">
            {t('subtitle')}
          </p>
          
          {/* Scroll Down Arrow */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <Button
              variant="ghost"
              size="icon"
              onClick={scrollToChat}
              className="text-white hover:bg-white/20 rounded-full p-3 backdrop-blur-sm"
              title={t('scrollDown')}
            >
              <ChevronDown className="h-8 w-8" />
            </Button>
          </div>
        </div>
      </section>

      {/* Chat Section */}
      <section id="chat-section" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/20 p-8">
        <Chat />
      </section>
    </div>
  );
};

export default Index;
