import React, { useState, useEffect } from "react";
import IconMenu from "./icons/IconMenu";

export default function ChatHeader({ onOpenMenu }){
    const [currentDate, setCurrentDate] = useState("");

    useEffect(() =>{
        const updateDate = () =>{
            const now = new Date();
            
            const options = { weekday: 'long', day: 'numeric', month: 'long' };
            let formattedDate = now.toLocaleDateString('es-MX', options);
            
            formattedDate = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);

            setCurrentDate(formattedDate);
    };

        updateDate();
        return () => {};
    }, []);

    return (
        <div className="w-full flex items-center py-3 px-4 bg-white relative min-h-[64px]">
            <button 
                onClick={onOpenMenu}
                className="md:hidden p-2 text-onix-inactive hover:text-onix-textDark transition-colors rounded-lg hover:bg-gray-50 cursor-pointer"
            >
                <IconMenu className="w-6 h-6" />
            </button>
            <div className="absolute left-1/2 transform -translate-x-1/2">
                <button className="bg-onix-inactive hover:bg-onix-inactive text-onix-textLight font-hind text-xs font-medium px-4 py-1.5 rounded-full border border-onix-inactive/30 shadow-sm transition-colors cursor-default">
                    {currentDate || "Hoy"}
                </button>
            </div>
            
        </div>
    );
}