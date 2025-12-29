import React from 'react';

interface LogoProps {
    className?: string;
    light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = '', light = false }) => {
    return (
        <div className={`flex flex-col items-center justify-center text-center cursor-pointer transition-all duration-300 ${className}`}>
            <div className="flex flex-col items-center leading-[0.8]">
                <span className={`font-heading text-sm md:text-base lg:text-lg font-extrabold tracking-[0.08em] ${light ? 'text-white' : 'text-[#3d352e]'}`}>
                    ATELIER
                </span>
                <span className={`font-heading text-sm md:text-base lg:text-lg font-extrabold tracking-[0.08em] mt-0.5 ${light ? 'text-white' : 'text-[#3d352e]'}`}>
                    GASCHIGNARD
                </span>
            </div>
            <div className="mt-1 w-full flex items-center justify-between px-1">
                <div className={`h-[0.5px] flex-grow ${light ? 'bg-white/20' : 'bg-[#3d352e]/20'}`} />
                <span className={`font-body text-[5px] md:text-[6px] uppercase tracking-[0.2em] px-1.5 whitespace-nowrap ${light ? 'text-white/70' : 'text-[#3d352e]/70'}`}>
                    Chef Privé
                </span>
                <div className={`h-[0.5px] flex-grow ${light ? 'bg-white/20' : 'bg-[#3d352e]/20'}`} />
            </div>
        </div>
    );
};

export default Logo;
