import React from 'react'
import Chatboticon from './Chatboticon'
import './Chatbot.css'

function Chatmessage({ chat }) {
    return (
        <>
            <div className={`message ${chat.role === "model" ? 'bot' : 'user'}-message`}>
                {chat.role === "model" && <Chatboticon />}
                <p className="message-text">
                    {chat.text}
                </p>
            </div>
        </>
    )
}

export default Chatmessage
