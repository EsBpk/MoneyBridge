
import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI, Chat } from '@google/genai';
import { useLocalization } from '../hooks/useLocalization';

interface RolePlaySimulationProps {
  scenario: string;
  systemInstruction: string;
}

interface Message {
  role: 'user' | 'model';
  text: string;
}

export const RolePlaySimulation: React.FC<RolePlaySimulationProps> = ({ scenario, systemInstruction }) => {
  const { t } = useLocalization();
  const [chat, setChat] = useState<Chat | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initChat = async () => {
      // FIX: Ensure API key is accessed from process.env
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });
      const newChat = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
            systemInstruction,
        }
      });
      setChat(newChat);
      
      // Start the conversation with the model's first message
      const firstResponse = await newChat.sendMessage({ message: "Let's begin. What do you say first?" });
      setMessages([{ role: 'model', text: firstResponse.text }]);
      setIsLoading(false);
    };

    initChat();
  }, [systemInstruction]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim() || !chat || isLoading) return;

    const userMessage: Message = { role: 'user', text: userInput };
    setMessages(prev => [...prev, userMessage]);
    setUserInput('');
    setIsLoading(true);

    try {
      const response = await chat.sendMessage({ message: userInput });
      const modelMessage: Message = { role: 'model', text: response.text };
      setMessages(prev => [...prev, modelMessage]);
    } catch (error) {
      console.error("Role-play chat failed:", error);
      const errorMessage: Message = { role: 'model', text: t('qa_error') };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-brand-cyan-light dark:bg-gray-700/50 p-4 sm:p-6 rounded-lg mt-4">
      <h4 className="text-lg font-bold text-brand-dark dark:text-white">{t('role_play_title')}</h4>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{scenario}</p>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-inner h-80 flex flex-col p-4">
        <div className="flex-grow overflow-y-auto space-y-4 pr-2">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] sm:max-w-md px-4 py-2 rounded-xl ${msg.role === 'user' ? 'bg-brand-cyan text-white' : 'bg-gray-200 dark:bg-gray-700 text-brand-dark dark:text-gray-200'}`}>
                  <p className="text-sm">{msg.text}</p>
                </div>
              </div>
            ))}
            {isLoading && messages.length > 0 && (
                <div className="flex justify-start">
                    <div className="max-w-[85%] sm:max-w-md px-4 py-2 rounded-xl bg-gray-200 dark:bg-gray-700 text-brand-dark dark:text-gray-200">
                        <p className="text-sm animate-pulse">...</p>
                    </div>
                </div>
            )}
            <div ref={messagesEndRef} />
        </div>
        <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder={t('role_play_placeholder')}
            className="flex-grow p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            disabled={isLoading || !chat}
          />
          <button
            type="submit"
            className="bg-accent-yellow text-brand-dark font-bold py-2 px-4 rounded-lg hover:bg-accent-yellow-dark transition-colors disabled:bg-gray-400"
            disabled={isLoading || !chat || !userInput.trim()}
          >
            {t('role_play_send')}
          </button>
        </form>
      </div>
    </div>
  );
};
