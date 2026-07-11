import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({

    apiKey: process.env.GEMINI_API_KEY,
});



export async function answerFromKnowledge (message, qa) {
try {
  const interaction = await ai.interactions.create({
    model: "gemini-3.5-flash",
    input: `

    Regels:
- Verander de inhoud niet.
- Voeg geen nieuwe informatie toe.
- Houd het antwoord kort en vriendelijk.
- Gebruik alleen de aangeleverde informatie.
- Verzin geen openingstijden, prijzen of beleid.
- en graag zonder ** beantwoorden.

    Taak:
    Beantwoord de vraag van de gebruiker
    met behulp van deze kennisbank.
    

    Vraag van de gebruiker:
    ${message}

    Kennisbank:
    ${JSON.stringify(qa)}
`});
return interaction.output_text;

 } catch (error) {
    console.error("Gemini knowledge error:", error);
    return "Ik kon helaas geen antwoord vinden.";
  }
}




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
- - en graag zonder ** beantwoorden.


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



