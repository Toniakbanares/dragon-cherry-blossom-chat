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
    toggleTheme: 'Alternar tema',
    infinitePoetry: 'O infinito não é apenas um conceito,<br/>é a essência de todas as possibilidades.',
    infiniteDescription: 'Descubra as possibilidades infinitas do nosso chat inteligente',
    adminResponse: 'Obrigado pela mensagem! Em breve responderei.'
  },
  en: {
    welcome: 'Welcome',
    subtitle: 'Chat with me about anything',
    chat: 'Chat',
    sendMessage: 'Send message',
    typePlaceholder: 'Type your message...',
    scrollDown: 'Scroll down',
    online: 'Online',
    toggleTheme: 'Toggle theme',
    infinitePoetry: 'Infinity is not just a concept,<br/>it is the essence of all possibilities.',
    infiniteDescription: 'Discover the infinite possibilities of our intelligent chat',
    adminResponse: 'Thank you for your message! I will respond soon.'
  },
  es: {
    welcome: 'Bienvenido',
    subtitle: 'Chatea conmigo sobre cualquier tema',
    chat: 'Chat',
    sendMessage: 'Enviar mensaje',
    typePlaceholder: 'Escribe tu mensaje...',
    scrollDown: 'Desplázate hacia abajo',
    online: 'En línea',
    toggleTheme: 'Cambiar tema',
    infinitePoetry: 'El infinito no es solo un concepto,<br/>es la esencia de todas las posibilidades.',
    infiniteDescription: 'Descubre las posibilidades infinitas de nuestro chat inteligente',
    adminResponse: '¡Gracias por tu mensaje! Responderé pronto.'
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