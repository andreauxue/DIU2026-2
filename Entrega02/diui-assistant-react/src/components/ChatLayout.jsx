import React ,{useState} from "react";
import Sidebar from "./Sidebar";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import IconClose from "./icons/IconClose"; 
import IconMenu from "./icons/IconMenu";

export default function ChatLayout({ children, isEmpty, onSendMessage, onNewChat, chatTime}) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <div className="flex h-screen w-full bg-onix-generalBg font-hind p-0 md:p-4 gap-0 overflow-hidden relative">
            
            <aside className="hidden md:flex md:w-64 flex-shrink-0 bg-onix-sidebarBg md:rounded-l-3xl overflow-hidden shadow-lg z-10">
                <Sidebar onNewChat={onNewChat} chatTime= {chatTime}/>
            </aside>

            {isMobileMenuOpen && (
                <div 
                    className="fixed inset-0 bg-black/40 z-40 md:hidden transition-opacity backdrop-blur-sm"
                    onClick={toggleMobileMenu}
                ></div>
            )}

            <div 
                className={`fixed inset-y-0 left-0 z-50 w-4/5 max-w-sm bg-onix-sidebarBg transform transition-transform duration-300 ease-in-out md:hidden flex flex-col shadow-2xl 
                ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <button 
                    onClick={toggleMobileMenu} 
                    className="absolute top-4 right-4 z-50 p-2 bg-white/20 text-onix-textDark rounded-full hover:bg-white/40 transition-colors backdrop-blur-md cursor-pointer"
                >
                    <IconClose className="w-5 h-5" />
                </button>
                
                <Sidebar onNewChat={onNewChat} chatTime= {chatTime}/>
            </div>

            <main className="flex flex-col flex-1 h-full bg-white md:rounded-r-3xl shadow-lg overflow-hidden relative z-0">
                {isEmpty && (
                    <div className="absolute top-4 left-4 z-20 md:hidden">
                        <button 
                            onClick={toggleMobileMenu} 
                            className="p-2 text-onix-textDark hover:bg-gray-100 rounded-lg bg-white/80 shadow-sm backdrop-blur-sm transition-colors cursor-pointer"
                        >
                            <IconMenu className="w-6 h-6" />
                        </button>
                    </div>
                )}

                {!isEmpty && <ChatHeader onOpenMenu={toggleMobileMenu} />}

                <div className={`flex-1 overflow-y-auto p-6 bg-white flex flex-col ${isEmpty ? 'justify-center' : ''}`}>
                    {children}
                </div>

                {!isEmpty && (
                    <footer className="p-4 bg-white border-t border-onix-inactive/30">
                        <div className="w-full flex justify-center">
                           <ChatInput onSendMessage={onSendMessage} />
                        </div>
                    </footer>
                )}

            </main>
        </div>
    );
}