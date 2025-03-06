import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../utils/";
import { ArtifactLogo, MenuIcon, CloseIcon } from "../assets";

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    // ✅ Close menu when the route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]); // Runs when the path changes

    return (
        <nav className="absolute top-0 left-0 w-full flex justify-between px-6 py-4 bg-black bg-opacity-30 z-[80]">
            {/* Logo + Band Name */}
            <Link to={"/"} className="flex items-center gap-6">
                <img src={ArtifactLogo} alt="Artifact Band Logo" className="w-10" />
                <span className="text-white text-2xl font-bold uppercase tracking-wide hidden md:block">
                    Artifact
                </span>
            </Link>

            {/* Desktop Navigation Links (Hidden on Small Screens) */}
            <div className="hidden md:flex items-center gap-6">
                {navLinks.map(({ id, title, link }) => (
                    <Link 
                        to={link} 
                        key={id} 
                        className="text-white text-lg font-semibold px-4 hover:text-gray-300 transition duration-200"
                    >
                        {title}
                    </Link>
                ))}
            </div>

            {/* ✅ Hamburger Menu Button (Toggles Mobile Menu) */}
            <button className="md:hidden block relative z-[60]" onClick={() => setIsOpen(!isOpen)}>
                <img src={isOpen ? CloseIcon : MenuIcon} alt="Menu Toggle" className="w-8" />
            </button>

            {/* ✅ Mobile Menu Sidebar (Auto Closes on Navigation) */}
            <div className={`fixed top-0 left-0 w-2/3 h-screen bg-black bg-opacity-90 text-white p-6 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 z-[50]`}>
                
                {/* Mobile Nav Links */}
                <div className="flex flex-col gap-6 mt-10">
                    {navLinks.map(({ id, title, link }) => (
                        <Link 
                            to={link} 
                            key={id} 
                            className="text-white text-lg font-semibold hover:text-gray-300 transition duration-200"
                        >
                            {title}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};
