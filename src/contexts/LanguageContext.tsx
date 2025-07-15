import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'pt' | 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  pt: {
    welcome: 'Bem-vindo',
    subtitle: 'Converse comigo sobre qualquer assunto',
    chat: 'Chat',
    sendMessage: 'Enviar mensagem',
    typePlaceholder: 'Digite sua mensagem...',
    scrollDown: 'Role para baixo',
    online: 'Online',
    toggleTheme: 'Alternar tema'
  },
  en: {
    welcome: 'Welcome',
    subtitle: 'Chat with me about anything',
    chat: 'Chat',
    sendMessage: 'Send message',
    typePlaceholder: 'Type your message...',
    scrollDown: 'Scroll down',
    online: 'Online',
    toggleTheme: 'Toggle theme'
  },
  es: {
    welcome: 'Bienvenido',
    subtitle: 'Chatea conmigo sobre cualquier tema',
    chat: 'Chat',
    sendMessage: 'Enviar mensaje',
    typePlaceholder: 'Escribe tu mensaje...',
    scrollDown: 'Desplázate hacia abajo',
    online: 'En línea',
    toggleTheme: 'Cambiar tema'
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[Language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};