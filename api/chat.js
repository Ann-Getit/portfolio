import fs from 'fs'; //filestystem
import path from 'path';
import { improveResponse } from "./gemini.js";

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ reply: 'Method not allowed' });// alleen voor lezen. als geen POST is not allowed
  }

/*message word gestuurd naar /api. api zoekt in qa.json (req)*/
  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ reply: 'Geen bericht ontvangen' });
  }

  const qaPath = path.join(process.cwd(), 'qa.json');
  const qa = JSON.parse(fs.readFileSync(qaPath, 'utf-8'));

  const input = message.toLowerCase().trim();

  /* res begint hier vanuit de qa.default */
  let reply = qa.default;

  for (const intent of qa.intents) {
    if (intent.patterns.some(p => p.toLowerCase() === input)) {
      reply = intent.response;
      break;
    }
  }

  try {
  /*hier word reply van qa.jeson gestuurd naar gemini */
 const geminiResponse = await improveResponse(message, reply);
 console.log("Gemini:", geminiResponse);

  res.status(200).json({ geminiResponse }); /*hier word gemini reply door gestuurd naar react voor display*/
  
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Er is een fout opgetreden.",
      message: error.message,
    });
  }

}








/*

✅ API-key in .env 
✅ @google/generative-ai installeren
✅ Eén vraag naar Gemini sturen
✅ Antwoord terugsturen naar React

*/






/* 
Optie 3 – Hybride (dit zou ik later doen)
Gebruiker
      ↓
chat.js

Match?
      ↓
Ja ─────────────► gebruik qa.json antwoord
│                     ↓
│                  Gemini herschrijft
│
Nee
│
▼
Gemini krijgt:
- vraag
- volledige kennisbank
│
▼
Gemini probeert alsnog antwoord te vinden

*/