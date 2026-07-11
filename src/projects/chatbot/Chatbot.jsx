import "./Chatbot.css"
import { useState, useRef, useEffect } from "react";


const Chatbot = () => {


const [isLoading, setIsLoading] = useState(false);
const [messages, setMessages] = useState([]);
const [input, setInput] = useState("");
const messagesRef = useRef(null);
const [isBotTyping, setIsBotTyping] = useState(false); // voor "Loading..." tekst

const suggestedPrompts = [
  "Wat zijn de openingstijden?",
  "kan ik een proefles of proefweek volgen?",
  "ik ben mijn ledenpas kwijt",
  "kan ik mijn abonnement pauzeren?",
  "hebben jullie personal trainer?"
];

useEffect(() => {
  messagesRef.current?.scrollTo({
    top: messagesRef.current.scrollHeight,
    behavior: "smooth"
  });
}, [messages]);

 
// --- CHAT ---
const sendMessage = async (msg) => {
  if (!msg || isLoading) return;

    setInput("");

  setMessages(prev => [
  ...prev,
  { sender: "user", text: msg }
]);

  setIsLoading(true);
  setIsBotTyping(true);    // tekst "Loading..." tonen

  try {
   const res = await fetch('/api/chat', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ message: msg }) 
});


const data = await res.json();


/* gehele object van js/res
data
│
└── geminiResponse
        │
        └── "Onze openingstijden zijn van maandag tot vrijdag..."

*/
setMessages(prev => [
  ...prev,
  {
    sender: "bot",
    text: data.geminiResponse || "Geen antwoord ontvangen."
  }
]);

  } catch (err) {
setMessages(prev => [
  ...prev,
  {
    sender: "bot",
    text: "Sorry, er ging iets mis."
  }
]);


  } finally {
    setIsLoading(false);
    setIsBotTyping(false);    // Loading tekst verwijderen
  }
};

const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(input);
  };

    return(
        <>
        <div className="wrapperforchatbot">
           
          <div className="chat-container">
             <h1 className="firstheader">Basic & Sport</h1>
     <div className="messages" ref={messagesRef}>
          {messages.map((message, index) => (
     <div
     key={index}
     className={`message ${message.sender}`}>
      <strong>
        {message.sender === "user" ? "Jij" : "Bot"}:
      </strong>{" "}
      {message.text}
    </div>
  ))}
  {isBotTyping && (
    <div className="message bot">
      <strong>Bot:</strong>{" "}
      Loading...
    </div>
  )}

    </div>


    {/* id="chat-form" */}
    <form onSubmit={handleSubmit}>
      <input
      className="input"
      type="text"
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder="Typ je bericht..." autoComplete="off" />


      <button type="submit" disabled={isLoading}>
          {isLoading ? "Versturen..." : "Verstuur"}
          </button>
    </form>



{/* veeranderen naar className */} 
    <div id="prompts">
        {suggestedPrompts.map(text => (
            <button
      key={text}
      className="prompt-btn"
      disabled={isLoading}
      onClick={() => sendMessage(text)}
    >
      {text}
    </button>
  ))}
    </div>



    </div>
</div>

        </>
    );
};

export default Chatbot;