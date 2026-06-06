import React from 'react';

export default function ChatLayout({ sidebar, chatHeader, messageList, chatInput }) {
  return (
    <div className="w-full h-screen flex overflow-hidden font-serif">
      <aside className="hidden sm:block w-64 lg:w-72 h-full flex-shrink-0 z-10 shadow-xl">
        {sidebar}
      </aside>

      <main className="flex-1 h-full flex flex-col bg-gradient-to-b from-[#D1C1D0] via-[#4B5557] to-[#4B5557] relative min-w-0">
        {chatHeader}
        <section className="flex-1 overflow-y-auto px-4 sm:px-6 pt-4 pb-2 flex flex-col scrollbar-thin scrollbar-thumb-[#A17B58] scrollbar-track-transparent">
          <div className="w-full max-w-4xl mx-auto flex flex-col h-full">
            {messageList}
          </div>
        </section>

        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6">
          {chatInput}
        </div>
      </main>
    </div>
  );
}