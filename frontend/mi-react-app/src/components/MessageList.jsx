import MessageItem from "./MessageItem";

function MessageList({ messages }) {
    return (
        <div className="h-80 overflow-y-auto border border-slate-200 rounded-xl  p-4 bg-slate-50 mb-4 space-y-3">
            {messages.map((message) => (
                <MessageItem key={message.id} message={message} />
            ))}
        </div>
    );
}

export default MessageList;