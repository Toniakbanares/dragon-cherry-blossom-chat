import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Send, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'admin';
  timestamp: Date;
}

export const Chat = () => {
  const { t } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: t('welcome'),
      sender: 'admin',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      const newMessage: Message = {
        id: Date.now().toString(),
        text: inputMessage,
        sender: 'user',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, newMessage]);
      setInputMessage('');

      // Simulate admin response
      setTimeout(() => {
        const adminResponse: Message = {
          id: (Date.now() + 1).toString(),
          text: 'Obrigado pela mensagem! Em breve responderei.',
          sender: 'admin',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, adminResponse]);
      }, 1000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto bg-card/95 backdrop-blur-md border-border/50 shadow-2xl">
      <CardHeader className="bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border/50">
        <CardTitle className="flex items-center gap-2 text-foreground">
          <MessageCircle className="h-6 w-6 text-primary" />
          {t('chat')}
          <div className="ml-auto flex items-center gap-2">
            <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-green-500 font-medium">{t('online')}</span>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <ScrollArea className="h-96 w-full rounded-lg border border-border/50 p-4 mb-4 bg-background/50" ref={scrollAreaRef}>
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl shadow-sm ${
                    message.sender === 'user'
                      ? 'bg-primary text-primary-foreground rounded-br-md'
                      : 'bg-secondary text-secondary-foreground rounded-bl-md'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                  <p className="text-xs opacity-70 mt-2 text-right">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
        <div className="flex gap-3">
          <Input
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={t('typePlaceholder')}
            className="flex-1 bg-background/80 border-border/50 focus:border-primary/50 rounded-lg"
          />
          <Button 
            onClick={handleSendMessage} 
            size="sm"
            className="px-6 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg shadow-md"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};