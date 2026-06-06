import React from "react";
import MessageBubble from './MessageBubble';

export default function MessageList({ messages }) {
    return (
        <div className="w-full flex flex-col pb-4">
            {messages.map((msg) => (
                <MessageBubble
                    key={msg.id}
                    type={msg.sender}
                    text={msg.text}
                    time={msg.time}
                />
            ))}
        </div>
    )
}