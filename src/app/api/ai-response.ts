// /pages/api/ai-response.ts

import { NextApiRequest, NextApiResponse } from 'next';

const AI_API_KEY = "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";  // Yahaan apni API key daalein

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { message } = req.body;
    
    try {
      const response = await fetch("Gemini AI API ka endpoint", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${AI_API_KEY}`
        },
        body: JSON.stringify({
          message: message,
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      res.status(200).json({ response: data.response });
    } catch (error) {
      console.error("AI API se masla:", error);
      res.status(500).json({ error: "AI response fetch karte waqt masla aaya" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
