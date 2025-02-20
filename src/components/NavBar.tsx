import { Link } from "react-router-dom";
import { navLinks } from "../utils/constants";
import { ArtifactLogo } from "../assets";

export const NavBar = () => {
    return (
        <nav className="absolute top-0 left-0 w-full flex justify-between px-6 py-4 bg-black bg-opacity-30 z-50">
                {/* Logo + Band Name */}
                <Link to={"/"} className="flex items-center gap-6">
                    <img src={ArtifactLogo} alt="Artifact Band Logo" className="w-10" />
                    <span className="text-white text-2xl font-bold uppercase tracking-wide hidden md:block">Artifact</span>
                </Link>

                {/* Navigation Links */}
                <div className="flex items-center gap-6">
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
        </nav>
    );
};