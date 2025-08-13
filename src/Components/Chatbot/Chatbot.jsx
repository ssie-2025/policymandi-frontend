import React, {useState, useRef, useEffect} from 'react'
import './Chatbot.css'
import Chatboticon from './Chatboticon';
import Chatform from './Chatform';
import Chatmessage from './Chatmessage';

function Chatbot() {
    const [chatHistory, setChatHistory] = useState([]);
const [showChatbot, setShowChatbot] = useState(false);
const chatBodyRef = useRef();

const generateBotResponse = async (history) => {

    const updateHistory = (text) => {
        setChatHistory(prev => [...prev.filter(msg => msg.text !== "Thinking..."), {role: "model", text}]);
    }


  // Format the history as required by the Gemini API
  history = history.map(({ role, text }) => ({
    role,
    parts: [{ text }]
  }));

  const apiUrl = `${import.meta.env.VITE_API_URL}?key=${import.meta.env.VITE_API_KEY}`; // ✅ use VITE_ prefix

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ contents: history })
  };

  try {
    const response = await fetch(apiUrl, requestOptions);
    const contentType = response.headers.get("content-type");
    const raw = await response.text(); // Always read as text first

    console.log("Status:", response.status);
    console.log("Raw Response:", raw);

    let data = null;
    if (contentType && contentType.includes("application/json") && raw.trim() !== "") {
      data = JSON.parse(raw);
    }

    if (!response.ok) {
      const errorMessage = data?.error?.message || raw || "Something went wrong";
      throw new Error(errorMessage);
    }

    if (!data) {
      throw new Error("Empty or invalid response from API");
    }

    const apiResponseText = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, "$1").trim();
    updateHistory(apiResponseText);
    // console.log(" Gemini API Response:", data);
    // Optionally: update chat history or use the response

  } catch (error) {
    console.error(" Error:", error.message);
  }
};


useEffect(()=> {
    chatBodyRef.current.scrollTo({top: chatBodyRef.current.scrollHeight, behaviour: "smooth"});
},[chatHistory]);

  return (
    <div className={`container ${showChatbot ? 'show-chatbot' : ""}`}>
            <button onClick={() => setShowChatbot(prev => !prev)} id="chatbot-toggler">
                <span className='material-symbol-rounded'>💬</span>
                <span className='material-symbol-rounded'>✖</span>
            </button>

            <div className="chatbot-popup">
                <div className="chat-header">
                    <div className="header-info">
                        <Chatboticon />
                        <h2 className="logo-text">Chatbot</h2>
                    </div>
                    <button className="material-symbols-rounded">keyboard_arrow_down
                    </button>
                </div>
                <div ref={chatBodyRef} className="chat-body">
                    <div className="message bot-message">
                        <Chatboticon/>
                        <p className="message-text">
                            Hey there<br/> How can I help you today?
                        </p>
                    </div>
                    {chatHistory.map((chat, index) =>(
                        <Chatmessage key={index} chat={chat}/>
                    ))}
                    
                </div>
                <div className="chat-footer">
                    <Chatform chatHistory={chatHistory} setChatHistory={setChatHistory} generateBotResponse={generateBotResponse}/>
                </div>
            </div>
        </div>
  )
}

export default Chatbot
