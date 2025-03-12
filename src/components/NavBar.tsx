import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../utils/";
import { ArtifactLogo, MenuIcon, CloseIcon } from "../assets";

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    return (
        <nav className="absolute top-0 left-0 w-full flex justify-between px-6 py-4 bg-black bg-opacity-30 z-[80]">
            <Link to={"/"} className="flex items-center gap-6" aria-label="Home Artifact">
                <img src={ArtifactLogo} alt="Artifact Band Logo" className="w-10" />
                <span className="text-white text-2xl font-bold uppercase tracking-wide hidden md:block">
                    Artifact
                </span>
            </Link>
            <div className="hidden md:flex items-center gap-6">
                {navLinks.map(({ id, title, link }) => (
                    <Link 
                        to={link} 
                        key={id} 
                        className={`text-white text-lg font-semibold px-4 hover:text-gray-400 transition duration-200
                            ${location.pathname === link ? "text-yellow-400 font-bold" : ""}
                        `}
                        {...(location.pathname === link ? { "aria-current": "page" } : {})}
                    >
                        {title}
                    </Link>
                ))}
            </div>
            <button 
                className="md:hidden block relative z-[60]" 
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isOpen}
            >
                <img 
                    src={isOpen ? CloseIcon : MenuIcon} 
                    alt="" 
                    aria-hidden="true"
                    className="w-8" 
                />
            </button>
            <div 
                className={`fixed top-0 left-0 w-2/3 h-screen bg-black bg-opacity-90 text-white p-6 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 z-[50]`}
                role="navigation"
                aria-hidden={!isOpen}
            >
                <div className="flex flex-col gap-6 mt-10">
                    {navLinks.map(({ id, title, link }) => (
                        <Link 
                            to={link} 
                            key={id} 
                            className="text-white text-lg font-semibold hover:text-gray-300 transition duration-200"
                            {...(location.pathname === link ? { "aria-current": "page" } : {})}
                        >
                            {title}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};