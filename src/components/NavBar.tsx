import { Link } from "react-router-dom";
import { navLinks } from "../utils/constants";
import { ArtifactLogo } from "../assets";

const NavBar = () => {
    return (
        <nav className="w-full bg-black bg-opacity-30">
            <div className="w-[80%] max-w-6xl mx-auto flex justify-between items-center py-4">
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
            </div>
        </nav>
    );
};

export default NavBar;