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
        className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-yellow-100 via-amber-50 to-orange-100 dark:from-yellow-900/20 dark:via-amber-900/30 dark:to-orange-900/20 overflow-hidden"
        style={{
          backgroundImage: `
            radial-gradient(circle at center, rgba(255, 215, 0, 0.1) 0%, transparent 50%),
            linear-gradient(45deg, rgba(255, 215, 0, 0.05) 0%, transparent 25%, rgba(255, 215, 0, 0.05) 50%, transparent 75%, rgba(255, 215, 0, 0.05) 100%)
          `
        }}
      >
        {/* Golden Rays Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-pulse"
                style={{
                  height: '200vh',
                  transformOrigin: 'center bottom',
                  transform: `rotate(${i * 30}deg)`,
                  animationDelay: `${i * 0.1}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Central Golden Infinity Symbol */}
        <div className="absolute inset-0 flex items-center justify-center opacity-30">
          <div className="relative">
            <Infinity className="w-96 h-96 text-yellow-500 animate-pulse drop-shadow-2xl" />
            <div className="absolute inset-0 animate-spin-slow">
              <Infinity className="w-96 h-96 text-amber-400 opacity-50" />
            </div>
          </div>
        </div>
        
        {/* Floating Golden Particles */}
        <div className="absolute top-20 left-10 opacity-40">
          <div className="w-4 h-4 bg-yellow-400 rounded-full animate-bounce blur-sm" style={{animationDelay: '0s'}} />
        </div>
        <div className="absolute top-40 right-20 opacity-50">
          <div className="w-3 h-3 bg-amber-400 rounded-full animate-bounce blur-sm" style={{animationDelay: '1s'}} />
        </div>
        <div className="absolute bottom-32 left-20 opacity-45">
          <div className="w-5 h-5 bg-orange-400 rounded-full animate-bounce blur-sm" style={{animationDelay: '2s'}} />
        </div>
        <div className="absolute bottom-20 right-16 opacity-35">
          <div className="w-2 h-2 bg-yellow-500 rounded-full animate-bounce blur-sm" style={{animationDelay: '0.5s'}} />
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
              
              {/* Video Promocional com Infinito Dourado */}
              <div className="relative aspect-video rounded-xl overflow-hidden border-2 border-yellow-300/50 shadow-2xl bg-gradient-to-br from-yellow-900 via-amber-800 to-orange-800">
                {/* Fundo com raios dourados */}
                <div className="absolute inset-0">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 bg-gradient-to-r from-transparent via-yellow-300 to-transparent animate-pulse opacity-30"
                        style={{
                          height: '150%',
                          transformOrigin: 'center bottom',
                          transform: `rotate(${i * 45}deg)`,
                          animationDelay: `${i * 0.2}s`
                        }}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Símbolo do infinito central */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <Infinity className="w-32 h-32 text-yellow-300 animate-pulse drop-shadow-2xl" />
                    <div className="absolute inset-0 animate-spin-slow">
                      <Infinity className="w-32 h-32 text-amber-200 opacity-60" />
                    </div>
                  </div>
                </div>
                
                {/* Botão de play */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button 
                    className="w-20 h-20 rounded-full bg-yellow-400/90 text-yellow-900 flex items-center justify-center hover:bg-yellow-300 transition-all hover:scale-110 shadow-lg"
                    onClick={() => alert('Vídeo promocional com música binaural - Em breve!')}
                  >
                    <Play className="w-8 h-8 ml-1" />
                  </button>
                </div>
                
                {/* Partículas flutuantes */}
                <div className="absolute top-4 left-4 w-2 h-2 bg-yellow-300 rounded-full animate-ping"></div>
                <div className="absolute top-8 right-8 w-1 h-1 bg-amber-300 rounded-full animate-pulse"></div>
                <div className="absolute bottom-6 left-8 w-3 h-3 bg-orange-300 rounded-full animate-bounce"></div>
                <div className="absolute bottom-4 right-4 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
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
