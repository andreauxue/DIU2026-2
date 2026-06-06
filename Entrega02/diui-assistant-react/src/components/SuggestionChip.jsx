import React from 'react';

export default function SuggestionChip({ icon: Icon, text, onClick }) {
    return (
        <button 
            onClick={onClick}
            className="bg-onix-sidebarBg/30 hover:bg-onix-sidebarBg/60 text-onix-textDark border border-onix-inactive/20 font-hind text-xs py-2 px-4 rounded-full transition-all shadow-sm flex items-center justify-center gap-2 md:text-center group"
        >
            {Icon && <Icon className="w-4 h-4 text-onix-inactive group-hover:text-onix-primary transition-colors" />}
            <span>{text}</span>
        </button>
  );
}