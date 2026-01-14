// Author: Stella Duke
// OS support: Web Browser (Chrome, Safari, Firefox)
// Description: Communicates with Google GenAI to provide specialized engineering and observability insights.

import { GoogleGenAI } from "@google/genai";

export const getTechInsight = async (query: string): Promise<string | undefined> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are the core intelligence of Stella Duke, a high-performance observability and engineering suite.
      Provide a concise, expert response to: "${query}".
      Focus on zero-latency, cloud-native scalability, and modern engineering best practices.
      Maintain a professional, authoritative, and helpful tone. Keep it under 100 words.`,
      config: {
        temperature: 0.6,
        topK: 40,
        topP: 0.9,
      }
    });

    return response.text;
  } catch (error) {
    console.error("Stella AI Error:", error);
    return undefined;
  }
};

// --- End of services/geminiService.ts ---