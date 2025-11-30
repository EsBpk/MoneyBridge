
import { GoogleGenAI, GenerateContentResponse, Chat } from "@google/genai";
import { Language } from '../types';

const getAi = () => new GoogleGenAI({ apiKey: process.env.API_KEY! });

/**
 * A general-purpose function to ask a question to the Gemini model.
 */
export const askGemini = async (prompt: string, language: Language): Promise<string> => {
  const ai = getAi();
  const model = 'gemini-2.5-flash';

  const fullPrompt = `You are an AI assistant for MoneyBridge, an app that helps immigrants with financial literacy. The user's language is ${language}.
  User's question: "${prompt}"
  Provide a helpful, clear, and encouraging answer. Format the response using Markdown.`;
  
  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
        model: model,
        contents: fullPrompt,
        config: {
          systemInstruction: 'You are a friendly financial literacy assistant for immigrants. Keep your answers concise and easy to understand.'
        }
    });
    return response.text;
  } catch (error) {
    console.error('Gemini API call failed:', error);
    throw new Error('Failed to get a response from the AI assistant.');
  }
};

/**
 * Gets a hint for a quiz question from the Gemini model.
 */
export const getQuizHint = async (question: string, options: string[], language: Language): Promise<string> => {
    const ai = getAi();
    const model = 'gemini-2.5-flash';
    const prompt = `
    The user is taking a quiz in a financial literacy app. Their language is ${language}.
    Here is the question: "${question}"
    Here are the options: ${options.join(', ')}
    Provide a short, subtle hint to help them figure out the correct answer. DO NOT give the answer away directly. Just guide them.
    `;
    
    try {
        const response: GenerateContentResponse = await ai.models.generateContent({
            model: model,
            contents: prompt,
        });
        return response.text;
    } catch (error) {
        console.error('Gemini API call for hint failed:', error);
        throw new Error('Failed to get a hint.');
    }
};


/**
 * Gets a daily financial fact from the Gemini model.
 */
export const getDailyFinancialFact = async (language: Language): Promise<string> => {
    const ai = getAi();
    const model = 'gemini-2.5-flash';
    const prompt = `
    Provide a single, interesting, and easy-to-understand financial fact or tip.
    The user's language is ${language}. Keep the fact concise and encouraging.
    `;

    try {
        const response: GenerateContentResponse = await ai.models.generateContent({
            model: model,
            contents: prompt,
        });
        return response.text;
    } catch (error) {
        console.error('Gemini API call for fact failed:', error);
        throw new Error('Failed to get daily fact.');
    }
};
