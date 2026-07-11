import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({

    apiKey: process.env.GEMINI_API_KEY,
});
console.log(process.env.GEMINI_API_KEY);

export async function improveResponse(message, reply) {
    try {
  const interaction = await ai.interactions.create({
    model: "gemini-3.5-flash",
    input: `
    Taak:
    Je bent een vriendelijke klantenservice chatbot.
Herschrijf in het Nederlands het onderstaande antwoord zodat het professioneel,
duidelijk en vriendelijk klinkt.


Regels:
- Verander de inhoud niet.
- Voeg geen nieuwe informatie toe.
- Houd het antwoord kort en vriendelijk.
- Gebruik alleen de aangeleverde informatie.
- Verzin geen openingstijden, prijzen of beleid.


vragen van gebruikers: 
${message}

EN

Antwoord uit kennisbank:
    ${reply}`

  });
  console.log(interaction); /*. {
  output_text: "..."
}

of iets anders.  */
  return interaction.output_text;

    } catch (error) {
    console.error("Gemini error:", error);
    return reply;
  }
}

