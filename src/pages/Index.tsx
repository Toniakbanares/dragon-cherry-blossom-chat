import React from 'react';
import { Button } from '@/components/ui/button';
import { Moon, Sun, ChevronDown, Infinity, Play } from 'lucide-react';
import { LanguageSelector } from '@/components/LanguageSelector';
import { Chat } from '@/components/Chat';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';

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
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Hero Section */}
      <section 
        className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-violet-100 via-blue-50 to-purple-100 dark:from-slate-900 dark:via-purple-900/30 dark:to-blue-900/30 overflow-hidden"
      >
        {/* Infinity Symbol Background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10 dark:opacity-20">
          <Infinity className="w-96 h-96 text-primary animate-pulse" />
        </div>
        
        {/* Floating Infinity Symbols */}
        <div className="absolute top-20 left-10 opacity-20">
          <Infinity className="w-16 h-16 text-purple-500 animate-bounce" style={{animationDelay: '0s'}} />
        </div>
        <div className="absolute top-40 right-20 opacity-30">
          <Infinity className="w-12 h-12 text-blue-500 animate-bounce" style={{animationDelay: '1s'}} />
        </div>
        <div className="absolute bottom-32 left-20 opacity-25">
          <Infinity className="w-20 h-20 text-violet-500 animate-bounce" style={{animationDelay: '2s'}} />
        </div>
        <div className="absolute bottom-20 right-16 opacity-20">
          <Infinity className="w-14 h-14 text-indigo-500 animate-bounce" style={{animationDelay: '0.5s'}} />
        </div>
        {/* Header */}
        <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-20">
          <div className={`backdrop-blur-md rounded-lg p-2 border transition-colors ${
            theme === 'light' 
              ? 'bg-white/80 border-gray-200/50' 
              : 'bg-background/20 border-white/10'
          }`}>
            <LanguageSelector />
          </div>
          <Button
            variant="outline"
            size="icon"
            onClick={toggleTheme}
            className={`backdrop-blur-md transition-all ${
              theme === 'light'
                ? 'bg-white/80 border-gray-200/50 text-gray-800 hover:bg-white/90'
                : 'bg-background/20 border-white/10 text-white hover:bg-white/10'
            }`}
            title={t('toggleTheme')}
          >
            {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </Button>
        </div>

        {/* Hero Content */}
        <div className="text-center z-10 px-4">
          <h1 className={`text-4xl md:text-6xl lg:text-8xl font-bold mb-6 tracking-wide drop-shadow-2xl ${
            theme === 'light' ? 'text-gray-800' : 'text-white'
          }`}>
            {t('welcome')}
          </h1>
          <p className={`text-lg md:text-xl lg:text-2xl mb-12 max-w-3xl mx-auto opacity-90 drop-shadow-lg ${
            theme === 'light' ? 'text-gray-700' : 'text-white'
          }`}>
            {t('subtitle')}
          </p>
          
          
          {/* Video Section */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className={`backdrop-blur-lg rounded-2xl p-8 border transition-colors ${
              theme === 'light' 
                ? 'bg-white/70 border-white/50' 
                : 'bg-black/30 border-white/20'
            }`}>
              <h2 className={`text-2xl md:text-3xl font-bold mb-6 text-center ${
                theme === 'light' ? 'text-gray-800' : 'text-white'
              }`}>
                Veja como funciona
              </h2>
              
              {/* Video Placeholder */}
              <div className={`relative aspect-video rounded-xl overflow-hidden border-2 transition-colors ${
                theme === 'light' 
                  ? 'bg-gray-100 border-gray-300' 
                  : 'bg-gray-800 border-gray-600'
              }`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-4 mx-auto transition-colors ${
                      theme === 'light' 
                        ? 'bg-purple-500 text-white' 
                        : 'bg-purple-600 text-white'
                    }`}>
                      <Play className="w-8 h-8 ml-1" />
                    </div>
                    <p className={`text-lg font-medium ${
                      theme === 'light' ? 'text-gray-600' : 'text-gray-300'
                    }`}>
                      Clique para assistir o vídeo promocional
                    </p>
                  </div>
                </div>
              </div>
              
              <p className={`text-center mt-4 ${
                theme === 'light' ? 'text-gray-600' : 'text-gray-300'
              }`}>
                Descubra as possibilidades infinitas do nosso chat inteligente
              </p>
            </div>
          </div>

          {/* Scroll Down Arrow */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <Button
              variant="ghost"
              size="icon"
              onClick={scrollToChat}
              className={`rounded-full p-3 backdrop-blur-sm transition-colors ${
                theme === 'light' 
                  ? 'text-gray-800 hover:bg-gray-800/10' 
                  : 'text-white hover:bg-white/20'
              }`}
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
