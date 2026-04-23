import MessageItem from "./MessageItem";

function MessageList({ messages }) {
    return (
        <div className="message-list">
            {messages.map((message) => (
                <MessageItem key={message.id} message={message} />
            ))}
        </div>
    );
}

export default MessageList;